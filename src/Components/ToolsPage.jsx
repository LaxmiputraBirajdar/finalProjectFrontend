import React from 'react';
import './ToolsPage.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

const ToolsPage = () => {
  return (
    <div className="tools-container">
      <h2>Tools Page</h2>

      <div className="buttons-container">
      <div className="buttons-container">
        <Link to="/tools/depression/questions" className="tool-button">DEPRESSION TEST</Link>

      </div>

      <div className="buttons-container">
        <Link to="/tools/newone/questions" className="tool-button">newnone</Link>

      </div>
        <button className="tool-button">POSTPARTUM DEPRESSION TEST (NEW & EXPECTING PARENTS)</button>
        <button className="tool-button">ANXIETY TEST</button>
        <button className="tool-button">ADHD TEST</button>
        <button className="tool-button">BIPOLAR TEST</button>
        <button className="tool-button">PSYCHOSIS & SCHIZOPHRENIA TEST</button>
        <button className="tool-button">PTSD TEST</button>
        <button className="tool-button">EATING DISORDER TEST</button>
        <button className="tool-button">ADDICTION TEST</button>
        <button className="tool-button">PARENT TEST: YOUR CHILD’S MENTAL HEALTH</button>
        <button className="tool-button">YOUTH MENTAL HEALTH TEST</button>
        <button className="tool-button">TEST DE DEPRESIÓN</button>
        <button className="tool-button">TEST DE ANSIEDAD</button>
        <button className="tool-button">SELF-INJURY SURVEY</button>
      </div>

      <div className="how-it-works">
        <h3>How does it work?</h3>
        <p>Include your explanation here...</p>
      </div>
    </div>
  );
};

export default ToolsPage;
