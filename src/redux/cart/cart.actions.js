import CartActionTypes from './cart.types'

export const toggleCartHidden = () => {
    return {
        type: CartActionTypes.TOGGLE_BUTTON_HIDDEN,
    }
}

export const addItem = (item) => {
    return {
        type: CartActionTypes.ADD_TO_CART,
        payload: item
    }
}