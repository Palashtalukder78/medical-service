import React from 'react';
import './SingleService.css';

const SingleService = ({ service }) => {
    const { title, photo, shortDescription } = service;
    return (
        <div className="col-md-4">
            <div className="card single-service">
                <div>
                    <img className="img-fluid" src={photo} alt="" />
                    <div className="card-body ">
                        <h4>{title}</h4>
                        <p style={{ textAlign: "justify" }}>{shortDescription.slice(0, 100)}</p>
                        <button className="my-btn btn-sm mx-2 ">See more Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;