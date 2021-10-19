import React, { useState } from 'react';
import './Login.css';
import logo from '../../images/avatar.png'
import { FormControlLabel, Checkbox, Snackbar } from '@mui/material';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from '@firebase/auth';
import useAuth from '../../hooks/useAuth';
import swal from 'sweetalert';
import { useHistory, useLocation } from 'react-router';
const Login = () => {
    const auth = getAuth();
    const { allFirebase } = useAuth();
    const { setUser, setIsLoading } = allFirebase;
    const history = useHistory();
    const location = useLocation();
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

    const redirect_uri = location.state?.from || './home';
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
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                updateUserName();
                signout();
                setoggle(true);
                // history.push(redirect_uri);
                swal("Good job!", "Account has been created!", "success");
            })
            .catch(error => {
                setError(error.message);
                setOpen(true);
            })
            .finally(() => setIsLoading(false))
    }
    const signout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser('')
        })
            .finally(() => setIsLoading(false))
    }

    const handleProccedUser = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user);
                history.push(redirect_uri);
                swal("Good job!", "Login Successfully!", "success");
            })
            .catch(error => {
                setError(error.message);
                setOpen(true);
            })
            .finally(() => setIsLoading(false));
    }
    const updateUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: userName
        }).then(() => {

        }).catch(error => {
            setError(error.message);
            setOpen(true);
        });
    }
    const handleSignIn = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                history.push(redirect_uri);
                swal("Good job!", "Login Successfully!", "success");
            })
            .catch(error => {
                setError(error.message);
                setOpen(true);
            })
            .finally(() => setIsLoading(false))
    }
    return (
        <div className="login">
            <div className="container">
                <div className="row form-container py-4">
                    <div className="col-lg-5 mx-auto">
                        <div className="form">
                            <div>
                                <div className="text-center mb-2">
                                    <h2 className="text-primary">{toggle ? "Login" : "Register"}</h2>
                                    <img style={{ width: "80px" }} className="img-fluid" src={logo} alt="" />
                                </div>
                                <form onSubmit={handleLogin}>
                                    {!toggle &&
                                        <input onBlur={handleUserName} type="text" placeholder="Full Name" required />
                                    }
                                    <input onBlur={handleEmail} type="email" placeholder="Email Address" required />
                                    <input onBlur={handlePassword} type="password" placeholder="Enter Password" required />
                                    <div className="d-grid my-1">
                                        <button className="my-btn">{toggle ? "Login" : "Register"}</button>
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
                                    <h5>Or login with:</h5>
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