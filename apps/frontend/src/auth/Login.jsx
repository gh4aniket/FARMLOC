// Login.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaLeaf } from "react-icons/fa";
import { BiMoon, BiSun } from "react-icons/bi";
import loginImage from "../assets/images/login.png";
import '../index.css';

const Login = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    if (!formData.email || !formData.password) {
      setError('All fields are required');
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
      const response = await fetch('http://localhost:5050/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess('Login successful! Redirecting to dashboard...');
        
        // Store user data and token in localStorage
        localStorage.setItem('user', JSON.stringify({
          userId: data.data._id,
          name: data.data.name,
          email: data.data.email
        }));
        localStorage.setItem('token', data.jwt_token);
        
        // Redirect to dashboard after 2 seconds
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

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
        <div className="auth-header">
          <FaLeaf className="auth-leaf-icon" />
          <h2>Welcome <span className="highlight">Back</span></h2>
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

          <button type="submit" disabled={loading}>
            {loading ? 'Logging In...' : 'Log In'}
          </button>
        </form>
        <p>
          Don't have an account? <Link to="/signup" className="link">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;