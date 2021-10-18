import React, { createContext } from 'react';
// import useFirebase from '../hooks/useFirebase';
import useService from '../hooks/useService';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const allService = useService();
    // const allFirebase = useFirebase();
    return (
        <AuthContext.Provider value={{ allService }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;