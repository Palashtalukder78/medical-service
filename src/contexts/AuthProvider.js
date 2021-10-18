import React, { createContext } from 'react';
import useAppoinment from '../hooks/useAppoinment';
import useFirebase from '../hooks/useFirebase';
import useService from '../hooks/useService';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const allService = useService();
    const allFirebase = useFirebase();
    const allAppoinment = useAppoinment();
    return (
        <AuthContext.Provider value={{ allService, allFirebase, allAppoinment }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;