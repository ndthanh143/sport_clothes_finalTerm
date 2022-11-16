import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Dashboard.module.scss';
import { useEffect } from 'react';
import { getAdminProducts } from '~/actions/productActions';
import { getAllUsers } from '~/actions/userActions';
import { getAllOrders } from '~/actions/orderAction';
import Loader from '~/components/Loader';

const cx = classNames.bind(styles);

function Dashboard() {
    const { products, loading: ldProd } = useSelector((state) => state.products);
    const { users, loading: ldUser } = useSelector((state) => state.auth);
    const { orders, totalAmount, ldOrder } = useSelector((state) => state.orders);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAdminProducts());
        dispatch(getAllUsers());
        dispatch(getAllOrders());
    }, []);
    if (ldProd || ldUser || ldOrder) {
        return <Loader />;
    } else {
        return (
            <div className={cx('container')}>
                <h1 className={cx('heading')}>DASHBOARD</h1>
                <div className={cx('fields')}>
                    <div className={cx('total')}>
                        <h3 className={cx('title')}>Total Amount</h3>
                        <div className={cx('number')}>{totalAmount}đ</div>
                    </div>
                    <div className={cx('management')}>
                        <div className={cx('type', 'product')}>
                            <h3 className={cx('title')}>Products</h3>
                            <div className={cx('number')}>{products.length}</div>
                        </div>
                        <div className={cx('type', 'order')}>
                            <h3 className={cx('title')}>Orders</h3>
                            <div className={cx('number')}>{orders.length}</div>
                        </div>
                        <div className={cx('type', 'user')}>
                            <h3 className={cx('title')}>Users</h3>
                            <div className={cx('number')}>{users.length} </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
