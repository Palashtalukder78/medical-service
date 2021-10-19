import React, { createContext } from 'react';
import useAppoinment from '../hooks/useAppoinment';
import useDoctors from '../hooks/useDoctors';
import useFirebase from '../hooks/useFirebase';
import useHappyPatients from '../hooks/useHappyPatients';
import useService from '../hooks/useService';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const allService = useService();
    const allFirebase = useFirebase();
    const allAppoinment = useAppoinment();
    const allDoctors = useDoctors();
    const allHappyPatients = useHappyPatients();
    return (
        <AuthContext.Provider value={{ allService, allFirebase, allAppoinment, allDoctors, allHappyPatients }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;