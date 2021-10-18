import React from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { id } = useParams();
    const { allService, allAppoinment } = useAuth();
    const { services } = allService;
    const service = services?.find(service => service?.id === id);
    const { appoinment } = allAppoinment;
    return (
        <div className="details">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-6">
                        <img style={{ width: "100%" }} src={service?.photo} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2>{service?.title}</h2>
                        <p>{service?.longDescription}</p>

                        {!appoinment?.date ?
                            <NavLink NavLink to="/make-appoinment">
                                <button className="my-btn">Make an Appoinment</button>
                            </NavLink>
                            :
                            <NavLink to="/pending-appoinment">
                                <button className="my-btn">View your Appoinment</button>
                            </NavLink>
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ServiceDetails;