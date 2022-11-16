import { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';

const cx = classNames.bind(styles);

function NavBar() {
    const [navbarSticky, setNavbarSticky] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const controlNavbar = () => {
        if (window.scrollY > 270) {
            setNavbarSticky(true);
            setIsSticky(true);
        } else {
            setNavbarSticky(false);
            setIsSticky(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, []);

    return (
        <div className={cx('container', navbarSticky && 'navbar-sticky')}>
            <div className={cx('navbar-wrapper')}>
                <div className={cx('logo')}>
                    <img
                        src="//theme.hstatic.net/200000247969/1000814323/14/logo.png?v=37"
                        alt="Công ty TNHH Thể thao CP"
                    />
                </div>
                <div className={cx('menu-wrapper')}>
                    <Menu isSticky={isSticky}>
                        <MenuItem title="Trang chủ" to={config.routes.home} />
                        <MenuItem
                            title="Danh mục sản phẩm "
                            to={config.routes.collection}
                            icon={<FaChevronUp />}
                            hasSubmenu
                        />
                        <MenuItem title="Tin tức &amp; sự kiện" to={config.routes.news} />
                        <MenuItem title="Giới thiệu" to={config.routes.about} />
                        <MenuItem title="Liên hệ" to={config.routes.contact} />
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
