// LandingPage.js
import React, { useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleAssessmentClick = () => {
    setShowOverlay(true);
  };

  const handleOverlayClose = () => {
    setShowOverlay(false);
  };

  return (
    <div className="LandingPage">
      <header className="LandingPage-header">
        <h1>Welcome to our Mental Health Assessment</h1>
        <p>Take the first step towards a healthier mind.</p>
        <button onClick={handleAssessmentClick}>Start Assessment</button>
      </header>
      <div className="content">
        <h2>Why Assess Your Mental Health?</h2>
        <p>
          Assessing your mental health can help identify potential issues early on, allowing for timely intervention
          and treatment. It's important to prioritize your mental well-being just as much as your physical health.
        </p>
        <img src="/mental-health.jpg" alt="Mental Health" className="image" />
      </div>
      {showOverlay && (
        <div className="overlay" onClick={handleOverlayClose}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <h2>Mental Health Assessment</h2>
            {/* Add your assessment form or content here */}
            <button onClick={handleOverlayClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
