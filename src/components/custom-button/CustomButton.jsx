import React from 'react'
import './customButton.styles.scss'

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {

    let buttonClasses = "custom-button";
    if (isGoogleSignIn) buttonClasses += " google-sign-in"
    if (inverted) buttonClasses += " inverted"

    return (
        <button className={buttonClasses} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton
