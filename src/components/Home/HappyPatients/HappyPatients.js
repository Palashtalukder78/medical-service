import React from 'react';
import { Carousel } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './HappyPatients.css'
const HappyPatients = () => {
    const { allHappyPatients } = useAuth();
    const { happyPatients } = allHappyPatients;
    console.log(happyPatients)
    return (
        <div style={{ margin: "0 !important", maxWidth: "100%", overflowX: "hidden" }} className="container m-0 p-0">
            <div className="row my-5">
                <div className="col-md-7 mx-auto">
                    <h1 className="section-title text-center">Happy Patients</h1>
                    <Carousel style={{ width: "90%" }} className="mx-auto text-center p-3 my-3 slider shadow">
                        {
                            happyPatients.map(patient => (
                                <Carousel.Item>
                                    <img style={{ width: "100px", height: "100px", borderRadius: "50%", marginx: "auto" }} src={patient.photo} alt="" />
                                    <h4 className="studentName">{patient.name}</h4>
                                    <h6 className="student-position">"{patient.occupation}"</h6>
                                    <p>{patient.comment}</p>
                                </Carousel.Item>
                            ))
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default HappyPatients;