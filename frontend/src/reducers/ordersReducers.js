import {
    ALL_ORDERS_REQUEST,
    ALL_ORDERS_SUCCESS,
    ALL_ORDERS_FAIL,
    NEW_ORDER_REQUEST,
    NEW_ORDER_SUCCESS,
    NEW_ORDER_FAIL,
    MY_ORDERS_REQUEST,
    MY_ORDERS_SUCCESS,
    MY_ORDERS_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,
    CLEAR_ERRORS,
} from '~/constants/orderConstants';

export const ordersReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case ALL_ORDERS_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case ALL_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                totalAmount: action.payload.totalAmount,
                orders: action.payload.orders,
            };

        case ALL_ORDERS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};

export const newOrderReducer = (state = { order: {} }, action) => {
    switch (action.type) {
        case NEW_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case NEW_ORDER_SUCCESS:
            return {
                ...state,
                order: action.payload,
                loading: false,
            };
        case NEW_ORDER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};

export const myOrdersReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case MY_ORDERS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case MY_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.payload,
                loading: false,
            };
        case MY_ORDERS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};

export const orderDetailsReducer = (state = { order: {} }, action) => {
    switch (action.type) {
        case ORDER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ORDER_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                order: action.payload,
            };
        case ORDER_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    });
};
