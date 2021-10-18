import React, { useState } from 'react';
import './Login.css';
import logo from '../../images/avatar.png'
import { FormControlLabel, Checkbox, Snackbar } from '@mui/material';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from '@firebase/auth';
import useAuth from '../../hooks/useAuth';
import swal from 'sweetalert';
import { useHistory } from 'react-router';
const Login = () => {
    const auth = getAuth();
    const { allFirebase } = useAuth();
    const { setUser } = allFirebase;
    const history = useHistory();
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
            handleProccedUser(email, password)
    }
    const handleCreateUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                updateUserName();
                swal("Good job!", "Account has been created!", "success");
                setoggle(true)
            })
            .catch((error) => {
                console.log(error.message);
            });
    }
    const handleProccedUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user);
                history.push('/home');
                swal("Good job!", "Login Successfully!", "success");
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
            console.log("Kono Genjam Ase")
        });
    }
    const googleProvider = new GoogleAuthProvider();
    const handleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                history.push('/home');
                swal("Good job!", "Login Successfully!", "success");
            })
            .catch((error) => {
                console.log("Kono Genjam Ase")
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
                                <hr />
                                <div className="text-center">
                                    <h5>Or</h5>
                                    <i onClick={handleSignIn} className=" fab fa-google signingoogle" ></i>
                                </div>
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