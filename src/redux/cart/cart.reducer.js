import CartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.util";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_BUTTON_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            }
        case CartActionTypes.ADD_TO_CART:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;