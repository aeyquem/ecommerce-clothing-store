import React, { Component } from 'react'
import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';
import { signUpStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { signUpStart } = this.props;

        const { password, confirmPassword, email, displayName } = this.state;

        if (password !== confirmPassword) {
            alert("passwords do not match");
        }

        signUpStart({ displayName, email, password });

    }

    render() {
        const { email, password, confirmPassword, displayName } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form action="" className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" label="Display Name" required value={displayName} onChange={this.handleChange} />
                    <FormInput type="email" name="email" label="Email" required value={email} onChange={this.handleChange} />
                    <FormInput type="password" name="password" label="Password" required value={password} onChange={this.handleChange} />
                    <FormInput type="password" name="confirmPassword" label="Confirm Password" required value={confirmPassword} onChange={this.handleChange} />
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);