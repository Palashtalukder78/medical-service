import React from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './Contact.css';
import swal from 'sweetalert';
import contactPhoto from '../../images/contact.jpg'
import { useHistory } from 'react-router';
const Contact = () => {
    const { allFirebase } = useAuth();
    const { user } = allFirebase;
    const history = useHistory();

    const handleContact = (e) => {
        e.preventDefault();
        history.push('/home');
        swal("Thank you!", "Message Send!", "success");
    }
    return (
        <div className="contact">
            <Container>
                <div className="row">
                    <div className="col-md-6">
                        <div className="contact-photo">
                            <img className="img-fluid" src={contactPhoto} alt="" />
                        </div>
                    </div>
                    <div className="col-md-5 mx-auto">
                        <div className="contact-form">
                            <h3 className="text-center text-primary">Contact Us</h3>
                            <form onSubmit={handleContact}>
                                <input defaultValue={user?.displayName} type="text" placeholder="Enter your name" required />
                                <input defaultValue={user?.email} type="email" placeholder="Enter your email" required />
                                <textarea className="form-control" name="" id="" cols="30" rows="4" placeholder="Enter your Message" required></textarea>
                                <div className="d-grid">
                                    <button className="my-btn">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;