import React from "react";
import './SignIn.scss';

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

class SignIn extends React.Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.setState({ email: '', password: '' })
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

                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;