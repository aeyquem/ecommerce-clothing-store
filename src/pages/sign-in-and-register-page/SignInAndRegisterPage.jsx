import React from 'react';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';

import './signInAndRegisterPage.styles.scss';

const SignInAndRegisterPage = () => {
    return (
        <div className="sign-in-and-register">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndRegisterPage;
