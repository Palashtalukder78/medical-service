import React, { useState } from 'react';
import './Login.css';
import logo from '../../images/avatar.png'
import { FormControlLabel, Checkbox, Snackbar } from '@mui/material';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from '@firebase/auth';
import useAuth from '../../hooks/useAuth';
import swal from 'sweetalert';
const Login = () => {
    const auth = getAuth();
    const { allFirebase } = useAuth();
    const { setUser } = allFirebase;

    const [toggle, setoggle] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [error, setError] = useState('');
    // Set Notify for Error start
    const [open, setOpen] = React.useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    // Set Notify for Error End
    const handleToggle = (e) => {
        setoggle(e.target.checked)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleUserName = (e) => {
        setUserName(e.target.value);
    }
    const handleLogin = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError("Password should be 6 Character");
            setOpen(true);
        }
        !toggle ?
            handleCreateUser(email, password, userName)
            :
            handlePassword(email, password)
    }
    const handleCreateUser = (email, password, userName) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user)
                updateUserName();
                swal("Good job!", "Account has been created!", "success");
                setoggle(true)
            })
            .catch((error) => {
                console.log(error.message);
            });
    }
    const updateUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: userName
        }).then(() => {

        }).catch((error) => {

        });
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
                                <form onSubmit={handleLogin}>
                                    {!toggle &&
                                        <input onBlur={handleUserName} type="text" placeholder="Full Name" />
                                    }
                                    <input onBlur={handleEmail} type="email" placeholder="Email Address" />
                                    <input onBlur={handlePassword} type="password" placeholder="Enter Password" />
                                    <div className="d-grid my-1">
                                        <button className="my-btn">Login</button>
                                    </div>
                                    <div className="flexible checkbox">
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            labelPlacement="end"
                                            style={{ margin: ' 0 0 0 0', color: "black", fontSize: "18px" }}
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
            {/* Error Notify Start */}
            {error &&
                <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    message={error}
                />
            }
            {/* Error Notify Start */}
        </div>
    );
};

export default Login;