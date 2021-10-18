import React, { useState } from 'react';
import './Login.css';
import logo from '../../images/avatar.png'
import { FormControlLabel, Checkbox } from '@mui/material';
const Login = () => {
    const [toggle, setoggle] = useState(false);

    const handleToggle = (e) => {
        setoggle(e.target.checked)
    }
    return (
        <div className="login">
            <div className="container">
                <div className="row form-container py-4">
                    <div className="col-lg-4 mx-auto">
                        <div className="form">
                            <div>
                                <div className="text-center mb-2">
                                    <h2 className="text-light">{toggle ? "Login" : "Register"}</h2>
                                    <img style={{ width: "80px" }} className="img-fluid" src={logo} alt="" />
                                </div>
                                <form>
                                    {!toggle &&
                                        <input type="text" placeholder="Full Name" />
                                    }
                                    <input type="email" placeholder="Email Address" />
                                    <input type="password" placeholder="Enter Password" />
                                    <div className="d-grid my-1">
                                        <button className="my-btn">Login</button>
                                    </div>
                                    <div className="flexible checkbox">
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            labelPlacement="end"
                                            style={{ margin: ' 0 0 0 0', color: "blue", fontSize: "18px" }}
                                            label="Already Registered?"
                                            onChange={handleToggle}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;