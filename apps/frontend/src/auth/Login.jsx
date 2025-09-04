// Login.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import loginImage from "../assets/images/login.png";
import '../index.css';

const Login = () => {
  return (
    <div className="auth-container">
      <Link to='/' className='back-to-home-btn'>Back to Home</Link>
      <div className="auth-left">
        <img
            src={loginImage}
            alt="Login Illustration"
            className="auth-image"
        />
      </div>
      <div className="auth-right">
        <h2>Welcome <span className="highlight">Back</span></h2>
        <form className="auth-form">
          <label>Email Address</label>
          <input type="email" placeholder="Enter email" required />

          <label>Password</label>
          <input type="password" placeholder="Enter password" required />

          <button type="submit" className="submit-button">Log In</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup" className="link">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;