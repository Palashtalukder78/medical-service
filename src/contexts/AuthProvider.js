import React, { createContext } from 'react';
import useAppoinment from '../hooks/useAppoinment';
import useDoctors from '../hooks/useDoctors';
import useFirebase from '../hooks/useFirebase';
import useService from '../hooks/useService';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const allService = useService();
    const allFirebase = useFirebase();
    const allAppoinment = useAppoinment();
    const allDoctors = useDoctors();
    return (
        <AuthContext.Provider value={{ allService, allFirebase, allAppoinment, allDoctors }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;