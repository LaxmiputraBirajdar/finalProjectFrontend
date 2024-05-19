import React from 'react';
import { useLocation } from 'react-router-dom';

const TestML = () => {
  const location = useLocation();
  const videoResult = new URLSearchParams(location.search).get('video_result');
  const textResult = new URLSearchParams(location.search).get('text_result');

  return (
    <div>
      <h2>Result Page</h2>
      <p>Video Result: {videoResult}</p>
      <p>Text Mining Result: {textResult}</p>
    </div>
  );
};

export default TestML;
