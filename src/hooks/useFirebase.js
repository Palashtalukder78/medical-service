import { useState } from 'react';
import initializeAuthenTication from '../firebase/Firebase.init';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
initializeAuthenTication();
const useFirebase = () => {
    const [user, setUser] = useState('');

    const signUpUser = () => {
        return createUserWithEmailAndPassword();
    }
    const setUserName = () => {
        return updateProfile();
    }
    return {
        user,
        setUser,
        signUpUser,
        setUserName
    }
};

export default useFirebase;