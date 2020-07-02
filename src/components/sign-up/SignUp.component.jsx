import React, { Component } from 'react'
import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';
import { auth } from '../../firebase/firebase.utils';
import { createUserProfileDocument } from '../../firebase/firebase.utils';

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

        const { password, confirmPassword, email, displayName } = this.state;
        if (password !== confirmPassword) {
            alert("passwords do not match");
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch (error) {
            console.log(error);
        }


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

export default SignUp;