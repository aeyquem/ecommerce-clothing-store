import { createSelector } from 'reselect'

export const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => {
        return cartItems.reduce((acc, cartItem) => {
            return acc + cartItem.quantity
        }, 0)
    }
)

export const selectCartButonHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => {
        return cartItems.reduce((acc, cartItem) => {
            return acc + cartItem.quantity * cartItem.price
        }, 0)
    }
)