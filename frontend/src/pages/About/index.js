import classNames from 'classnames/bind';
import styles from './About.module.scss';
import aboutPageImages from '~/assets/images/aboutPageImages';
import Breadcrumb from '~/components/Breadcrumb';
import SideBar from '~/components/Layout/components/SideBar';
import SideBox from '~/components/SideBox';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function About() {
    return (
        <>
            <Breadcrumb cases={{ title: 'Giới thiệu' }} />
            <div className={cx('container')}>
                <div className={cx('wrap-content')}>
                    <div className={cx('header')}>
                        <h1>Chào Mừng Đến Với cửa hàng quần áo bóng đá</h1>
                    </div>
                    <div className={cx('content')}>
                        <h4 className={cx('title')}>Về Chúng Tôi</h4>
                        <p>
                            &emsp; Cửa hàng chúng tôi chuyên cung cấp các mặt hàng thể thao, đặc biệt là đồ dùng, quần áo và phụ kiện bóng đá. Tất cả sản phẩm của chúng tôi đều được nhập khẩu chính hãng, đảm bảo chất lượng cao và giá cả phải chăng.
                        </p>
                        <div className={cx('image')}>
                            <img src={aboutPageImages[0]} alt="Football Jerseys" />
                            <br />
                            <span>Kho áo đấu bóng đá chính hãng từ các câu lạc bộ lớn</span>
                        </div>
                        <p>
                            &emsp; Với kinh nghiệm nhiều năm trong lĩnh vực thể thao, chúng tôi tự hào là địa chỉ đáng tin cậy cho những ai đam mê bóng đá.
                        </p>
                        <div className={cx('image')}>
                            <img src={aboutPageImages[1]} alt="Football Shoes" />
                            <br />
                            <span>Giày đá bóng các loại, phù hợp mọi lứa tuổi</span>
                        </div>
                        <p>
                            &emsp; Không chỉ bán hàng, chúng tôi còn là nơi chia sẻ niềm đam mê bóng đá, kết nối cộng đồng người hâm mộ tại Việt Nam.
                        </p>
                        <div className={cx('image')}>
                            <img src={aboutPageImages[2]} alt="Football Accessories" />
                            <br />
                            <img src={aboutPageImages[3]} alt="More Football Gear" />
                            <br />
                            <span>Thiết bị phụ kiện bổ trợ: Bóng, găng tay thủ môn, băng đội trưởng...</span>
                        </div>
                        <p>
                            &emsp; Hãy đến với Shop Đồ Bóng Đá để cảm nhận sự khác biệt và tận hưởng trải nghiệm mua sắm tuyệt vời!
                        </p>
                    </div>
                </div>
                <SideBar>
                    <SideBox title="Thông Tin Liên Hệ" collapsible>
                        <div className={cx('sidebar-list')}>
                            <ul className={cx('menu-list')}>
                                <li className={cx('item')}>
                                    <Link to="/contact">Liên Hệ</Link>
                                </li>
                                <li className={cx('item')}>
                                    <Link to="/collection">Danh sách sản phẩm</Link>
                                </li>
                                <li className={cx('item')}>
                                    <Link to="/about">Giới Thiệu</Link>
                                </li>
                            </ul>
                        </div>
                    </SideBox>
                </SideBar>
            </div>
        </>
    );
}

export default About;
