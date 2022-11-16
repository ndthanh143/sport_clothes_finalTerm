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
            <Breadcrumb cases={{ title: 'Giới Thiệu Công Ty TNHH Thể Thao CP' }} />
            <div className={cx('container')}>
                <div className={cx('wrap-content')}>
                    <div className={cx('header')}>
                        <h1>Giới Thiệu Công Ty TNHH Thể Thao CP</h1>
                    </div>
                    <div className={cx('content')}>
                        <h4 className={cx('title')}> Giới Thiệu Công Ty TNHH Thể Thao CP</h4>
                        <p>
                            &emsp; Được thành lập từ năm 2008 với sự quyết tâm, ý chí bền vững của toàn thể ban lãnh đạo
                            và nhân viên, CP SPORT đã khẳng định vị trí của mình ở lĩnh vực sản xuất trang phục thể thao
                            khi có hơn 500 nhà phân phối, đại lý có mặt ở 64 tỉnh thành. CP SPORT được biết đến như một
                            công ty sản xuất đồ thể thao chuyên nghiệp đầu tiên tại Việt Nam với chất lượng, uy tín và
                            năng suất cao.
                        </p>
                        <div className={cx('image')}>
                            <img src={aboutPageImages[0]} alt="img" />
                            <br />
                            <span>Hình ảnh nhân viên giao hàng cho các nhà phân phối và đại lý</span>
                        </div>
                        <p>
                            &emsp; Vào năm 2018, thương hiệu EGAN ra đời nhằm đánh dấu kỷ niệm 10 năm chặng đường hình
                            thành và phát triển của CP SPORT. Đây là một thương hiệu thuộc phân khúc trang phục thể thao
                            cao cấp “Made in Vietnam”, các sản phẩm EGAN nhanh chóng được sự đón nhận của các khách hàng
                            và chiếm nhiều thị phần trong nước vì tính năng, chất lượng, mẫu mã đẹp, các sản phẩm được
                            sử dụng chất liệu vải chống được tia UV giúp bảo vệ sức khỏe cho người sử dụng. EGAN không
                            chỉ có trang phục thể thao mà còn phát triển thêm nhiều dòng sản phẩm khác nhằm đáp ứng các
                            nhu cầu của thị trường như: Polo Egan, túi, nón, quần short, áo khoác, quần dài, áo Body
                            chống nắng và các phụ kiện liên quan đến bóng đá,….
                        </p>
                        <div className={cx('image')}>
                            <img src={aboutPageImages[1]} alt="img" />
                            <br />
                            <span>Hình ảnh về các sản phẩm của thương hiệu Egan.</span>
                        </div>
                        <p>
                            &emsp; Trụ sở chính công ty được đặt tại Thành phố Hồ Chí Minh và hệ thống các nhà phân
                            phối, đại lý có mặt ở khắp các tỉnh thành trong nước. Công ty luôn mong muốn mang đến tay
                            người tiêu dùng các sản phẩm chất lượng tốt nhất, an toàn và phù hợp với mọi đối tượng. Với
                            các tiêu chí đó mà ban lãnh đạo đã không ngừng cải tiến công nghệ kỹ thuật trong sản xuất,
                            tìm kiếm và nâng cao tay nghề cho các công nhân, áp dụng các kỹ thuật và công nghệ tiên tiến
                            vào trong từng khâu sản xuất để nâng cao chất lượng sản phẩm. Việc kiểm tra, kiểm duyệt các
                            sản phẩm trước khi đến tay khách hàng cũng rất được các ban lãnh đạo quan tâm và chú trọng.
                        </p>
                        <div className={cx('image')}>
                            <img src={aboutPageImages[2]} alt="img" />
                            <br />
                            <img src={aboutPageImages[3]} alt="img" />
                            <br />
                            <span>Hình ảnh về dây chuyền sản xuất, công nhân may mặc và kiểm tra sản phẩm.</span>
                        </div>
                        <p>
                            &emsp; Hiện nay, với quy mô hơn 500 công nhân viên, mỗi thành viên CP SPORT Việt Nam đều làm
                            việc với sự tự hào và tinh thần trách nhiệm để tạo ra những sản phẩm chất lượng đến tay
                            người tiêu dùng trong và ngoài nước. Tập thể CP SPORT hiểu rằng, sứ mệnh của công ty không
                            chỉ đơn giản là mang đến cho người tiêu dùng những sản phẩm chất lượng và an toàn nhất mà
                            còn qua chính từng bộ trang phục đó, người tiêu dùng Việt có thể tin tưởng, tự hảo hơn về
                            những sản phẩm được sản xuất tại Việt Nam. Với khẩu hiệu “Change the Play” – thay đổi cuộc
                            chơi, CP SPORT mong muốn có thể tạo ra môi trường lành mạnh, mang đến lợi ích cho cộng sự,
                            đối tác và trên hết là khách hàng, người tiêu dùng sản phẩm.
                        </p>
                        <div className={cx('image')}>
                            <img src={aboutPageImages[4]} alt="img" />
                            <br />
                            <span>Hình ảnh chương trình đào tạo nâng cao tay nghề cho toàn thể nhân viên công ty.</span>
                            <div className={cx('image')}>
                                <img src={aboutPageImages[5]} alt="img" />
                                <br />
                                <img src={aboutPageImages[6]} alt="img" />
                                <br />
                                <img src={aboutPageImages[7]} alt="img" />
                            </div>

                            <span>
                                Hình ảnh về khóa học ISO 9001:2005 dành cho ban giám đốc và các trưởng đầu ngành của
                                công ty.
                            </span>
                        </div>
                        <p>
                            &emsp; Bên cạnh việc kinh doanh, hoạt động thể thao cộng đồng luôn được Ban giám đốc công ty
                            chú trọng. CP SPORT rất tích cực trong việc tài trợ đồng hành cùng thể thao Việt Nam, từ cấp
                            độ phong trào đến chuyên nghiệp. Các hoạt động tài trợ của CP SPORT có thể kể đến như: tài
                            trơ toàn bộ trang phục tập luyện, thi đấu, di chuyển cho đội tuyển Futsal chuyên nghiệp như
                            Sahako, CLB Futsal Tân Hiệp Hưng, CLB Futsal Cao Bằng, CLB Futsal Vietfootball, CLB Futsal
                            Saigon Kardiachain,… và các giải đấu bóng đá phong trào trên toàn quốc: Giải Futsal chuyên
                            nghiệp Việt Nam –VFL, Giải thể thao sinh viên Việt Nam – VUG, Giải bóng đá phong trào sân 7
                            toàn quốc – PL, SPL, HPL, KPL và cùng nhiều hoạt động phong trào khác trên khắp cả nước.
                        </p>
                        <div className={cx('image')}>
                            <img src={aboutPageImages[8]} alt="img" />
                            <br />
                            <img src={aboutPageImages[9]} alt="img" />
                            <br />
                            <img src={aboutPageImages[10]} alt="img" />
                            <br />

                            <span>Hình ảnh CP SPORT đồng hành tài trợ các giải đấu.</span>
                        </div>
                        <p>
                            &emsp; Với phương châm “Uy tín nằm ở chất lượng”, CP SPORT luôn nỗ lực từng ngày để phát
                            triển công nghệ sản xuất và sản phẩm nhằm đáp ứng nhu cầu của người tiêu dùng. Đồng thời, là
                            một thương hiệu Việt Nam, CP SPORT mong muốn góp phần trong việc khẳng định chất lượng của
                            doanh nghiệp Việt.
                        </p>
                    </div>
                </div>
                <SideBar>
                    <SideBox title="Danh Mục page" collapsible>
                        <div className={cx('sidebar-list')}>
                            <ul className={cx('menu-list')}>
                                <li className={cx('item')}>
                                    <Link to="/">Thông tin tuyển dụng</Link>
                                </li>
                                <li className={cx('item')}>
                                    <Link to="/">Tìm kiếm</Link>
                                </li>
                                <li className={cx('item')}>
                                    <Link to="/">Giới thiệu</Link>
                                </li>
                                <li className={cx('item')}>
                                    <Link to="/">Chính sách đổi trả</Link>
                                </li>
                                <li className={cx('item')}>
                                    <Link to="/">Chính sách cộng tác viên & Đại lý</Link>
                                </li>
                                <li className={cx('item')}>
                                    <Link to="/">Hướng dẫn mua hàng</Link>
                                </li>
                                <li className={cx('item')}>
                                    <Link to="/">Chính sách bảo mật</Link>
                                </li>
                                <li className={cx('item')}>
                                    <Link to="/">Hướng dẫn cách thanh toán và áp dụng Voucher trên REEPAY</Link>
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
