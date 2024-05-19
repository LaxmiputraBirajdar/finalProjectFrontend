import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import your CSS file

const HomePage = () => {
  return (
    <div className="home-container">
      <header>
        <h1 className="project-name">Big Project Name</h1>
        <p className="project-description">Empowering Mental Well-being</p>
      </header>

      <div className="section">
        <h2>Explore and Assess</h2>
        <p>Choose a method to assess your mental well-being:</p>

        <div className="options-container">
          <Link to="/tools" className="option-link">
            <div className="option">
              <label htmlFor="option1">Interactive Tools</label>
            </div>
          </Link>

          <Link to="/ml" className="option-link">
            <div className="option">
              <label htmlFor="option2">AI-powered Analysis</label>
            </div>
          </Link>
        </div>
      </div>

      <div className="section">
        <h2>Understanding Your Journey</h2>
        <p>Embark on a path of self-discovery and mental wellness.</p>
        {/* Add more content boxes or information as needed */}
      </div>
    </div>
  );
};

export default HomePage;
