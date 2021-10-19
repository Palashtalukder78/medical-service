import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import appoinment from '../../images/appoinment.jpg';
import './MakeAppoinment.css';
import swal from 'sweetalert';
import { useHistory } from 'react-router';
const MakeAppoinment = () => {
    const { allFirebase } = useAuth();
    const { user } = allFirebase;
    const history = useHistory();
    const [department, setDepartment] = useState();
    const [doctor, setDoctor] = useState();
    const [date, setDate] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [message, setMessage] = useState();

    const handleDepartment = (e) => {
        setDepartment(e.target.value);
    }
    const handleDoctor = (e) => {
        setDoctor(e.target.value);
    }
    const handleDate = (e) => {
        setDate(e.target.value);
    }
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePhone = (e) => {
        setPhone(e.target.value);
    }
    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    const { allAppoinment } = useAuth();
    const { setAppoinment } = allAppoinment;
    const handleAppoinment = (e) => {
        e.preventDefault()
        setAppoinment({
            department: department,
            doctor: doctor,
            date: date,
            pataient: name || user.displayName,
            email: email || user.email,
            phone: phone,
            message: message,
            save: true
        })
        swal("Great!", "Your Appoinment are Pending", "success");
        history.push('/pending-appoinment')
    }
    return (
        <div className="make-appoinment container">
            <div className="row ">
                <div className="col-md-6 py-5">
                    <div className="appoinment-form">
                        <h2 style={{ color: "darkblue" }} className=" text-center my-4">Make an Appoinment</h2>
                        <form onSubmit={handleAppoinment} required>
                            <select onChange={handleDepartment} id="cars">
                                <option value="Neorology Department">Neorology Department</option>
                                <option value="X-ray Diognostic Department">X-ray Diognostic Department</option>
                                <option value="Cardiology Department">Cardiology Department</option>
                                <option value="MRI Department">MRI Department</option>
                                <option value="Labrotory Service">Labrotory Service</option>
                            </select>
                            <select onChange={handleDoctor} required>
                                <option value="Dr Pradip">Dr Pradip</option>
                                <option value="Utpolkanti">Utpolkanti</option>
                                <option value="hannan">Hannan</option>
                                <option value="Shima Khatun">Shima Khatun</option>
                            </select>
                            <input onChange={handleDate} type="date" required />
                            <input onBlur={handleName} type="text" defaultValue={user?.displayName} placeholder="Enter Your Name" required />
                            <input onBlur={handleEmail} type="email" defaultValue={user.email} placeholder="Enter your email" required />
                            <input onBlur={handlePhone} type="number" placeholder="Enter your Phone Number" required />
                            <textarea onBlur={handleMessage} className="form-control" name="" id="" cols="30" rows="4" placeholder="Enter Your messages" required></textarea>
                            <div >
                                <button className="my-btn">Confirm Request</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="text-center appoinment-photo">
                        <img style={{ width: "80%" }} className="img-fluid" src={appoinment} alt="AppoinmentPhoto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAppoinment;