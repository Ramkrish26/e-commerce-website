import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { SignInContainer, ButtonsContainer } from './sign-in-form.styles';

import { signInWithGooglePopup, signInAuthUsingMailAndPassword } from "../../utils/fireBase/firebase.util";

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;


    const handleChange = event => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signInAuthUsingMailAndPassword(email, password);
            resetFormFields();
        } catch (err) {
            switch (err.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password');
                    break;
                case 'auth/user-not-found':
                    alert('User not found');
                    break;
                default:
                    console.log(err);
            }
        }
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    return (
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />

                <FormInput
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                />
                <ButtonsContainer>
                    <Button type='submit'>Sign In</Button>
                    <Button
                        buttonType={BUTTON_TYPE_CLASSES.google}
                        type='button'
                        onClick={signInWithGoogle}
                    >
                        Sign In With Google
                    </Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    );
}

export default SignInForm;