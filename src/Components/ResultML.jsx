import React from 'react';
import { useLocation } from 'react-router-dom';

const ResultML = () => {
  const location = useLocation();
  const result = new URLSearchParams(location.search).get('result');

  // Define the color based on the result
  const textColor = result === "Depression Detected" ? "#FF0000" : "#4CAF50";

  return (
    <div className="MLresult" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="card" style={{ width: "400px", boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', padding: '20px', marginBottom: '30px' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '30px', marginBottom: '20px', color: '#333' }}>Result</h2>
        {/* Set the color dynamically */}
        <p className="result-text" style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '25px', color: textColor }}>{result}</p>
      </div>

      {result === "Depression Detected" && (
        <>
          <h4 style={{ fontWeight: 'bold', textAlign: 'center', marginTop: '30px', marginBottom: '20px', color: '#333' }}>Please Refer below content for support</h4>
          <div className="ContentFormDisease" style={{ display: 'flex', justifyContent: 'center' }}>
            <a href="https://youtu.be/Bk0lzv8hEU8?si=3Y-KbQc2SbIPZhvE" target="_blank" rel="noopener noreferrer" className="vid1">
              <img src="https://img.youtube.com/vi/Bk0lzv8hEU8/maxresdefault.jpg" alt="Happy" style={{ width: '300px', height: '180px', margin: '0 15px', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }} />
            </a>
            <a href="https://youtu.be/eAK14VoY7C0?si=a5LjKThy2gMdlmIa" target="_blank" rel="noopener noreferrer" className="vid1">
              <img src="https://img.youtube.com/vi/eAK14VoY7C0/sddefault.jpg" alt="Happy" style={{ width: '300px', height: '180px', margin: '0 15px', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }} />
            </a>
            <a href="https://youtu.be/UoREhnV8YME?si=u09o1zNDtQs1Koe4" target="_blank" rel="noopener noreferrer" className="vid1">
              <img src="https://img.youtube.com/vi/UoREhnV8YME/maxresdefault.jpg" alt="Happy" style={{ width: '300px', height: '180px', margin: '0 15px', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }} />
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default ResultML;
