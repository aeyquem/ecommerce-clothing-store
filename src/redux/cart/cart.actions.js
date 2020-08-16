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

export const removeItem = (item) => {
    return {
        type: CartActionTypes.REMOVE_FROM_CART,
        payload: item
    }
}

export const clearItem = (item) => {
    return {
        type: CartActionTypes.CLEAR_ITEM,
        payload: item
    }
}