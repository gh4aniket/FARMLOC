// Signup.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import signupImage from "../assets/images/signup.png";
import '../index.css';

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-left">
        <img
          src={signupImage}
          alt="Signup Illustration"
          className="auth-image"
        />
      </div>
      <div className="auth-right">
        <h2>Create an <span className="highlight">Account</span></h2>
        <form className="auth-form">
          <label>First Name</label>
          <input type="text" placeholder="First name" required />

          <label>Last Name</label>
          <input type="text" placeholder="Last name" required />

          <label>Email Address</label>
          <input type="email" placeholder="Enter email" required />

          <label>Enter Password</label>
          <input type="password" placeholder="Enter password" required />

          <button type="submit" className="submit-button">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/login" className="link">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;