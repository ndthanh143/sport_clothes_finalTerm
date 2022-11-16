import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Button from '~/components/Button';
import styles from './MiddleHeader.module.scss';
import Search from '~/components/Search';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '~/actions/userActions';
import { removeItemFromCart } from '~/actions/cartActions';
import { FaChevronDown } from 'react-icons/fa';

const cx = classNames.bind(styles);

function MiddleHeader() {
    const [actionShow, setActionShow] = useState({
        account: false,
        cart: false,
    });
    let totalPrice = 0;
    const dispatch = useDispatch();

    const { isAuthenticated, error, loading, user } = useSelector((state) => {
        return state.auth;
    });

    const { cartItems } = useSelector((state) => state.cart);

    const handleActionShow = (type) => {
        if (type === 'account') {
            if (actionShow.account === false) {
                setActionShow({ account: true, cart: false });
            } else {
                setActionShow({ account: false, cart: false });
            }
        }
        if (type === 'cart') {
            if (actionShow.cart === false) {
                setActionShow({ account: false, cart: true });
            } else {
                setActionShow({ account: false, cart: false });
            }
        }
    };

    const handleDeleteProduct = (id) => {
        dispatch(removeItemFromCart(id));
    };

    const handleLogout = () => {
        dispatch(logout());
        // window.location.reload();
    };

    const handleDropdownClick = (e) => {
        e.stopPropagation();
    };
    if (loading) {
    } else {
        return (
            <div className={cx('middle')}>
                <div className={cx('container')}>
                    <div className={cx('logo')}>
                        <Link to="/">
                            <img
                                src="//theme.hstatic.net/200000247969/1000814323/14/logo.png?v=37"
                                alt="Công ty TNHH Thể thao CP"
                            />
                        </Link>
                    </div>
                    <Search />
                    <div className={cx('action')}>
                        <div
                            className={actionShow.account ? cx('account', 'js-action-show') : cx('account')}
                            onClick={() => {
                                handleActionShow('account');
                            }}
                        >
                            {isAuthenticated ? (
                                <div className={cx('text')}>
                                    <div className={cx('link')}>
                                        <span className={cx('box-icon')}>
                                            <img src={images.user} alt="User" />
                                        </span>
                                        <span className={cx('box-text')}>
                                            Tài khoản của <br />
                                            {user.name}
                                        </span>
                                        <span className={cx('arrow-drop')}>
                                            <FaChevronDown />
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <Link to="/login" className={cx('text')}>
                                    <div className={cx('link')}>
                                        <span className={cx('box-icon')}>
                                            <img src={images.user} alt="User" />
                                        </span>
                                        <span className={cx('box-text')}>Đăng nhập / Đăng ký</span>
                                    </div>
                                </Link>
                            )}

                            {isAuthenticated && (
                                <div className={cx('dropdown')} onClick={(e) => handleDropdownClick(e)}>
                                    <div className={cx('dropdown-content')}>
                                        <div className={cx('title')}>
                                            <h2 className={cx('heading')}>Thông tin tài khoản</h2>
                                        </div>
                                        <div className={cx('inner')}>
                                            <h2 className={cx('user-name')}>{user.name}</h2>
                                            <ul className={cx('list')}>
                                                <li className={cx('item')}>
                                                    <Link to="/account">Tài khoản của tôi</Link>
                                                </li>
                                                {user && user.role !== 'user' ? (
                                                    <li className={cx('item')}>
                                                        <Link to="/admin/dashboard">
                                                            <b>Trang quản lý</b>
                                                        </Link>
                                                    </li>
                                                ) : null}
                                                <li className={cx('item')} onClick={handleLogout}>
                                                    Đăng xuất
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div
                            className={actionShow.cart ? cx('cart', 'js-action-show') : cx('cart')}
                            onClick={() => handleActionShow('cart')}
                        >
                            <div className={cx('text')}>
                                <div className={cx('link')}>
                                    <span className={cx('box-icon')}>
                                        <img src={images.cart} alt="Cart" />
                                        <span className={cx('count-holder')}>
                                            <span className={cx('count')}>{cartItems.length}</span>
                                        </span>
                                    </span>
                                    <span className={cx('box-text')}>Giỏ hàng</span>
                                </div>
                                <div className={cx('dropdown')} onClick={(e) => handleDropdownClick(e)}>
                                    <div className={cx('dropdown-content')}>
                                        <div className={cx('title')}>
                                            <h2 className={cx('content')}>giỏ hàng</h2>
                                        </div>
                                        <div className={cx('cart-view')}>
                                            {cartItems.length > 0 ? (
                                                cartItems.map((item, index) => {
                                                    totalPrice += item.price * item.quantity;
                                                    return (
                                                        <div className={cx('cart-view-container')} key={index}>
                                                            <Link
                                                                to={`/product/${item.product}`}
                                                                className={cx('thumb')}
                                                            >
                                                                <img src={item.image} alt="" />
                                                            </Link>
                                                            <div className={cx('content')}>
                                                                <p className={cx('name')}>{item.name}</p>
                                                                <div className={cx('value')}>
                                                                    <span className={cx('quantity')}>
                                                                        {item.quantity}
                                                                    </span>
                                                                    <span className={cx('price')}>
                                                                        {item.price.toLocaleString({
                                                                            miniumFractionDigits: 3,
                                                                        })}
                                                                        đ
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <button
                                                                className={cx('delete-button')}
                                                                onClick={() => {
                                                                    handleDeleteProduct(item.product);
                                                                }}
                                                            >
                                                                X
                                                            </button>
                                                        </div>
                                                    );
                                                })
                                            ) : (
                                                <>
                                                    <div className={cx('mini-cart-icon')}>
                                                        <img src={images.cartEmty} alt="cart" />
                                                    </div>
                                                    <div className={cx('content')}>Hiện chưa có sản phẩm</div>
                                                </>
                                            )}
                                        </div>
                                        <table className={cx('total')}>
                                            <tbody>
                                                <tr>
                                                    <td className={cx('total-text')}>Tổng tiền:</td>
                                                    <td className={cx('total-amount')}>
                                                        {totalPrice.toLocaleString({ miniumFractionDigits: 3 })}₫
                                                    </td>
                                                </tr>
                                                <tr className={cx('button')}>
                                                    <td>
                                                        <span className={cx('link-to-cart')}>
                                                            <Button primary to="/cart">
                                                                xem giỏ hàng
                                                            </Button>
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span className={cx('link-to-pay')}>
                                                            <Button primaryReverse to="/checkout">
                                                                thanh toán
                                                            </Button>
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MiddleHeader;
