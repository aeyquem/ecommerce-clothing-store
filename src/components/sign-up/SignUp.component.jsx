import React, { useState } from 'react'
import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';
import { signUpStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

const SignUp = ({ signUpStart }) => {

    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { password, confirmPassword, email, displayName } = userCredentials;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords do not match");
        }

        signUpStart({ displayName, email, password });
    }

    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form action="" className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput type="text" name="displayName" label="Display Name" required value={displayName} onChange={handleChange} />
                <FormInput type="email" name="email" label="Email" required value={email} onChange={handleChange} />
                <FormInput type="password" name="password" label="Password" required value={password} onChange={handleChange} />
                <FormInput type="password" name="confirmPassword" label="Confirm Password" required value={confirmPassword} onChange={handleChange} />
                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </div>
    );
}


const mapDispatchToProps = (dispatch) => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);