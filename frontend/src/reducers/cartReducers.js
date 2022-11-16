import { ADD_TO_CART, REMOVE_ITEM_CART, SAVE_SHIPPING_INFO } from '~/constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const item = action.payload;

            const isItemExist = state.cartItems.find((i) => i.product === item.product);
            if (isItemExist) {
                state.cartItems.map((i) => (i.product === item.product ? (i.quantity += item.quantity) : null));
                return {
                    ...state,
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                };
            }
        }
        case REMOVE_ITEM_CART: {
            return {
                ...state,
                cartItems: state.cartItems.filter((i) => i.product !== action.payload),
            };
        }
        case SAVE_SHIPPING_INFO:
            return {
                ...state,
                shippingInfo: action.payload,
            };

        default:
            return state;
    }
};
