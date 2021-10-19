import React from 'react';
import './Doctor.css';
const Doctor = ({ doctor }) => {
    const { name, photo, specialist } = doctor;
    return (
        <div className="col-md-12">
            <div className="single-doctor">
                <div>
                    <img className="img-fluid" src={photo} alt="" />
                </div>
                <div className="doctor-content">
                    <h3>{name}</h3>
                    <h6>{specialist}</h6>
                </div>
            </div>
        </div>
    );
};

export default Doctor;