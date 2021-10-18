import React from 'react';
import useAuth from '../../hooks/useAuth';

const Contact = () => {
    const { allAppoinment } = useAuth();
    const { appoinment } = allAppoinment;
    console.log(appoinment);
    return (
        <div>

        </div>
    );
};

export default Contact;