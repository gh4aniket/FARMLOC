// Signup.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaLeaf } from "react-icons/fa";
import { BiMoon, BiSun } from "react-icons/bi";
import signupImage from "../assets/images/signup.png";
import '../index.css';

const Signup = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Apply theme class to body when theme changes
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.password || !formData.cpassword) {
      setError('All fields are required');
      return false;
    }
    if (formData.password !== formData.cpassword) {
      setError('Passwords do not match');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('http://localhost:5050/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess('Registration successful! Redirecting to dashboard...');
        // Store user data in localStorage or context
        localStorage.setItem('user', JSON.stringify({
          userId: data.userId,
          name: formData.name,
          email: formData.email
        }));
        
        // Redirect to dashboard after 2 seconds
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
      console.error('Signup error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <Link to='/' className='back-to-home-btn'>Back to Home</Link>
      <div className="auth-left">
        <img
          src={signupImage}
          alt="Signup Illustration"
          className="auth-image"
        />
      </div>
      <div className="auth-right">
        <div className="auth-header">
          <FaLeaf className="auth-leaf-icon" />
          <h2>Create an <span className="highlight">Account</span></h2>
        </div>
        
        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme} 
          className="auth-theme-btn"
          aria-label="Toggle theme"
        >
          {theme === "light" ? <BiMoon className="theme-icon" /> : <BiSun className="theme-icon" />}
        </button>

        {/* Success Message */}
        {success && (
          <div className="auth-message success">
            {success}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="auth-message error">
            {error}
          </div>
        )}

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input 
            type="text" 
            name="name"
            placeholder="Enter your full name" 
            value={formData.name}
            onChange={handleInputChange}
            required 
          />

          <label>Email Address</label>
          <input 
            type="email" 
            name="email"
            placeholder="Enter email" 
            value={formData.email}
            onChange={handleInputChange}
            required 
          />

          <label>Password</label>
          <input 
            type="password" 
            name="password"
            placeholder="Enter password" 
            value={formData.password}
            onChange={handleInputChange}
            required 
          />

          <label>Confirm Password</label>
          <input 
            type="password" 
            name="cpassword"
            placeholder="Confirm password" 
            value={formData.cpassword}
            onChange={handleInputChange}
            required 
          />

          <button type="submit" disabled={loading}>
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login" className="link">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;