import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const linkdin = "https://www.linkedin.com/in/md-ariful-islam-palash/";
    const facebook = "https://www.facebook.com/profile.php?id=100009430642663";
    const youtube = "https://www.youtube.com/channel/UCbP3eGSZ3j7rqJcLdk6DLrw";
    return (
        <div className="footer">
            <div className="container">
                <div className="row text-light pt-5 pb-3">
                    <div className="col-md-4">
                        <h2>MediService</h2>
                        <p>This hospital is a health care institution providing patient treatment with specialized medical and nursing staff and medical equipment.</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h2>Important Link</h2>
                        <NavLink className="menu" to="/home" activeStyle={{
                            fontWeight: "bold",
                            color: "blue"
                        }}><span style={{ color: "#fff" }}>Home</span></NavLink>
                        <NavLink className="menu" to="/contact" activeStyle={{
                            fontWeight: "bold",
                            color: "blue"
                        }}><span style={{ color: "#fff" }}>Contact</span></NavLink>
                        <NavLink className="menu" to="/doctors" activeStyle={{
                            fontWeight: "bold",
                            color: "blue"
                        }}><span style={{ color: "#fff" }}>Doctors</span></NavLink>

                        <div className="social-icon">
                            <a href={linkdin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>

                            <a href={facebook} target="_blank" rel="noreferrer"><i className="fab fa-facebook-square"></i></a>

                            <a href={youtube} target="_blank" rel="noreferrer"><i className="fab fa-youtube-square"></i></a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h2 >Contact US</h2>
                        <div >
                            <div className="footer-address">
                                <i class="fas fa-home"></i>
                                <span>Savar, Dhaka</span>
                            </div>
                            <div className="footer-address">
                                <i class="fa fa-envelope"></i>
                                <span>mediService.support@gmail.com</span>
                            </div>
                            <div className="footer-address">
                                <i class="fa fa-phone"></i>
                                <span>+880-1990524105</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;