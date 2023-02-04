import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { SignUpContainer } from './sign-up-form.styles';

import { createAuthUsingMailAndPassword, createUserDocumentFromAuth } from "../../utils/fireBase/firebase.util";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = event => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Password do not match');
            return;
        }

        if (password.length <= 6) {
            alert('Password should be greater than 6 characters');
            return;
        }

        try {
            const { user } = await createAuthUsingMailAndPassword(email, password);

            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();

        } catch (err) {
            if (err.code === 'auth/email-already-in-use') {
                alert('Cannot create user. Email already in use');
            } else {
                console.log('User creation failed', err.message);
            }
        }
    }

    return (
        <SignUpContainer>
            <h2>Don't have an account</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name' required type='text' name='displayName' onChange={handleChange} value={displayName} />
                <FormInput label='Email' required type='email' name='email' onChange={handleChange} value={email} />
                <FormInput label='Password' required type='password' name='password' onChange={handleChange} value={password} />
                <FormInput label='Confirm password' required type='password' name='confirmPassword' onChange={handleChange} value={confirmPassword} />
                <Button label='Display Name' type='submit'>Sign Up</Button>
            </form>
        </SignUpContainer>
    );
}

export default SignUpForm;