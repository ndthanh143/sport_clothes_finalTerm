import axios from '../api/axios';
import {
    ALL_ORDERS_REQUEST,
    ALL_ORDERS_SUCCESS,
    ALL_ORDERS_FAIL,
    CLEAR_ERRORS,
    NEW_ORDER_REQUEST,
    NEW_ORDER_FAIL,
    NEW_ORDER_SUCCESS,
    MY_ORDERS_REQUEST,
    MY_ORDERS_SUCCESS,
    MY_ORDERS_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,
} from '../constants/orderConstants';

export const getAllOrders = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_ORDERS_REQUEST });

        const { data } = await axios.get('admin/orders');

        dispatch({ type: ALL_ORDERS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: ALL_ORDERS_FAIL, payload: error.response.data.message });
    }
};

export const newOrder = (shippingInfo, user, orderItems, paymentInfo) => async (dispatch) => {
    try {
        dispatch({ type: NEW_ORDER_REQUEST });
        let totalPrice = 0;
        orderItems.map((item) => {
            totalPrice = totalPrice + item.price * item.quantity;
        });
        const dataOrder = {
            shippingInfo,
            user: user._id,
            orderItems,
            paymentInfo,
            totalPrice,
        };

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const { data } = await axios.post('order/new', JSON.stringify(dataOrder), config);
        dispatch({ type: NEW_ORDER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: NEW_ORDER_FAIL, payload: error.response.data.message });
    }
};

export const myOrders = () => async (dispatch) => {
    try {
        dispatch({ type: MY_ORDERS_REQUEST });

        const { data } = await axios.get('orders/me');
        dispatch({ type: MY_ORDERS_SUCCESS, payload: data.orders });
    } catch (error) {
        dispatch({ type: MY_ORDERS_FAIL, payload: error.response.data.message });
    }
};

export const getOrderDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: ORDER_DETAILS_REQUEST,
        });

        const { data } = await axios.get(`order/${id}`);
        dispatch({
            type: ORDER_DETAILS_SUCCESS,
            payload: data.order,
        });
    } catch (error) {
        dispatch({
            type: ORDER_DETAILS_FAIL,
            // payload: error.response.data.message,
            payload: error.message,
        });
    }
};
