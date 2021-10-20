import React from 'react';
import { Container } from 'react-bootstrap';
import photo from '../../../images/doctors.jpg';
import './WhyChooseUs.css'
const WhyChooseUs = () => {
    return (
        <div style={{ margin: "0 !important", maxWidth: "100%", overflowX: "hidden" }} className="m-0 p-0">
            <div className="row my-5">
                <h1 className="text-center section-title my-4">Why Choose us ?</h1>
                <div className="col-md-6 p-0 h-100">
                    <img className="w-100 img-fluid" src={photo} alt="" />
                </div>
                <div className="col-md-6 why-choose-us p-0">
                    <div className="why-choose-us-content">
                        <div className="icon-content my-2">
                            <div>
                                <h4><i class="fas fa-hospital"></i></h4>
                            </div>
                            <div>
                                <h4>Great Infrastructure</h4>
                                <p>The economy needs reliable infrastructure to connect supply chains and efficiently move goods and services across borders.</p>
                            </div>
                        </div>
                        <div className="icon-content my-2">
                            <div>
                                <h4><i class="fas fa-ambulance"></i></h4>
                            </div>
                            <div>
                                <h4>24/7 Ambulance Services</h4>
                                <p>We provide. ICU Ambulance Service, Ac ambulance, freezing ambulance. Best Ambulance Service, Competitive Pricing, No Hidden Charge Call Us for Ambulance.</p>
                            </div>
                        </div>
                        <div className="icon-content my-2">
                            <div>
                                <h4><i class="fas fa-medkit"></i></h4>
                            </div>
                            <div>
                                <h4>Cutting Edge Technology</h4>
                                <p>We refers to technological devices, techniques or achievements that employ the most current and high-level IT developments; in other words, technology at the frontiers of knowledge. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;