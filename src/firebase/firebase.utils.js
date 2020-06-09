import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA_R1kqVstEaRp1u3nEcGhVVJb_v1p6jeQ",
    authDomain: "ecommerce-clothing-store.firebaseapp.com",
    databaseURL: "https://ecommerce-clothing-store.firebaseio.com",
    projectId: "ecommerce-clothing-store",
    storageBucket: "ecommerce-clothing-store.appspot.com",
    messagingSenderId: "391699932654",
    appId: "1:391699932654:web:40715040ab99951a111aff"
};

export const createUserProfileDocument = async (user, additionalInfo) => {
    if (!user) return;

    const userRef = firestore.doc(`users/${user.uid}`)
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = user;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalInfo
            });
        } catch (error) {
            console.log("error creating user: " + error)
        }
    }

    return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoole = () => auth.signInWithPopup(provider);

export default firebase;