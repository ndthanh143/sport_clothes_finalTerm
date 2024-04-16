import axios from 'axios';
import { ALL_PROVINCES_FAIL, ALL_PROVINCES_REQUEST, ALL_PROVINCES_SUCCESS } from '~/constants/provinceConstants';

const provinces = {
    "provinces": [
        {"name": "An Giang", "type": "Tỉnh"},
        {"name": "Bà Rịa - Vũng Tàu", "type": "Tỉnh"},
        {"name": "Bạc Liêu", "type": "Tỉnh"},
        {"name": "Bắc Kạn", "type": "Tỉnh"},
        {"name": "Bắc Giang", "type": "Tỉnh"},
        {"name": "Bắc Ninh", "type": "Tỉnh"},
        {"name": "Bến Tre", "type": "Tỉnh"},
        {"name": "Bình Dương", "type": "Tỉnh"},
        {"name": "Bình Định", "type": "Tỉnh"},
        {"name": "Bình Phước", "type": "Tỉnh"},
        {"name": "Bình Thuận", "type": "Tỉnh"},
        {"name": "Cà Mau", "type": "Tỉnh"},
        {"name": "Cao Bằng", "type": "Tỉnh"},
        {"name": "Cần Thơ", "type": "Thành phố Trung ương"},
        {"name": "Đà Nẵng", "type": "Thành phố Trung ương"},
        {"name": "Đắk Lắk", "type": "Tỉnh"},
        {"name": "Đắk Nông", "type": "Tỉnh"},
        {"name": "Điện Biên", "type": "Tỉnh"},
        {"name": "Đồng Nai", "type": "Tỉnh"},
        {"name": "Đồng Tháp", "type": "Tỉnh"},
        {"name": "Gia Lai", "type": "Tỉnh"},
        {"name": "Hà Giang", "type": "Tỉnh"},
        {"name": "Hà Nam", "type": "Tỉnh"},
        {"name": "Hà Nội", "type": "Thành phố Trung ương"},
        {"name": "Hà Tĩnh", "type": "Tỉnh"},
        {"name": "Hải Dương", "type": "Tỉnh"},
        {"name": "Hải Phòng", "type": "Thành phố Trung ương"},
        {"name": "Hòa Bình", "type": "Tỉnh"},
        {"name": "Hậu Giang", "type": "Tỉnh"},
        {"name": "Hưng Yên", "type": "Tỉnh"},
        {"name": "Khánh Hòa", "type": "Tỉnh"},
        {"name": "Kiên Giang", "type": "Tỉnh"},
        {"name": "Kon Tum", "type": "Tỉnh"},
        {"name": "Lai Châu", "type": "Tỉnh"},
        {"name": "Lào Cai", "type": "Tỉnh"},
        {"name": "Lạng Sơn", "type": "Tỉnh"},
        {"name": "Lâm Đồng", "type": "Tỉnh"},
        {"name": "Long An", "type": "Tỉnh"},
        {"name": "Nam Định", "type": "Tỉnh"},
        {"name": "Nghệ An", "type": "Tỉnh"},
        {"name": "Ninh Bình", "type": "Tỉnh"},
        {"name": "Ninh Thuận", "type": "Tỉnh"},
        {"name": "Phú Thọ", "type": "Tỉnh"},
        {"name": "Phú Yên", "type": "Tỉnh"},
        {"name": "Quảng Bình", "type": "Tỉnh"},
        {"name": "Quảng Nam", "type": "Tỉnh"},
        {"name": "Quảng Ngãi", "type": "Tỉnh"},
        {"name": "Quảng Ninh", "type": "Tỉnh"},
        {"name": "Quảng Trị", "type": "Tỉnh"},
        {"name": "Sóc Trăng", "type": "Tỉnh"},
        {"name": "Sơn La", "type": "Tỉnh"},
        {"name": "Tây Ninh", "type": "Tỉnh"},
        {"name": "Thái Bình", "type": "Tỉnh"},
        {"name": "Thái Nguyên", "type": "Tỉnh"},
        {"name": "Thanh Hóa", "type": "Tỉnh"},
        {"name": "Thừa Thiên Huế", "type": "Tỉnh"},
        {"name": "Tiền Giang", "type": "Tỉnh"},
        {"name": "Trà Vinh", "type": "Tỉnh"},
        {"name": "Tuyên Quang", "type": "Tỉnh"},
        {"name": "Vĩnh Long", "type": "Tỉnh"},
        {"name": "Vĩnh Phúc", "type": "Tỉnh"},
        {"name": "Yên Bái", "type": "Tỉnh"},
        {"name": "TP HCM", "type": "Thành phố Trung ương"}
    ]
}


export const getAllProvinces = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_PROVINCES_REQUEST });

        const { data } = await axios.get('https://provinces.open-api.vn/api/');

        dispatch({ type: ALL_PROVINCES_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: ALL_PROVINCES_FAIL, payload: error.response.data.message });
    }
};
