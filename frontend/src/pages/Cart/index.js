import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import SideBox from '~/components/SideBox';
import styles from './Cart.module.scss';
import Breadcrumb from '~/components/Breadcrumb';
import SideBar from '~/components/Layout/components/SideBar';
const cx = classNames.bind(styles);

function Cart() {
    const [note, setNote] = useState('');
    const navigate = useNavigate();
    const { isAuthenticated } = useSelector((state) => state.auth);

    const handleIncrement = (index) => {
        // cartItems[index].quantity--;
        // alert(cartItems[index].quantity);
    };
    const handleDecrement = (index) => {
        // cartItems[index].quantity++;
        // alert(cartItems[index].quantity);
    };
    const checkoutHandler = () => {
        if (isAuthenticated) {
            navigate('/shipping');
        } else {
            navigate('/login?');
        }
    };

    const { cartItems } = useSelector((state) => state.cart);

    let total = 0;
    cartItems.map((item) => {
        total += item.price * item.quantity;
    });

    return (
        <>
            <Breadcrumb cases={{ title: `Giỏ hàng (${cartItems.length})` }} />
            <div className={cx('container')}>
                <div className={cx('heading')}>
                    <h1 className={cx('title')}>Giỏ hàng của bạn</h1>
                </div>
                <div className={cx('content-wrapper')}>
                    <div className={cx('content')}>
                        <p className={cx('sub-title')}>
                            Bạn đang có <b>{cartItems.length} sản phẩm </b> trong giỏ hàng
                        </p>
                        {cartItems.map((item, index) => (
                            <div className={cx('product')} key={index}>
                                <div className={cx('product-content')}>
                                    <Link to={`/product/${item.product}`} className={cx('thumb')}>
                                        <img src={item.image} alt={item.name} />
                                    </Link>
                                    <div className={cx('description')}>
                                        <p className={cx('name')}>{item.name}</p>
                                        <div className={cx('quantity')}>
                                            <button className={cx('decrease')} onClick={() => handleDecrement(index)}>
                                                -
                                            </button>
                                            <span className={cx('value')}>{item.quantity}</span>
                                            <button className={cx('increase')} onClick={() => handleIncrement(index)}>
                                                +
                                            </button>
                                        </div>
                                        <div className={cx('price')}>
                                            {item.price.toLocaleString({ miniumFractionDigits: 3 })}đ
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('footer')}>
                                    <p className={cx('text')}>Thành tiền:</p>
                                    <p className={cx('total')}>
                                        {(item.price * item.quantity).toLocaleString({ miniumFractionDigits: 3 })}đ
                                    </p>
                                </div>
                            </div>
                        ))}

                        <div className={cx('notation')}>
                            <label className={cx('title')}>Ghi chú đơn hàng</label>
                            <textarea
                                type="text"
                                name="note"
                                className={cx('text-input')}
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                            />
                        </div>
                    </div>

                    <SideBar>
                        <SideBox title="Thông tin đơn hàng">
                            <ul className={cx('menu-list')}>
                                <li className={cx('item')}>
                                    <p className={cx('title')}>Tổng tiền</p>
                                    <span className={cx('price')}>
                                        {total.toLocaleString({ miniumFractionDigits: 3 })}đ
                                    </span>
                                </li>
                                <li className={cx('item')}>
                                    <p className={cx('sub-title')}>Bạn có thể nhập mã giảm giá ở trang thanh toán</p>
                                    <div className={cx('button-pay')} onClick={checkoutHandler}>
                                        <Button primary>Thanh toán</Button>
                                    </div>
                                </li>
                            </ul>
                        </SideBox>
                    </SideBar>
                </div>
                <Link to="/collection" className={cx('btn-buy-more')}>
                    <Button tton basic>
                        Tiếp tục mua hàng
                    </Button>
                </Link>
            </div>
        </>
    );
}

export default Cart;
