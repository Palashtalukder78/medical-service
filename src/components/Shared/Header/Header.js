import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import './Header.css';
import { signOut, getAuth } from '@firebase/auth';
import swal from 'sweetalert';
const Header = () => {
    const auth = getAuth();
    const history = useHistory();
    const { allFirebase, allAppoinment } = useAuth();
    const { user, setUser, setIsLoading } = allFirebase;
    const { appoinment } = allAppoinment;

    const handleLogout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser('');
            swal("Good job!", "Logout Successfully", "success");
            history.push('/home');
        })
            .finally(() => setIsLoading(false))

    }
    return (
        <Navbar collapseOnSelect expand="lg" className="navigation" variant="light">
            <Container>
                <Navbar.Brand style={{
                    display: "contents"
                }}>
                    <img style={{ width: "200px" }} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Stack direction="horizontal" gap={3}>
                            <NavLink className="menu" to="/home" activeStyle={{
                                fontWeight: "bold",
                                color: "blue"
                            }}>Home</NavLink>

                            {!appoinment?.date ?
                                <NavLink className="menu" to="/make-appoinment" activeStyle={{
                                    fontWeight: "bold",
                                    color: "blue"
                                }}>
                                    Make Appoinment
                                </NavLink>
                                :
                                <NavLink className="menu" to="/pending-appoinment" activeStyle={{
                                    fontWeight: "bold",
                                    color: "blue"
                                }}>
                                    View Appoinment
                                </NavLink>
                            }
                            <NavLink className="menu" to="/contact" activeStyle={{
                                fontWeight: "bold",
                                color: "blue"
                            }}>Contact</NavLink>
                            <b style={{ fontSize: "18px", }}>{user?.displayName}</b>
                            {user?.photoURL &&
                                <img style={{ width: "40px", height: "40px", borderRadius: "50%" }} src={user.photoURL} alt="" />
                            }
                            {!user?.displayName ?
                                <NavLink className="menu" to="/login" activeStyle={{
                                    fontWeight: "bold",
                                    color: "blue"
                                }}>
                                    <button className="btn-sm my-btn">Login</button>
                                </NavLink>
                                :
                                <NavLink className="menu" to="/login" activeStyle={{
                                    fontWeight: "bold",
                                    color: "blue"
                                }}>
                                    <button onClick={handleLogout} className="btn-sm my-btn">Logout</button>
                                </NavLink>
                            }
                        </Stack>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;


