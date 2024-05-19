import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation

const ToolResult = () => {
  // Extract resultData from location state
  const { resultData } = useLocation().state;

  return (
    <div>
      <h1>Hey</h1>
      <h2>Assessment Results</h2>
      {/* Display resultData information as needed */}
      <p>Total Score: {resultData.totalScore}</p>
      <p>Result: {resultData.result}</p>
      {/* Add more details if needed */}
    </div>
  );
};

export default ToolResult;
