import React from 'react';
import { useLocation } from 'react-router-dom';
import './Result.css'
const Result = () => {
  const location = useLocation();
  const result = new URLSearchParams(location.search).get('result');

  return (
    <div className="result-container">
      <div className="result-content">
        <h2>Result Page it is </h2>
        <p>Result: {result}</p>
      </div>
    </div>
  );
};

export default Result;
