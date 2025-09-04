// Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLeaf, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { BiMoon, BiSun } from "react-icons/bi";
import '../index.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    
    if (!userData || !token) {
      navigate('/login');
      return;
    }

    setUser(JSON.parse(userData));

    // Apply theme
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme, navigate]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="dashboard-brand">
          <FaLeaf className="dashboard-leaf-icon" />
          <h1>FARMLOC Dashboard</h1>
        </div>
        
        <div className="dashboard-controls">
          <button 
            onClick={toggleTheme} 
            className="dashboard-theme-btn"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <BiMoon className="theme-icon" /> : <BiSun className="theme-icon" />}
          </button>
          
          <button onClick={handleLogout} className="logout-btn">
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </header>

      {/* Welcome Section */}
      <div className="dashboard-welcome">
        <div className="welcome-card">
          <FaUser className="user-icon" />
          <h2>Welcome back, {user.name}! 🎉</h2>
          <p>You're successfully logged into your FARMLOC account.</p>
          <div className="user-info">
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>User ID:</strong> {user.userId}</p>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="dashboard-content">
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>Cold Storage</h3>
            <p>Manage your cold storage facilities and monitor temperature controls.</p>
            <button className="dashboard-action-btn">View Storages</button>
          </div>
          
          <div className="dashboard-card">
            <h3>Marketplace</h3>
            <p>Browse and purchase fresh produce from local farmers.</p>
            <button className="dashboard-action-btn">Shop Now</button>
          </div>
          
          <div className="dashboard-card">
            <h3>Orders</h3>
            <p>Track your orders and view order history.</p>
            <button className="dashboard-action-btn">View Orders</button>
          </div>
          
          <div className="dashboard-card">
            <h3>Profile</h3>
            <p>Update your account information and preferences.</p>
            <button className="dashboard-action-btn">Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
