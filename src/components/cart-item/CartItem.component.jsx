import React from 'react'
import './cartItem.styles.scss'

const CartItem = ({ item }) => {
    const { imageUrl, name, price, quantity } = item;
    return (
        <div className="cart-item">
            <img alt="item" src={imageUrl} />

            <div className="item-details">
                <span className="name">{name}</span>
                <span>{quantity} X ${price}</span>
            </div>
        </div>
    )
}

export default CartItem
