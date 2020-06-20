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