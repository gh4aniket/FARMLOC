import React from "react";
import './Contact.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import contactImage from '../assets/images/contact.png';

const Contact = () => {
  return (
    <Container className="contact-us my-5" id='contact'>
      <h2 className="text-center mb-4">🌾 Contact FARMLOC Support</h2>
      <p className="text-center mb-5">Have questions? Reach out to us for help with cold storage, resources, or farm management.</p>
      
      <div className="contact-page-container">
      <div className="contact-image-column">
        <img src={contactImage} alt="Contact Visual" className="contact-photo" />
      </div>
      
      <div className="contact-form-column">
        <div className="form-content">
          <form className="contact-form">
            <div className="form-section">
              <label>
                Name <span className="required">*</span>
              </label>
              <div className="name-fields">
                <input 
                  type="text" 
                  placeholder="First" 
                  className="form-input"
                  required
                />
                <input 
                  type="text" 
                  placeholder="Last" 
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-section">
              <label>
                Email <span className="required">*</span>
              </label>
              <input 
                type="email" 
                className="form-input full-width"
                required
              />
            </div>

            <div className="form-section">
              <label>
                Leave us a few words <span className="required">*</span>
              </label>
              <textarea 
                className="form-input full-width textarea"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="divider"></div>

            <button type="submit" className="submit-button">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
    </Container>
  );
};

export default Contact;
