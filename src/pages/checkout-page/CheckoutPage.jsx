import React from 'react'
import './checkoutPage.styles.scss'
import { connect } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import StripeButton from '../../components/stripe-button/StripeButton'

const CheckoutPage = ({ cartItems, cartTotal }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className='total'>TOTAL: ${cartTotal}</div>
        <StripeButton price={cartTotal} />
        <div className="test-warning">
            Please use the following details for payments:
             <br />
             4000 0000 0000 3220 - Exp: 12/21 CVV: 123
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)
