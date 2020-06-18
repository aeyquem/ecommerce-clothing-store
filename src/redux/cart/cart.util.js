export const addItemToCart = (cartItems, itemToAdd) => {
    const itemExists = cartItems.find(item => item.id === itemToAdd.id);

    if (itemExists) {
        cartItems = cartItems.map(item => {
            if (item.id === itemToAdd.id) {
                item.quantity++;
            }
            return item;
        });
        return cartItems;
    }
    else {
        cartItems = [...cartItems, { ...itemToAdd, quantity: 1 }];
    }

    return cartItems;
}