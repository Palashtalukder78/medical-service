import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png'
import './Header.css'
const Header = () => {
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
                            <NavLink className="menu" to="/contact" activeStyle={{
                                fontWeight: "bold",
                                color: "blue"
                            }}>Contact</NavLink>
                            <NavLink className="menu" to="/login" activeStyle={{
                                fontWeight: "bold",
                                color: "blue"
                            }}>
                                <button className="btn-sm my-btn">Login</button>
                            </NavLink>
                        </Stack>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;


