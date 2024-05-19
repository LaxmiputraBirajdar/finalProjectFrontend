// Register.jsx
import React from "react";
import "./Register.css";
import { FaUser, FaEnvelope, FaKey, FaVenusMars, FaCalendarAlt } from "react-icons/fa";

const Register = () => {
  return (
    <div className="register-container">
      <h2 className="register-header">Sign Up</h2>
      <form className="register-form">
        <div className="form-group">
          <label htmlFor="name"><FaUser /> Name:</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email"><FaEnvelope /> Email:</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password"><FaKey /> Password:</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>
        <div className="form-group">
          <label htmlFor="gender"><FaVenusMars /> Gender:</label>
          <select id="gender" required>
            <option value="">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="dob"><FaCalendarAlt /> Date of Birth:</label>
          <input type="date" id="dob" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
