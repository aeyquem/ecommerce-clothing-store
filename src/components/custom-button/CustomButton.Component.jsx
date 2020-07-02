import React from 'react'
import './customButton.styles.scss'
import { CustomButtonContainer } from './CustomButton.styles'

const CustomButton = ({ children, ...props }) => (
    <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton
