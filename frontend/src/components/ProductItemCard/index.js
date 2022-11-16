import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './ProductItemCard.module.scss';

const cx = classNames.bind(styles);
function ProductItemCard({ item, numberColumn, horizontal }) {
    return (
        <Link to={`/product/${item._id}`} className={cx('product', numberColumn, { horizontal })}>
            <div className={cx('image-list')}>
                <img src={item.images[0].url} alt={item.name} className={cx('first-image')} />
                <img src={item.images[1].url} alt={item.name} className={cx('second-image')} />
            </div>

            <div className={cx('detail')}>
                <Link to={`/product/${item._id}`} className={cx('title')}>
                    {item.name}
                </Link>
                <p className={cx('price')}>{item.price.toLocaleString({ miniumFractionDigits: 3 })}₫</p>
            </div>
            {item.amount == 0 ? <span className={cx('label-sold-out')}>Hết hàng</span> : null}
        </Link>
    );
}

export default ProductItemCard;
