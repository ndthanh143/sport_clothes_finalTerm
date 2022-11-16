import { useState } from 'react';
import Select from 'react-select';
import classNames from 'classnames/bind';
import ImageUploading from 'react-images-uploading';
import { FaCloudUploadAlt } from 'react-icons/fa';
import styles from './NewProduct.module.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newProduct } from '~/actions/productActions';
import { useNavigate } from 'react-router-dom';
import SuccessModal from '~/components/SuccessModal';
import { NEW_PRODUCT_RESET } from '~/constants/productConstants';

const cx = classNames.bind(styles);

function FormProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const categoryData = [
        {
            value: 'Quan ao the thao',
            label: 'Quần áo thể thao',
        },
        {
            value: 'Quan ao bong da',
            label: 'Quần áo bóng đá',
        },
        {
            value: 'Quan ao bong chuyen',
            label: 'Quần áo bóng chuyền',
        },
        {
            value: 'Trang phuc chay bo',
            label: 'Trang phục chạy bộ',
        },
        {
            value: 'Phu kien the thao',
            label: 'Phụ kiện thể thao',
        },
        {
            value: 'Do CLB - Doi tuyen',
            label: 'Đồ CLB - Đội tuyển',
        },
    ];

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [stock, setStock] = useState(0);
    const [category, setCategory] = useState(categoryData[0].value);
    const [images, setImages] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    const { loading, success } = useSelector((state) => state.newProduct);

    const handleUploadImages = (imageList) => {
        setImages(imageList);
    };

    useEffect(() => {
        //handle input price, stock < 0
        if (price < 0 || price == null) {
            setPrice(0);
        }
        if (stock < 0 || price == null) {
            setStock(0);
        }

        if (success) {
            setOpenModal(true);
            dispatch({ type: NEW_PRODUCT_RESET });
        }
    }, [success]);
    const submitHandler = (e) => {
        e.preventDefault();
        let imgData = [];
        images.map((item) => {
            imgData.push({ url: item.data_url });
        });

        dispatch(newProduct(name, price, category, stock, imgData));
    };

    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                <form className={cx('form')}>
                    <div className={cx('field', 'fieldName')}>
                        <label className={cx('label')}>Product name</label>
                        <div className={cx('value')}>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                placeholder="Type here"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className={cx('field', 'fieldCategory')}>
                        <label className={cx('label')}>Category</label>
                        <div className={cx('value')}>
                            <Select
                                defaultValue={categoryData[0]}
                                // isDisabled={isDisabled}
                                // isLoading={isLoading}
                                // isClearable={isClearable}
                                isSearchable={false}
                                options={categoryData}
                                onChange={(e) => setCategory(e.value)}
                            />
                        </div>
                    </div>

                    <div className={cx('field', 'fieldImage')}>
                        <label className={cx('label')}>Images</label>
                        <div className={cx('value')}>
                            <ImageUploading multiple value={images} onChange={handleUploadImages} dataURLKey="data_url">
                                {({ onImageUpload, onImageRemove }) => (
                                    <>
                                        <div className={cx('list-image')}>
                                            {images.map((item, index) => (
                                                <div className={cx('image')} key={index}>
                                                    <img src={item.data_url} alt="" />
                                                    <div
                                                        className={cx('remove')}
                                                        onClick={() => {
                                                            console.log(index);
                                                            onImageRemove(index);
                                                        }}
                                                    >
                                                        Xóa
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className={cx('upload')}>
                                            <FaCloudUploadAlt className={cx('icon')} onClick={onImageUpload} />
                                        </div>
                                    </>
                                )}
                            </ImageUploading>
                        </div>
                    </div>
                    <div className={cx('field', 'fieldPrice')}>
                        <label className={cx('label')}>Price</label>
                        <div className={cx('value')}>
                            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                            <label className={cx('label')}>VNĐ</label>
                        </div>
                    </div>
                    <div className={cx('field', 'fieldStock')}>
                        <label className={cx('label')}>Số lượng</label>
                        <div className={cx('value')}>
                            <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} />
                            <label className={cx('label')}>Cái</label>
                        </div>
                    </div>
                    <div className={cx('field', 'fieldDescription')}>
                        <label className={cx('label')}>Description</label>
                        <div className={cx('value')}>
                            <textarea
                                type="text"
                                className={cx('text-input')}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className={cx('submit')}>
                        <input type="submit" onClick={(e) => submitHandler(e)} />
                    </div>
                </form>
            </div>
            {openModal && <SuccessModal title={'Item added successfully'} to={'/admin/product'} />}
        </div>
    );
}

export default FormProduct;
