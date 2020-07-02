import React from 'react'
import { connect } from 'react-redux';

import CustomButton from '../custom-button/CustomButton.Component'
import './cartDropDown.styles.scss'
import CartItem from '../cart-item/CartItem'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?
                        cartItems.map(item => {
                            return <CartItem key={item.id} item={item} />
                        }) :
                        <span className="empty-items">Your car is empty</span>
                }
            </div>
            <CustomButton onClick={() => {
                history.push("/checkout")
                dispatch(toggleCartHidden())
            }}>
                GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));