import axios from '../api/axios';
import { ADD_TO_CART, REMOVE_ITEM_CART, SAVE_SHIPPING_INFO } from '../constants/cartConstants';

export const addItemToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`product/${id}`);

    try {
        dispatch({
            type: ADD_TO_CART,
            payload: {
                product: data.product._id,
                name: data.product.name,
                price: data.product.price,
                image: data.product.images[0].url,
                amount: data.product.amount,
                quantity,
            },
        });

        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
    } catch (error) {
        alert(error);
    }
};
export const removeItemFromCart = (id) => async (dispatch, getState) => {
    const { data } = await axios.get(`product/${id}`);

    try {
        dispatch({
            type: REMOVE_ITEM_CART,
            payload: id,
        });

        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
    } catch (error) {
        alert(error);
    }
};

export const saveShippingInfo = (data) => async (dispatch) => {
    try {
        dispatch({
            type: SAVE_SHIPPING_INFO,
            payload: data,
        });

        localStorage.setItem('shippingInfo', JSON.stringify(data));
    } catch (error) {
        alert(error);
    }
};
