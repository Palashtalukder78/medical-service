import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import notFound from '../../images/not-found.gif'
const NotFound = () => {
    return (
        <div>
            <Container>
                <div className="text-center my-4">
                    <img style={{ width: "50%" }} className="img-fluid" src={notFound} alt="" />
                    <h4 className="section-title">You are in a wrong Palace</h4>
                    <NavLink to="/home">
                        <button className="my-btn">Go Home</button>
                    </NavLink>
                </div>
            </Container>
        </div>
    );
};

export default NotFound;