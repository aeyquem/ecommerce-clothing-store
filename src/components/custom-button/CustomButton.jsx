import React from 'react'
import './customButton.styles.scss'

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {

    let buttonClasses = "custom-button";
    if (isGoogleSignIn) buttonClasses += " google-sign-in"

    return (
        <button className={buttonClasses} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton
