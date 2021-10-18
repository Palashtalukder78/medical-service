import React from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import SingleService from '../SingleService/SingleService';

import './Services.css'
const Services = () => {
    const { allService } = useAuth();
    const { services } = allService;
    return (
        <Container>
            {!services ?
                <div style={{ height: "200px", display: "flex", alignItems: "center", justifyContent: "center" }} className="text-center">
                    <div class="spinner-border text-primary" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                :
                <div className="row my-4">
                    <div>
                        <h1 className="section-title text-center">Our Services</h1>
                    </div>
                    <div className="row">
                        {
                            services.map(service => <SingleService
                                key={service?.id}
                                service={service}
                            ></SingleService>)
                        }
                    </div>
                </div>
            }
        </Container>
    );
};

export default Services;