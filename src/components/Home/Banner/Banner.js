import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import banner from '../../../images/banner/banner.png';
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner">
            <Container>
                <div className="row">
                    <div className="col-md-6 py-5 banner-content py-3">
                        <h5>Welcome to Our Clinic</h5>
                        <h1 className="display-3"><b>TAKE CARE OF YOUR HEALTH</b></h1>
                        <p>Our clinic is a health facility that is primarily focused on the care of outpatients. Clinics can be privately operated or publicly managed and funded.</p>
                        <NavLink to="/make-appoinment">
                            <button className="my-btn">Make an Appoinment</button>
                        </NavLink>
                    </div>
                    <div className="col-md-6">
                        <div className="text-end">
                            <img className="img-fluid" src={banner} alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;