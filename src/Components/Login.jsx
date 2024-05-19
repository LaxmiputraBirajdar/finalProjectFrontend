<<<<<<< HEAD
import React, { useState } from 'react';
import { Button, TextField, Grid, Typography, Paper } from '@mui/material';
import './Login.css';
import PCIllustration from './login.png'; // Import the PC illustration

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        const token = data.token;
        const username = data.username;
        localStorage.setItem('authToken', token);
        localStorage.setItem('username', username); // Store the token in local storage
        alert('Logged in successfully');
        window.location.href = '/'; // Example redirection
      } else {
        alert(data.message || 'Invalid username or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login. Please try again.');
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      {/* PC Illustration */}
      <Grid item xs={10} sm={8} md={6} lg={4} style={{ position: 'relative' }}>
        <img src={PCIllustration} alt="PC Illustration" className="pc-illustration" />
      </Grid>

      {/* Login Form */}
      <Grid item xs={10} sm={8} md={6} lg={4}>
        <Paper elevation={3} className="login-container">
          <Typography variant="h4" gutterBottom align="center">
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              type="text"
              id="username"
              name="username"
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.username}
              onChange={handleChange}
              required
            />

            <TextField
              type="password"
              id="password"
              name="password"
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Log In
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
=======
// Login.jsx
import React from "react";
import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="login-container">
      <h2 className="login-header">Login</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username"><FaUser /> Username:</label>
          <input type="text" id="username" placeholder="Enter your username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password"><FaLock /> Password:</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
>>>>>>> ee5a232c4ee0a9005f8499043542f3b555b23b65
  );
};

export default Login;
