import React from 'react';
import { Carousel } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './HappyPatients.css'
const HappyPatients = () => {
    const { allHappyPatients } = useAuth();
    const { happyPatients } = allHappyPatients;
    console.log(happyPatients)
    return (
        <>
            <div className="row">
                <h1 className="section-title text-center">Happy Patients</h1>
                <Carousel className="w-75 mx-auto text-center p-3 my-3 slider shadow">
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
        </>
    );
};

export default HappyPatients;