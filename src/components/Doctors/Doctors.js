import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Doctor from './Doctor/Doctor';
import './Doctors.css'
const Doctors = () => {
    const { allAppoinment } = useAuth();
    const { appoinment } = allAppoinment;
    const { allDoctors } = useAuth();
    const { doctors } = allDoctors;
    console.log(doctors);
    return (
        <>
            <div className="row">
                <div className="col-md-6 doctors py-4">
                    <h2 className="section-title text-center">Our Doctors</h2>
                    <div className="row">
                        {
                            doctors.map(doctor => <Doctor
                                key={doctor.id}
                                doctor={doctor}
                            ></Doctor>)
                        }
                    </div>
                </div>
                <div className="col-md-6 working-time p-4">
                    <div>
                        <h2 className="section-title text-center">Working Time</h2>
                        <div className="weekly-time">
                            <div className="worked-time">
                                <h5>Sunday</h5>
                                <h5>08:00am to 10:00pm</h5>
                            </div>
                            <div className="worked-time">
                                <h5>Monday</h5>
                                <h5>09:00am to 12:00pm</h5>
                            </div>
                            <div className="worked-time">
                                <h5>Tuesday</h5>
                                <h5>10:00am to 11:00pm</h5>
                            </div>
                            <div className="worked-time">
                                <h5>WednessDay</h5>
                                <h5>08:00am to 10:00pm</h5>
                            </div>
                            <div className="worked-time">
                                <h5>Thrusday</h5>
                                <h5>10:00am to 12:00pm</h5>
                            </div>
                            <div className="worked-time">
                                <h5>Friday</h5>
                                <h5>08:00am to 10:00pm</h5>
                            </div>
                            <div className="worked-time">
                                <h5>Saturday</h5>
                                <h5>08:00am to 10:00pm</h5>
                            </div>
                            {!appoinment?.date ?
                                <div className="text-center my-4">
                                    <NavLink to="/make-appoinment">
                                        <button className="my-btn btn-md">Make an appoinment</button>
                                    </NavLink>
                                </div>
                                :
                                <div className="my-4">
                                    <h6 className="text-center">You already booked an appoinment</h6>
                                    <div className="text-center ">
                                        <NavLink to="/pending-appoinment">
                                            <button className="my-btn btn-md">View your appoinment</button>
                                        </NavLink>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Doctors;