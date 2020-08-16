import React from 'react'
import './formInput.styles.scss'

const FormInput = ({ handleChange, label, ...otherProps }) => {

    const labelClassName = otherProps.value.length ? 'shrink' : '';
    const _label = label
        ? (<label className={`${labelClassName} form-input-label`} >{label}</label>)
        : null

    return (
        <div className="group">
            <input onChange={handleChange} {...otherProps} className="form-input" />
            {_label}
        </div>
    )
}

export default FormInput
