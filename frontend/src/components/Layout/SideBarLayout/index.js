import { useState } from 'react';
import { FaBook, FaChevronDown, FaProductHunt } from 'react-icons/fa';
import { AiFillDashboard } from 'react-icons/ai';
import { BsFillHandbagFill, BsFillPeopleFill } from 'react-icons/bs';
import { GrFormAdd } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './SideBarLayout.module.scss';
const cx = classNames.bind(styles);

function SideBarLayout({ children }) {
    const [openSubnav, setOpenSubnav] = useState(false);

    const handleOpenSubnav = () => {
        if (openSubnav) {
            setOpenSubnav(!openSubnav);
        }
        if (!openSubnav) {
            setOpenSubnav(!openSubnav);
        }
    };
    return (
        <>
            <div className={cx('container')}>
                <div className={cx('sidebar')}>
                    <ul className={cx('sidebar-list')}>
                        <li className={cx('sidebar-item', 'dashboard')}>
                            <Link to="/admin/dashboard">
                                <span className={cx('icon-nav')}>
                                    <AiFillDashboard />
                                </span>{' '}
                                Dashboard
                            </Link>
                        </li>
                        <li
                            className={cx('sidebar-item', 'product', { openSubnav: openSubnav })}
                            onClick={handleOpenSubnav}
                        >
                            <span className={cx('wrapper-text')}>
                                <p className={cx('text')}>
                                    <span className={cx('icon-nav')}>
                                        <FaProductHunt />
                                    </span>
                                    Products
                                </p>{' '}
                                <span className={cx('icon')}>
                                    <FaChevronDown />
                                </span>
                            </span>
                            <ul
                                className={cx('product-nav-list')}
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}
                            >
                                <li className={cx('item')}>
                                    <Link to="/admin/product" className={cx('link')}>
                                        <span className={cx('icon-nav')}>
                                            <FaBook />
                                        </span>
                                        All
                                    </Link>
                                </li>
                                <li className={cx('item')}>
                                    <Link to="/admin/product/new" className={cx('link')}>
                                        <span className={cx('icon-nav')}>
                                            <GrFormAdd />
                                        </span>
                                        Create
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className={cx('sidebar-item', 'order')}>
                            <Link to="/admin/orders">
                                <span className={cx('icon-nav')}>
                                    <BsFillHandbagFill />
                                </span>
                                Orders
                            </Link>
                        </li>
                        <li className={cx('sidebar-item', 'user')}>
                            <Link to="/admin/users">
                                <span className={cx('icon-nav')}>
                                    <BsFillPeopleFill />
                                </span>
                                Users
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={cx('content')}>{children}</div>
            </div>
        </>
    );
}

export default SideBarLayout;
