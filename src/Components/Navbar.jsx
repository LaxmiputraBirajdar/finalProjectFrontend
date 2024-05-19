<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css';
=======
// Navbar.js
import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from React Router
import logo from '../logo.png'; // Import logo.png file

import './Navbar.css'; // Import CSS file for styling
>>>>>>> ee5a232c4ee0a9005f8499043542f3b555b23b65

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  // Function to handle user logout
  const handleLogout = () => {
    // Clear user data and update state
    setLoggedIn(false);
    setUsername('');
    // Remove authentication token from localStorage
    localStorage.removeItem('authToken');
  };

  useEffect(() => {
    // Check if user is logged in by retrieving the authentication token from localStorage
    const yourAuthToken = localStorage.getItem('authToken');
    const username = localStorage.getItem('username');
    if (yourAuthToken) {
      // If authentication token exists, set loggedIn to true
      setLoggedIn(true);
      // Perform any additional operations, like decoding token to get username, etc.
      // You can use libraries like jwt-decode for this purpose
      // For now, let's assume the username is stored in localStorage as well
      const storedUsername = username;
      if (storedUsername) {
        setUsername(storedUsername);
      }
    }
  }, []);

  return (
    <nav className="navbar" style={{ backgroundColor: '#2E8B57' }}>
      <div className="navbar-left">
        <div className="logo">
<<<<<<< HEAD
          {/* Added styling for the website name with a different color */}
          <h1 className="website-name" style={{ color: '#FFFFFF', fontSize: '24px', fontWeight: 'bold', margin: '0' }}>Web App For Mental Health Assessment</h1>
=======
          <img src={logo} alt="Logo" /> {/* Use imported logo */}
          <h1 className="website-name">Mental Health India</h1>
>>>>>>> ee5a232c4ee0a9005f8499043542f3b555b23b65
        </div>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
<<<<<<< HEAD
          <li><Link to="/" className="nav-link" style={{ color: '#fff', fontWeight: 'bold' }}>Home</Link></li>
          <li><Link to="/about" className="nav-link" style={{ color: '#fff', fontWeight: 'bold' }}>About</Link></li>
          <li><Link to="/services" className="nav-link" style={{ color: '#fff', fontWeight: 'bold' }}>Services</Link></li>
        </ul>
        <div className="auth-buttons">
          {loggedIn ? (
            <>
              <Button variant="outlined" color="inherit" onClick={handleLogout} className="logout-button">Logout</Button>
            </>
          ) : (
            <>
              <Button variant="outlined" color="inherit" component={Link} to="/login" className="login-button" style={{ marginRight: '10px' }}>Login</Button>
              <Button variant="contained" color="primary" component={Link} to="/signup" className="signup-button" style={{ marginLeft: '10px' }}>Sign Up</Button>
            </>
          )}
=======
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/services" className="nav-link">Services</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
        <div className="auth-buttons">
          {/* Use Link component for navigation */}
          <Button variant="outlined" color="inherit" component={Link} to="/login" className="login-button">Login</Button>
          <Button variant="contained" color="primary" component={Link} to="/register" className="signup-button">Sign Up</Button>
        </div>
        <div className="user-profile">
          {/* Assuming user avatar */}
          <img src="user_avatar.png" alt="User Avatar" />
          {/* Dropdown for user options */}
          <div className="dropdown-content">
            <a href="#">Profile</a>
            <a href="#">Settings</a>
            <a href="#">Logout</a>
          </div>
>>>>>>> ee5a232c4ee0a9005f8499043542f3b555b23b65
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
