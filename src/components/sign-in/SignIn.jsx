import React, { Component } from 'react'
import './signIn.styles.scss'
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sing in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" label="email" value={this.state.email} handleChange={this.handleChange} required />
                    <FormInput type="password"
                        name="password"
                        label="password"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required />
                    <CustomButton type="submit">Submit form</CustomButton>
                </form>
            </div>
        );
    }

}

export default SignIn
