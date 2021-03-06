import React from "react";
import './SignIn.scss';

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { auth, signInWithGoogle } from '../../firebase/FirebaseUtils';

class SignIn extends React.Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const { email, password } = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' })
        } catch (err) {
            console.log(err)
        }

    }

    handleChange = (event) => {
        const { value, name } = event.target

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="signin">
                <h2>I Already Have an Account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="Password"
                        required
                    />

                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>&nbsp;&nbsp;&nbsp;
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;