import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD2NgqwkglT5PWxAlhqO_p3pVHVwBxOVik",
    authDomain: "e-commerce-db-26.firebaseapp.com",
    projectId: "e-commerce-db-26",
    storageBucket: "e-commerce-db-26.appspot.com",
    messagingSenderId: "320231875410",
    appId: "1:320231875410:web:2b0e0bca9f9132b5f1108b"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, { displayName, email, createdAt });
        } catch (err) {
            console.log('error while creating a user', err.message);
        }
    }
    return userDocRef;
}