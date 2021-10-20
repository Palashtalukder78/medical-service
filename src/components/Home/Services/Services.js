import React from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import SingleService from '../SingleService/SingleService';

import './Services.css'
const Services = () => {
    const { allService } = useAuth();
    const { services } = allService;
    return (
        <div className="container services">
            {!services ?
                <div style={{ height: "200px", display: "flex", alignItems: "center", justifyContent: "center" }} className="text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                :
                <div >
                    <div>
                        <h1 className="section-title text-center">Our Services</h1>
                    </div>
                    <div className="row m-0 p-0">
                        {
                            services.map(service => <SingleService
                                key={service?.id}
                                service={service}
                            ></SingleService>)
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Services;