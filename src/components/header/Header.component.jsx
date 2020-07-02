import React from 'react'
import './header.styles.scss'
import { HeaderContainer, LinkContainer, OptionsContainer, OptionDiv, OptionLink } from './Header.styles'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartButonHidden } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'

const Header = ({ currentUser, hidden }) => {

    let signButton;
    if (currentUser) {
        signButton = <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
    }
    else {
        signButton = <OptionDiv as={Link} to="/signin">SIGN IN</OptionDiv>
    }

    return (
        <HeaderContainer>
            <LinkContainer to="/">
                <Logo className="logo" />
            </LinkContainer>
            <OptionsContainer>
                <OptionDiv as={Link} to="/shop">SHOP</OptionDiv>
                <OptionDiv as={Link} to="/contact">CONTACT</OptionDiv>
                {signButton}
                <CartIcon />
            </OptionsContainer>
            {
                hidden ? null : <CartDropdown />
            }
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartButonHidden
});

export default connect(mapStateToProps)(Header);
