import { useEffect, useState } from 'react';
import initializeAuthenTication from '../firebase/Firebase.init';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";
initializeAuthenTication();
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState('');
    const [isLoading, setIsLoading] = useState(true)
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
                setUser({})
            }
            setIsLoading(false)
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
        isLoading, setIsLoading,
        logOut
    }
};

export default useFirebase;