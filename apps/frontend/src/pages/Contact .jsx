import React from "react";
import './Contact.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <Container className="contact-us my-5" id='contact'>
      <h2 className="text-center mb-4">🌾 Contact FARMLOC Support</h2>
      <p className="text-center mb-5">Have questions? Reach out to us for help with cold storage, resources, or farm management.</p>
      
      <Row className="gx-5">
        {/* Contact Form */}
        <Col md={6} className="mb-4">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Ex: Rajesh Kumar" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Ex: +91 9876543210" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ex: farmer@example.com" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={4} 
                placeholder="Ex: I need help finding a cold storage near Pune..." 
                required 
              />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100">
              Send Message
            </Button>
          </Form>
        </Col>

        {/* Contact Info */}
        <Col md={6} className="contact-info">
          <div className="contact-item mb-4">
            <FaPhone className="icon" />
            <h5>Phone Support</h5>
            <p>+91 1800-123-4567 (Toll-Free)</p>
          </div>

          <div className="contact-item mb-4">
            <FaEnvelope className="icon" />
            <h5>Email Us</h5>
            <p>support@farmloc.in</p>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <h5>Head Office</h5>
            <p>FARMLOC HQ, Agri-Tech Park, Bengaluru, Karnataka - 560100</p>
          </div>

          <div className="mt-4">
            <h5>Operating Hours</h5>
            <p>Monday - Saturday: 6 AM to 8 PM (IST)</p>
            <p>Closed on Sundays & National Holidays</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
