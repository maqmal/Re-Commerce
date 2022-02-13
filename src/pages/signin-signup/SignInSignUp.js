import React from "react";
import './SignInSignUp.scss';
import SignIn from "../../components/signin/SignIn";
import SignUp from "../../components/signup/SignUp";

const SignInSignUp = ()=>{
    return(
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInSignUp;