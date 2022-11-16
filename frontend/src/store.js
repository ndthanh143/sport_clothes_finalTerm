import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
    productsReducer,
    productDetailsReducer,
    productSearchReducer,
    deleteProductReducer,
    newProductReducer,
    updateProductReducer,
} from './reducers/productReducers';
import { authReducer, deleteUserReducer, updateUserReducer } from './reducers/userReducers';
import { cartReducer } from './reducers/cartReducers';
import { ordersReducer, newOrderReducer, myOrdersReducer, orderDetailsReducer } from './reducers/ordersReducers';

const reducers = combineReducers({
    auth: authReducer,
    products: productsReducer,
    productDetails: productDetailsReducer,
    productSearch: productSearchReducer,
    deleteProduct: deleteProductReducer,
    newProduct: newProductReducer,
    updateProduct: updateProductReducer,
    updateUser: updateUserReducer,
    deleteUser: deleteUserReducer,
    cart: cartReducer,
    orders: ordersReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer,
});

let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
        shippingInfo: localStorage.getItem('shippingInfo') ? JSON.parse(localStorage.getItem('shippingInfo')) : {},
    },
};

const middleware = [thunk];
const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
