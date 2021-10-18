import React, { createContext } from 'react';
import useService from '../hooks/useService';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const allService = useService();
    return (
        <AuthContext.Provider value={{ allService }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;