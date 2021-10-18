import { useEffect, useState } from 'react';
import initializeAuthenTication from '../firebase/Firebase.init';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";
initializeAuthenTication();
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState('');
    const signUpUser = () => {
        return createUserWithEmailAndPassword();
    }
    const setUserName = () => {
        return updateProfile();
    }
    const signIn = () => {
        return signInWithEmailAndPassword();
    }
    const googleSignIn = () => {
        return signInWithPopup();
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                console.log(user)
            } else {

            }
        });
    }, []);

    const logOut = () => {
        return signOut();
    }
    return {
        user,
        setUser,
        signUpUser,
        setUserName,
        signIn,
        googleSignIn,
        logOut
    }
};

export default useFirebase;