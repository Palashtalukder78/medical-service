import React from 'react';
import useAuth from '../../hooks/useAuth';
import appoinment from '../../images/appoinment.jpg';
import './MakeAppoinment.css';
const MakeAppoinment = () => {
    const { allFirebase } = useAuth();
    const { user } = allFirebase;
    return (
        <div className="make-appoinment container">
            <div className="row ">
                <div className="col-md-6 py-5">
                    <div className="appoinment-form">
                        <h2 style={{ color: "darkblue" }} className=" text-center my-4">Make an Appoinment</h2>
                        <form>
                            <select id="cars">
                                <option value="Neorology Department">Neorology Department</option>
                                <option value="X-ray Diognostic Department">X-ray Diognostic Department</option>
                                <option value="Cardiology Department">Cardiology Department</option>
                                <option value="MRI Department">MRI Department</option>
                                <option value="Lavrotory Service">Lavrotory Service</option>
                            </select>
                            <select id="cars">
                                <option value="Dr Pradip">Dr Pradip</option>
                                <option value="Utpolkanti">Utpolkanti</option>
                                <option value="hannan">Hannan</option>
                            </select>
                            <input type="date" />
                            <input type="text" defaultValue={user?.displayName} placeholder="Enter Your Name" />
                            <input type="email" defaultValue={user.email} placeholder="Enter your email" />
                            <input type="email" placeholder="Enter your Phone Number" />
                            <textarea className="form-control" name="" id="" cols="30" rows="4" placeholder="Enter Your messages"></textarea>
                            <div >
                                <button className="my-btn">Confirm Request</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="text-center d-block">
                        <img style={{ width: "80%" }} className="img-fluid" src={appoinment} alt="AppoinmentPhoto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAppoinment;