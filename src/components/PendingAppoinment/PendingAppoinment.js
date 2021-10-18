import React from 'react';
import useAuth from '../../hooks/useAuth';
import './PendingAppoinment.css';
import doctorPhoto from '../../images/doctor.jpg';
import doctorAvatar from '../../images/doctor-avater.png';
import swal from 'sweetalert';
import { useHistory } from 'react-router';
const PendingAppoinment = () => {
    const history = useHistory();
    const { allAppoinment } = useAuth();
    const { appoinment, setAppoinment } = allAppoinment;
    const { department, doctor, date, pataient, email, phone } = appoinment;

    const handleCancelAppoinment = () => {
        setAppoinment({});
        swal("So sad!", "We will really missed You!", "error");
        history.push('/make-appoinment');
    }
    return (
        <div className="appoinment-shedule">
            <div className="container">
                <div className="row">
                    <div className="col-md-6" >
                        <img className="img-fluid" style={{ width: "100%" }} src={doctorPhoto} alt="" />
                    </div>
                    <div className="col-md-6 appoinment-content">
                        <div >
                            <div className="appoinment-content p-5">
                                <div className="text-center">
                                    <img className="img-fluid" style={{ width: "30%" }} src={doctorAvatar} alt="" />
                                </div>
                                <p>Assalamualaikum <b>{pataient}</b></p>
                                <p>I am <b>{doctor}</b> really exited to meet with you and Discuss about your Problem. I am specialist of <b>{department}</b>.</p>
                                <p>Hope we can meet Timely on <b>{date}</b>. And will let you know by <b>{email} or {phone}</b>, if any problem.</p>
                                <p>Thanks</p>
                                <div className="text-center">
                                    <button onClick={handleCancelAppoinment} className="my-btn btn-sm">Cancel Appoinment</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PendingAppoinment;