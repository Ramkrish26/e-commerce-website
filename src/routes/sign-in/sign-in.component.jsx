import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/fireBase/firebase.util'

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return (
        <div >
            <h1> sign</h1>
            <button onClick={logGoogleUser} >Sign in </button>
        </div>
    )
};

export default SignIn;