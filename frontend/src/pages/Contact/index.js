import React from 'react';
import classNames from 'classnames/bind';
import { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa';
import Breadcrumb from '~/components/Breadcrumb';
import Button from '~/components/Button';
import styles from './contact.module.scss';

const cx = classNames.bind(styles);
function Contact() {
    return (
        <>
            <Breadcrumb cases={{ title: 'Liên hệ' }} />
            <div className={cx('container')}>
                <div className={cx('location')}></div>
                <div className={cx('content')}>
                    <div className={cx('info')}>
                        <h2 className={cx('heading')}>Thông tin liên hệ</h2>
                        <ul className={cx('contact-list')}>
                            <li>
                                <span className={cx('icon')}>
                                    <FaLocationArrow />
                                </span>
                                <span className={cx('description')}>
                                    <p className={cx('title')}>Địa chỉ</p>
                                    <p>766A/30-32 Lạc Long Quân, Phường 9, Quận Tân Bình, TP. Hồ Chí Minh</p>
                                </span>
                            </li>
                            <li>
                                <span className={cx('icon')}>
                                    <FaEnvelope />
                                </span>
                                <span className={cx('description')}>
                                    <p className={cx('title')}>Email</p>
                                    <p>info@cp-sport.vn</p>
                                </span>
                            </li>
                            <li>
                                <span className={cx('icon')}>
                                    <FaPhone />
                                </span>
                                <span className={cx('description')}>
                                    <p className={cx('title')}>Điện thoại</p>
                                    <p>0926.682.682</p>
                                </span>
                            </li>
                            <li>
                                <span className={cx('icon')}>
                                    <FaEnvelope />
                                </span>
                                <span className={cx('description')}>
                                    <p className={cx('title')}>Thời gian làm việc</p>
                                    <p>
                                        Thứ 2 đến Thứ 6 từ 8h đến 18h; <br />
                                        Thứ 7 và Chủ nhật từ 8h00 đến 17h00
                                    </p>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('form')}>
                        <h2 className={cx('heading')}>Gửi thắc mắc cho chúng tôi</h2>
                        <p className={cx('legend')}>
                            Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng tôi sẽ liên lạc lại với
                            bạn sớm nhất có thể .
                        </p>
                        <form className={cx('form-input')}>
                            <div className={cx('wrap-input')}>
                                <input placeholder="Tên của bạn" />
                                <input placeholder="Email của bạn" />
                                <input placeholder="Số điện thoại của bạn" />
                                <input placeholder="Nội dung" />
                            </div>
                            <p className={cx('caption')}>
                                This site is protected by reCAPTCHA and the Google{' '}
                                <a href="https://policies.google.com/privacy">&nbsp;Privacy Policy&nbsp;</a> and{' '}
                                <a href="https://policies.google.com/terms">&nbsp;Terms of Service&nbsp;</a> apply.
                            </p>
                            <div className={cx('submit-btn')}>
                                <Button primary>Gửi cho chúng tôi</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
