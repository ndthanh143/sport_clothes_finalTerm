import { useState, useEffect, useMemo } from 'react';
import classNames from 'classnames/bind';
import { FaLock, FaPhone, FaTruck, FaTruckMoving } from 'react-icons/fa';
import Button from '~/components/Button';
import ColorSelection from '~/components/ColorSelection';
import SizeSelection from '~/components/SizeSelection';
import styles from './ProductDetail.module.scss';

import galleries from '~/assets/images/categories/galleries';
import { addItemToCart } from '~/actions/cartActions';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);
function ProductDetail({ product }) {
    const { id } = useParams();

    const [chooseSize, setChooseSize] = useState('');
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addItemToCart(id, quantity));
        alert('Item added successfully to cart');
    };

    return (
        <div className={cx('product-detail')}>
            <div className={cx('order')}>
                <div className={cx('heading')}>
                    <h2>{product.name}</h2>
                </div>
                <div className={cx('price')}>
                    <span>{product.price.toLocaleString({ miniumFractionDigits: 3 })}đ</span>
                </div>
                <div className={cx('variants')}>
                    <div className={cx('size')}>
                        <div className={cx('header')}>Kích thước:</div>
                        <div className={cx('select')}>
                            <div className={cx('element')}>
                                <SizeSelection size="S" />
                            </div>
                            <div className={cx('element')}>
                                <SizeSelection size="M" />
                            </div>
                            <div className={cx('element')}>
                                <SizeSelection size="L" />
                            </div>
                            <div className={cx('element')}>
                                <SizeSelection size="XL" />
                            </div>
                            <div className={cx('element')}>
                                <SizeSelection size="2XL" />
                            </div>
                        </div>
                    </div>
                    <div className={cx('colors')}>
                        <div className={cx('header')}>Màu sắc: </div>
                        <div className={cx('select')}>
                            <div className={cx('element')}>
                                <ColorSelection color={'red'} />
                            </div>
                            <div className={cx('element')}>
                                <ColorSelection color={'yellow'} />
                            </div>
                            <div className={cx('element')}>
                                <ColorSelection color={'orange'} />
                            </div>
                            <div className={cx('element')}>
                                <ColorSelection color={'purple'} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('action')}>
                        <div className={cx('quantity')}>
                            <button className={cx('btn')} onClick={handleDecrement}>
                                -
                            </button>
                            <div className={cx('text')}>{quantity}</div>
                            <button className={cx('btn')} onClick={handleIncrement}>
                                +
                            </button>
                        </div>
                        <div className={cx('add-btn')}>
                            <Button primary onClick={addToCart}>
                                Thêm vào giỏ
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('delivery')}>
                <ul className={cx('info-list')}>
                    <li className={cx('item')}>
                        <span>
                            <FaLock />
                        </span>
                        Cam kết 100% chính hãng
                    </li>

                    <li className={cx('item')}>
                        <span>
                            <FaTruckMoving />
                        </span>
                        Giao hàng dự kiến: <br /> <b>Thứ 2 - Thứ 6 từ 9h00 - 17h00</b>
                    </li>
                    <li className={cx('item')}>
                        <span>
                            <FaPhone />
                        </span>
                        Hỗ trợ 24/7 <br /> Với các kênh chat, email & phone
                    </li>
                </ul>
            </div>
            <div className={cx('description')}>{galleries[0].description()}</div>
        </div>
    );
}

export default ProductDetail;
