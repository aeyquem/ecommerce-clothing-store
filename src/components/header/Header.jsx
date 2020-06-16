import React from 'react'
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';


const Header = ({ currentUser, hidden }) => {

    let signButton;
    if (currentUser) {
        signButton = <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
    }
    else {
        signButton = <Link className="option" to="/signin">SIGN IN</Link>
    }

    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                {signButton}
                <CartIcon />
            </div>
            {
                hidden ? null : <CartDropdown />
            }
        </div>
    )
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => {
    return {
        currentUser,
        hidden
    };
}

export default connect(mapStateToProps)(Header);
