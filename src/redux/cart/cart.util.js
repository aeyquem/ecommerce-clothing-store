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

export const removeFromCart = (cartItems, itemToRemove) => {
    const itemExist = cartItems.find(cartItem => {
        return cartItem.id === itemToRemove.id
    })

    if (itemExist.quantity === 1) {
        return cartItems.filter(cartItem => {
            return cartItem.id !== itemToRemove.id
        })
    }
    else {
        cartItems = cartItems.map(item => {
            if (item.id === itemToRemove.id) {
                item.quantity--;
            }
            return item;
        });
        return cartItems;
    }
}