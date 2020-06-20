import React from 'react'
import { connect } from 'react-redux'

import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg'
import './CartIcon.styles.scss'

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

const CartIcon = ({ toggleCartHidden, itemsCount }) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingBagIcon className="shopping-icon" />
            <span className="item-count">{itemsCount}</span>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        itemsCount: selectCartItemsCount(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);