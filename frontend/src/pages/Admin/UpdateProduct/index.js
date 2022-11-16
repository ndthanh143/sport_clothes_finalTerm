import { useState } from 'react';
import Select from 'react-select';
import classNames from 'classnames/bind';
import ImageUploading from 'react-images-uploading';
import { FaCloudUploadAlt } from 'react-icons/fa';
import styles from './UpdateProduct.module.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails, updateProduct } from '~/actions/productActions';
import { useNavigate, useParams } from 'react-router-dom';
import SuccessModal from '~/components/SuccessModal';
import { UPDATE_PRODUCT_RESET } from '~/constants/productConstants';
import Loader from '~/components/Loader';

const cx = classNames.bind(styles);

function UpdateProduct() {
    const { id } = useParams();
    const { product, loading } = useSelector((state) => state.productDetails);
    const { loading: updateLoading, isUpdated } = useSelector((state) => state.updateProduct);
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
    const [openModal, setOpenModal] = useState(false);

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [stock, setStock] = useState(0);
    const [category, setCategory] = useState('');
    const [images, setImages] = useState([]);

    const handleUploadImages = (imageList) => {
        console.log(imageList);
        setImages(imageList);
    };
    const handleRemove = (index) => {
        let urls = images;
        urls = urls.filter((item) => item !== images[index]);
        setImages(urls);
    };

    useEffect(
        () => {
            dispatch(getProductDetails(id));
            if (product._id == id) {
                setName(product.name);
                setPrice(product.price);
                setStock(product.amount);
                setCategory(product.category);
                let imgUrls = [];
                product.images.map((item) => {
                    imgUrls.push({ data_url: item.url });
                });
                setImages(imgUrls);
            }
        },
        [product._id, product.name, product.price, product.amount],
        product.category,
        product.images,
    );

    useEffect(() => {
        //handle input price, stock < 0
        if (price < 0 || price == null) {
            setPrice(0);
        }
        if (stock < 0 || price == null) {
            setStock(0);
        }

        if (isUpdated) {
            setOpenModal(true);
            dispatch({ type: UPDATE_PRODUCT_RESET });
        }
    }, [isUpdated]);
    const submitHandler = (e) => {
        e.preventDefault();
        let imgData = [];
        images.map((item) => {
            imgData.push({ url: item.data_url });
        });
        dispatch(updateProduct(id, name, price, category, stock, imgData));
    };

    if (loading || updateLoading) {
        return <Loader />;
    } else {
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
                                    defaultValue={() => {
                                        const index = categoryData.findIndex((x) => x.value === category);
                                        return categoryData[index];
                                    }}
                                    isSearchable={false}
                                    options={categoryData}
                                    onChange={(e) => setCategory(e.value)}
                                />
                            </div>
                        </div>

                        <div className={cx('field', 'fieldImage')}>
                            <label className={cx('label')}>Images</label>
                            <div className={cx('value')}>
                                <ImageUploading
                                    multiple
                                    value={images}
                                    onChange={handleUploadImages}
                                    dataURLKey="data_url"
                                >
                                    {({ onImageUpload }) => (
                                        <>
                                            <div className={cx('list-image')}>
                                                {images.map((item, index) => (
                                                    <div className={cx('image')} key={index}>
                                                        <img src={item.data_url} alt="image" />
                                                        <div
                                                            className={cx('remove')}
                                                            onClick={() => {
                                                                handleRemove(index);
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
                                    className={cx('input')}
                                    resizable={false}
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
                {openModal && <SuccessModal title={'Item updated successfully'} to={'/admin/product'} />}
            </div>
        );
    }
}

export default UpdateProduct;
