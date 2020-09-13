import React, { Component } from 'react'
import './signIn.styles.scss'
import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';

import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
import { googleSignInStart } from '../../redux/user/user.actions';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }

    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        const { googleSignInStart } = this.props;
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sing in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" label="email" value={this.state.email} handleChange={this.handleChange} required />
                    <FormInput type="password"
                        name="password"
                        label="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        googleSignInStart: () => dispatch(googleSignInStart())
    }
}

export default connect(null, mapDispatchToProps)(SignIn);
