import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ToolQuestions.css';
import { useNavigate } from 'react-router-dom';

const ToolQuestions = () => {
  const { toolId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [assessmentResult, setAssessmentResult] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`http://localhost:3001/tools/${toolId}/questions`);

        if (!response.ok) {
          throw new Error(`Failed to fetch questions. Status: ${response.status}`);
        }

        const data = await response.json();
        setQuestions(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError('An error occurred while fetching questions.');
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [toolId]);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = { ...prevAnswers };
  
      // Find the index of the question with the given questionId
      const questionIndex = questions.findIndex((question) => question._id === questionId);
  
      if (questionIndex !== -1) {
        updatedAnswers[questionId] = answer; // Use the actual selected value
      }
  
      return updatedAnswers;
    });
  };

  const handleSubmit = async () => {
    try {
      const yourAuthToken = localStorage.getItem('authToken');

      // Transform answers from object to array
      const answersArray = questions.map((question) => {
        const selectedOption = answers[question._id] || 'not-at-all'; // Default to "not-at-all"
        switch (selectedOption) {
          case 'not-at-all':
            return 0;
          case 'nearly-every-day':
            return 3;
          case 'more-than-half-days':
            return 2;
          case 'several-days':
            return 1;
          default:
            return 0; // Default to "not-at-all" if the option is not recognized
        }
      });
      

      const response = await fetch(`http://localhost:3001/tools/${toolId}/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${yourAuthToken}`,
        },
        body: JSON.stringify(answersArray),
      });

      if (!response.ok) {
        throw new Error(`Failed to submit answers. Status: ${response.status}`);
      }

      const resultData = await response.json();
      setAssessmentResult(resultData); // Save the detailed assessment result

    } catch (error) {
      console.error(error);
      // Handle error, display a message, etc.
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="tool-questions-container">
      <h2>{toolId} Test</h2>
      {assessmentResult ? (

<div className="assessment-results">

<div className="container">
<div className="card" style={{ backgroundColor: assessmentResult.totalScore < 5 ? '#e6ffe6' : assessmentResult.totalScore > 5 ? '#ffe6e6' : '' }}>
    <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>Score</h2>
    <p className="result-text" style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '25px' }}>{assessmentResult.totalScore}</p>
  </div>
  {/* Conditional rendering of images based on total score */}
  {assessmentResult.totalScore < 5 && (
    <img src="data:image/png;base64,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" alt="Happy" style={{ width: '100px', height: '100px', margin: '0 auto' }} />
  )}
  {assessmentResult.totalScore >= 5 && assessmentResult.totalScore <= 14 && (
    <img src="data:image/png;base64,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" alt="Simple Sad" style={{ width: '100px', height: '100px', margin: '0 auto' }} />
  )}
  {assessmentResult.totalScore > 14 && (
    <img src="data:image/png;base64,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" alt="Very Unhappy" style={{ width: '100px', height: '100px', margin: '0 auto' }} />
  )}
  <div className="card" style={{ backgroundColor: assessmentResult.totalScore < 5 ? '#e6ffe6' : assessmentResult.totalScore > 5 ? '#ffe6e6' : '' }}>
    <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>Result</h2>
    <p className="result-text" style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '25px' }}>{assessmentResult.result} {toolId}</p>
  </div>
</div>

<h4 style={{ textAlign: 'center', fontWeight: 'bold', marginTop:'100px' }} >Please Refer below content for support</h4>


{toolId==="depression" && (

<div className="ContentFormDisease" style={{ display: 'flex', justifyContent: 'space-around', marginTop:'50px' }}>
<a href="https://youtu.be/Bk0lzv8hEU8?si=3Y-KbQc2SbIPZhvE" target="_blank" rel="noopener noreferrer" className="vid1">
  <img src="https://img.youtube.com/vi/Bk0lzv8hEU8/maxresdefault.jpg" alt="Happy" style={{ width: '200px', height: '120px', margin: '0 auto' }} />
</a>
<a href="https://youtu.be/eAK14VoY7C0?si=a5LjKThy2gMdlmIa" target="_blank" rel="noopener noreferrer" className="vid1">
  <img src="https://img.youtube.com/vi/eAK14VoY7C0/sddefault.jpg" alt="Happy" style={{ width: '200px', height: '120px', margin: '0 auto' }} />
</a>
<a href="https://youtu.be/UoREhnV8YME?si=u09o1zNDtQs1Koe4" target="_blank" rel="noopener noreferrer" className="vid1">
  <img src="https://img.youtube.com/vi/UoREhnV8YME/maxresdefault.jpg" alt="Happy" style={{ width: '200px', height: '120px', margin: '0 auto' }} />
</a>
</div>
)}

{toolId === "anxiety" && (
  <div className="ContentFormDisease" style={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px' }}>
    <a href="https://youtu.be/wptx2v9mpf8?si=PtA-zczoaEynS0Io" target="_blank" rel="noopener noreferrer" className="vid1">
      <img src="https://img.youtube.com/vi/wptx2v9mpf8/maxresdefault.jpg" alt="Happy" style={{ width: '200px', height: '120px', margin: '0 auto' }} />
    </a>
    <a href="https://youtu.be/1XCObQjSHIs?si=Yleu6rjQr6li_jJi" target="_blank" rel="noopener noreferrer" className="vid1">
      <img src="https://img.youtube.com/vi/1XCObQjSHIs/maxresdefault.jpg" alt="Happy" style={{ width: '200px', height: '120px', margin: '0 auto' }} />
    </a>
    <a href="https://youtu.be/0jApmZQejOc?si=ndNxTEQHZmjT30Sv" target="_blank" rel="noopener noreferrer" className="vid1">
      <img src="https://img.youtube.com/vi/0jApmZQejOc/maxresdefault.jpg" alt="Happy" style={{ width: '200px', height: '120px', margin: '0 auto' }} />
    </a>
  </div>
)}


{toolId==="Eating disorder" && (

<div className="ContentFormDisease" style={{ display: 'flex', justifyContent: 'space-around', marginTop:'50px' }}>
<a href="https://youtu.be/P12l9kmuTSY?si=qIcW-X6d2-8dtXxt" target="_blank" rel="noopener noreferrer" className="vid1">
  <img src="https://img.youtube.com/vi/P12l9kmuTSY/maxresdefault.jpg" alt="Happy" style={{ width: '200px', height: '120px', margin: '0 auto' }} />
</a>
<a href="https://youtu.be/r6CTseon-N4?si=NnGpR6idSMVkwfY9" target="_blank" rel="noopener noreferrer" className="vid1">
  <img src="https://img.youtube.com/vi/r6CTseon-N4/maxresdefault.jpg" alt="Happy" style={{ width: '200px', height: '120px', margin: '0 auto' }} />
</a>
<a href="https://youtu.be/lQpPzsdm8R8?si=S9VLOwqUiQWq6EVq" target="_blank" rel="noopener noreferrer" className="vid1">
  <img src="https://img.youtube.com/vi/lQpPzsdm8R8/maxresdefault.jpg" alt="Happy" style={{ width: '200px', height: '120px', margin: '0 auto' }} />
</a>
</div>


)}




<div className="ContactDoctor" style={{marginTop:"50px"}}>
      <h4 style={{ textAlign: 'center', marginBottom: '20px' }}>Doctor Contact Details</h4>
      <div className="doctor-info">
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAD6AM4DASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAYHAgQFAwEI/8QAURAAAgEDAQQFBgkFDAkFAAAAAQIDAAQRBQYSITETQVFhcRQiMoGRoSM1QlJidLGywRUkQ3KSBxY2VGNzdoKio7TRJjRTlMLS4fDxM0RVZNP/xAAaAQACAwEBAAAAAAAAAAAAAAAABAIDBQEG/8QALhEAAgIBBAAEBAYDAQAAAAAAAAECAxEEEiExBRMiUTJBYXEUM0KBodEjscGR/9oADAMBAAIRAxEAPwC26UpQApSlAClKUAKUrUv9RsNMtpLu9mWKFCFBOSzueISNRxLHsH4cADbrTvtT0rTUD315BbgjKiVwHcfQQecfUKrfWNutWvGki00GxteKhxutduO0vxVfBeP0qiTySSO8kju8jnLySMXdietmbifbVbn7ElH3LNvf3QtGh3lsrW6u2BIDPi3hPeC2ZP7AqP3X7oG0MuRbxWVqueBWNppB/Wkbd/sVD6VBybJbUdmfajam4OZNWu17oCkA/uFWuVLPPOxeeWSVzzaV2dj4liTXnSot5On31VsW19qFkxezuri3Y8zBK6Z7iFODWtSg6Sq2262kgt54ZXguJGUCCeaNRJEwIyWEYCsMZ5gdueGDItm9tZ9SvEsNShgjeSOZ4bmDeSPMKGVhKrk44AnO91cuOarOsld0LbrFd5WRt0kZRhhlOOo8jUlJojtR+gVZWVWUhlYBlZSCCDxBBFfajexN1JdbO2HSElrZ7izBY5JSGQqnsGB6qklXLorFKUroClKUAKUpQApSlAClKUAKUpQAql9ptZn1jU7ly58ltpJbeyjz5qxq26Xx858ZJ8B8mpjt1rt1ZJa6ZZTPDNcxme6kiYrIsG9uIiOOI3iGzjqXvqBWOj6vqWGtbZuhJx5ROeig78MwyfUDVNk0uyyEW+jQpUytdi4QFa+vpHPXHaIIk8Okk3m9wrsQbObOwYK6fFIw+Vcl52/vSR7qVd8ENx0033wVnvpnG+uezIz7KzCSt6McrfqRSN90VbUVvaQgCG3giHUIoo0+6BXrk9p9pqt6n2RatJ7sqPoLv+LXX+7z/wDLWJSVfSimX9eKRfvCrey3afaaZPafaa5+J+gfhPqU9vJy31z2ZGa+1bcsFrMMTW8Eg7JYo3+8DXPn2e2enzvafDGT8q2LQN/dED3VJalfNEXpJfJlaV8JABJOABknsAqa3WxluwJsr2WM44JdKsqftput7jUcvtE1jTgWuLYtCM/DW56WH+sQN4etRV0bYy6ZRKmce0WnsfZSWOz2lxyoUmmWS8kVvSU3LmUKR2gEA136gWwmvXd09xpF7M8zRQ+U2UkrFpBEpCPEzMckDKlfEjkOE9puPQq+xSlKkcFKUoAUpSgBSlKAFKUoAUpTtoAp7bOYy7SamM5WEWsC9wWFGI9pNSnZ5y+iaOW4kWwj9Ubsg+yodtWCNo9cz/GUP9zHUw2cUroekZ67cv8AtSO1Z2q6NDR/F+x1aUrIqwAJBAPIkHB8KQNIxpSlAClKUAKUrIKxBIBIHMgEgUAY1o6w5j0jWWHA+RTLw+nhPxrerQ1pS2j6yB/EpW/ZIb8KlH4kRn8LIVspOYNpNDYcpJ5rdu9ZYJBj249lXRVH7PAnaDZ3HP8AKMJ9QViavCtqHRgyFKUqwiKUpQApSlAClKUAKUpQApXwkDJJwBxJPUK4F1rUtw8ttpHRt0Z3Zr6Ub0EbfNhX5Te7xzXUuG3wkCy3hdle7bL0W0WrNjAeO1mHePJ0Un2g1M9Mi6DTdLhxgx2VqpHf0ak1Dto9PuDq2mxS3ElxLqQt4zJKCGZjMYmHM8hx/wDFT3AHAchwHgOVZeqkn8LyjT0kHFvcjQ1B9UZBa6UYo7uVSZLy4UtFYxct9UHpStx3ByGCTjhvcK12a2gs7+yvE2mu7hRcI9/HdLL8PCOLIB0jJx5cRwznPDjLACxAGc9VeMN1Y3JlW2u7W4aEgTC2nilMZPAb4jY4peM2lhIalXFyzJ8nrSvtKqLT5SvtKAFRa/2c17UNSvLx9pLq2g6Xe0+G0WX4CIAYUgSIgx3A55548JTXlPc2VosbXd1bWyyErGbqaKEORzC9IwzU4SlF+khOMZL1Gnpx1aFfI9UdJ5413oL6Fd1LuMcD0qfJlX5Q5EHIPA42rqPp7S+g65rS5iHi0TAV7/8AmvqkBlJ5Agnwrjlzk6o4jgrPZuSCHXdEnuG3IYZ3lkbdLbuIZADgceZFXVFLDNGksMiSRsMq8bBlPgRVQ6XpbS67qdl0nRiyF2S27vfpVjQYyOYOa7wOr6FKskMuYnYZwCYJSPkyRnr9fga9Bpo12rapYl7GDapx9WPT7liUrj6TrtnqYER+BuwMtC54PjmYmPPw5/aexRKEoPEkQTTWUKUpUTopSlAClKUAKwllihjklldUjjUs7ucKoHWTX1mVFZ3ZVRVLMzEBVUDJJJ4YFQHXNak1KUwwsy2MTeYOIMzD9I4+6Px5X00yulhdFc5qCyZ61r82oF7e3LR2QJz1PcY63+j2D29i9DT4VgsrRABlo1kc9ryDfJqJVK9OmWaytiD50aCFx2Mg3ffwNd8Xr8uiMYdZGPDZKVrcu8Gw0MDTRXDRI08SPHFIyguiOQWVSeWcDNeleFzdWVnH0t3cwW8ZJAaZwu8QM4UcyfAVnDLFPFDPC4eKaNJYnGQGRxvA4PGvMYeMm6sZwR3be+nstDMcDMj6hcpZOykhhBuNLIoI+dgA9xPbUT0rXdGsdO2cgt7Ew61Z6uFubuJI1W70+6lYSJM4O8eDKApHAoCDwxU22p0qfV9IlgtxvXVvKl3bJkDpGQMjRgnhkgnHeB21X+z+zuq32qWnlFldW9paXEVxdyXUMkIIhYSCJOkAyzEAcOQyfHQ08oKp5M3URm7VgtwjBI7CR7K+V9Jzx7a+VnGmKUpQB9UZKjtIHtqq7jWrRtsm1LVrYXun2d7c2nksiJKqWsYkt03I5PMJU+fg8znrORagOMHs41VO1Gz+qWurXk1tZ3NxaX073Nu9rDJNuvKd9oXEYJBBzjPMY9TmkaUnkS1ibisEy2T1KC/t9YjtlkSystUnj05JfTisZQJoojxPo5IAycDA6qkdR7ZDR7jR9KZbtQl3eXDXc8fAmIbqxxxsRwyAMnvJHVUgd0jjllkYLHFG8sjHOFRFLMTjjwFUXYdj2l9OVWtxiIYBM1wIkE7xLC8oUB2jU7wViOYHVWF5Es9rdRsOcTsvcyDeU+6vlre2F6hks7qC4RcBjC+ShIyA6nzgfECvl9MsFpdSE4JjMSd7yAqAPefVUqVLzYqPeUdscfLbfWCJKzKVZSVYEMpUkMpHEEEcc1MdD2iE5js9QYCc4WGc4CzHkFk6g3Yevx9KG0r3d1MbY4Z5KE3F5RbVKi+zuumbc0+9kzMBi2mc8ZQP0bk/KHUevxHnSisGyuVctsh6MlJZQpSlVkhSlcrXNS/Jtk7oR5TMTFbDnhiOL4PUo4+OO2pRi5NRRxvCyzhbT6uZHbTbdvg42/O2U+m44iIY6h8rv4dXGL0JJJJJJJJJJySTzJNK9DVUqo7UZ8pOTyxWzZ3s9m5aPDI2BJG3otjkeHWOo1rUqU642RcJrKYQnKD3ReGZ7UahBfabbqsMiSQ3kcgLFWUBo3QgEcezq6q6myN4LnRoYScyWMj2rg89zPSRn2HHqqNaqM2Mv0ZIW/tY/GvDZjVF03UVWVt21vQtvOScKj5zFIe4E4Pc3dXmdfpYVLZWuOzY0mplKe+f2LLr7xoQRzHLnWEkkMMcs00iRwxKXlkkYKiKOsn7KwDbylyZUqJ3m2sAkEGl2Ml07tuRyT9IvSN/JwRDpD6yPCskvP3R7gB0sLC2U8Qs6wo3rV3dvaKv8iSWZcfcX/ERfEeSVUqPhtvPInyNN8u8sTc/9HovJOhOc+bje3u7lWs11+6PAN57HT7hRxIhELN7EdG9lc8rPTRJ3Y/SyU19qJWu2cYlMGq2EtrIp3ZHhDno2+nBKOkHqJ8KlMM0FxFFPBIksMqh45IzlWU9YP21GdcofEiULYz+Fmdcbai7Fpot6AcSXhSyjHaJPOkPqUH212gCSAASSQAB2mq52s1RL/UBbQsGtdPDwqynKyTkjpXHdwCj9XvqenhvmvoV6izZD7m7spfW9jZ35aKR5J7sNlSgG7HEqhSTx6z1ddbt7fz3rqXASNM9HGmd1c9ZJ5nvriaOMWQPzppT7CF/CuhXsNJpKo4ux6mecu1Fkl5eeEKUpWiKgEgggkFSGUqcEEHIII66sHQdWGpWxSUjyy3CrMOA6RTwWUDv6+/xqvq2bC9m0+6gu4uLRnDp1SRtwZD49XeB2UtqKVbHHzLK57WWjSvKCaK5hhnhbeimRZIyOtWGa9awOux8eyq617UDf6hMynMFvm3gxyKqfOf+sfdiplrl6bLTbqVTiWQeTwnlh5MjI7wMn1VXHCtPQV5zYxa+X6RSlK1RUUpSgDV1Bd6yvB2Rhv2WDVF+eQeRyDUwdBIkkZPCRGjPcGBXNRF0aN3Rxh0Yqw7CDg1keIRe6MhvTvhonuzG0C3UcOmXsmLyNQlrI5/1mNRwQk/LA4d47xx5W2WqPLeHTUfFtY7rTgcpLkrvEt+oDgd+e2osCQQQSCCCCOBBHEEGs5He4keSeR3eaQNPI5LO28w32J5k86xVRGM96NF3ylDYyeaFpVzpeki/traCfWLqOGcpcsY/zdmDeSxy/JYr1kY3jx4DhvnabR4fN1BNR0yUEhk1GxuAgI+bPbq8RHfvV0bO+02+UNY3UEygDCxtiRQOA3omw49lbJ3l4cR3cR7qzpTy3vRpQhiKUGcf98+yON78uadj+cbPs3c+6sRtPocuVsBqGpS5AEemWNy4PjNMqRAd+9XY3UzndXPburn21kN48Bk9gGT7qjmHt/JPbP3/AII5qul3WsaVJc3lpBbarCs09tHC/StHApLC2mlHBmI5kcN7lw5x7ZLVJLW/jsHcm11Bt1VPKO53co6/rY3T6uyp9c3un6eFkvrqC3UEHErDpGA57sQy59S1URk6K5aW2d16OdpLaRcq6hXLIw6wRwpyheZBxa4Eb2q5xlF8k+2m19dPik0+zfOoSqUmdD/qkbDjxH6Qjl2c+eKryjMzFmYlmYlmLEkkk5JJPHNAGYhVGXYhVA62Y4ApqqpVxwhW212PLJLpi7tja/SDv+07GtysIoxDFDEOUcaJnt3QBms69XXHbBR9jHk8tsUpSpnBSlKAJbslqBIn02RvR3ri2z80n4RB4Hj6z2VLfZVWWd09ldWt2mcwSq7AfKTk6+sE1aKMrojoco6qykcQVYZBrF1te2e5fMcplmOCH7X3O9PY2gPCKNrh8H5Uh3Fz4AH21F66OuTm41bUn6kmMK+EIEfD2GudWnp4bK0hax5k2KUpV5AUpSgBXK1OwaX84gXMmAJUXm4Hyl7+3/vPVpVdtcbY7ZEoScXlEO7e44pUnuLCzuSWkTEh/SRndb19R9YrnyaI/HorhSOoSoQf2l/yrHnorI/DyORui+zkAkEMCQw5EHBHgRxroQ63r9uAIdTvVUclaZnUeqTIodI1AZwIW7N2TH3gKRaNq80ixQ2weRt4qBLCM7oyeLMBSs6JpZlHgtjYs4izZ/fRtPjH5Sl8ejt8+3o615td2gnBWXU70qearM0an1R4FbH719p//jz/ALxa/wD6VrzaJrFvIYprYI4VWIM0J4MMjirEVRXCE3iCTf0LZuyKzPKOcxZmLMSzHiWY5Y+JPGlb66RqB5iFf1pf+UGvdNEkOOluFA6xEhJ9rkfZTcdNa+oi7tgu2cjlzrt6ZYOjLdXClWGehjbgVyMb7Dt7B/2Ny30+ytiGRC0g5SSneYfq9Q9QrbrQ0+j2PdYL2XZWIilKVpC4pSlAClKUAKsHZq5NzpNspJL2pe1bPZHxT+yRVfVKtjp/hdStTyZIblfEExt/w0nrYbqs+xdS8SIvI7SPJIxy0ju7HvYljWNKU4uCkUpSgBSlKAFKUoAV8yM4zljyUcWPgOdSLSNBiuoYry9ZjFKN+GCMlN5M4DSOOPHqAx48cCS29pZ2q7ttBDEP5NApPi3P30jbrYQe1LLL4UuXLIFHYanNgxWN24PI9C6g+twBW3oaK1/qishL6a62juGDRi7YEywqyEqWQYD8eBbFSLaK/ubHS5TZkflG+nt9K0ze6ry8bo1ccD6A3n/q1pGyt9H0/SbW0HwVkTFk+lMWXeeSTHW5yx7z3UpPWOxbWuH2dnDyo70+UbRmgEy2xkQXDQm4WLPnmINuF8dmeFcDaOC+j6PUra36e2ghc6oiH4eOFcbtxEueIUb2+MchnqrgT3OoHabp+kIn8uREwPNFvjAjx83c4VPtMkeVryc8CZI1UcwqqpIXj40hpnXU5SrWHn+DR1rmnVCcsqSyRJbS9eGG4S2uHt5o0mhlijaSOSNwGV1aPIwRXjyO6eDDmDwI9R41LNDA0vUda2eHm20QTWNGXPoWF47CWBQOqOQMB3OK7c9ta3K7txBDKv8AKorH1E8ffWnHxB/qiIPT+zK4pUl1bZ+GGGa7smZViUySwOSw3BzaNjx4dhz/AJxqtCq2NqzEXlFxeGKUpVpEUrOKMyywRKcGWWOIHGcF2C5x3V0bjQ9UgyURJ0GeMDedjtKNg+zNQlZGLxJnVFtZRy6V9ZXRmR1ZXU4ZXBVlPYQeNfKmcFdDSbtrK6eYHG9byRn1ujfhXPoCRUZRUltZ1PDyKU40qRwUpSgBSlKAFekED3M9vbpkNPIseR1KfSPqGTXnXa2dt+kup7kjhbxdGv8AOS8/YAfbVds9kHIlCO6SRMIlVIokQYREVEA5BVGAKzrFPQXwr6zIiu8jhI0VnkdjhURQWZj4DjXmn2aRwdUzPtHshbBvg7SDW9ZlTqLxxR2cLeouxFe+qDNpn5s0Z9oYVEX1DaeZpNvIY4DpMCS2cOnGI+VSaF046S56Q8nJG/6vm8GmFy8Nzp/TQuJIZkt54nXk8bsrKw8Qakuim9Zrl9itp5P9IN/5uoonqBEVWLpK4tpD86dvcqiqtml/P5Jv/vmT2T5q1tNGLSP6Tyt/bIqih5bNHxGnZOj6Qx/5j+zV1bNtrOxOoAhRNc32hXBxxdL23M8QJ7nj4eNSCo/tSBHpFpdtz07W9AvBg8sX0cJ9zmpCRgsOwke+rRQwk4o4IyCpBB4gg8CCKgWqWJsbpkXPQSZkgP0etCe1eXs7anr+i3hXL1GyW+tnh4CVcvAx+TIByPceR/6U3pbfLlz0yq2G9EIpX1ldGZHUq6MVZW4FWBwQa+VvCBu6SnSalp69QlaU+EaM/wDlU3UZKjtIFRLZ6Pev5H/2NtIfXIyqPxqT3EvQ293N/soJnHiFOPfisjWPdYoocoWI5IRdy9PdXk2c9LcTOD3FzivClK1ksLAm3nkUpXtbwtPJ0a89xn9QKj8a63jlgZ6hD5PfahDjAjuZlX9XeJX3YrWru7U25h1QygebdQxy8OW+nwbD3A+uuFVVMt9akSmsSaFKUq0iKUpQAqXaDD0WnRuR51zJJOf1SdxfcB7aiOGbzV9JiEX9ZjgVYEUawxQwr6MUaRDwRQtIa2WIqPuMULnJtp6C+FR/bO5nh2fu7a3YrdaxcWmiW2OtryQK4/ZDe2pAnoL4VG9b/O9pthNPHnJbyanrdwp6vJ4hFCf2iaxRw70VjZw2cWmqg8jjtVsNzqNuI+gwfEVFdl3lTQtR0udi0+gXeo6VIW5mO2YyxHw3TgeFTKojEht9qttrIeaNW0a01aFerpBDJZyMPE4zXUclHctvuVw7Eh36zvP6zxq4dP42Ngw+XBHJ+2N/8aptjiJj2Rk/2aufS0ZbLTEbnHZWgPiIVFLaf5m/4xBYrl7Z/wCHP2xUnZnVYUG9NKLPyeMEb8rxXcEpEak5OACT4VIA8coEkbo6PlleNgysCeYI4VEtqYLxrqC43JHtugSNSgYqjKW3lbdHDJ49/qro7MwXkNlMbhXRJphJAkgKtu7gVn3TxAY8vDPXTBgnbf0W8K16yvneKyv5UOHjtppEOM4ZVyDitLT76K/gEqDddcLNHnO4+PsPV/0q2MHtcvkRbWcHJ17T85v4hyAW6AHqEv4H1VHasIgEFSAVYFWBGQQRggiodqunNYS7yZNrISYnPyDzMbHtHV2+rhqaS/K8uQrdXj1I6WzUeEv5iPSkihU9yKXP3q3ddlEWmyr8qeWKEeGekb7PfWWiwGDTrUEYeUNcNnnmU7wz6sVzNpJ8yWdsP0cbzv8ArSHdX3D31Qv8mp/f/RY/TUcClKVriYqQbJ26z3947rlIrQLx+dLICPumo/U12Qt+jsbq5IIN1cEKe2OEbg9+9SurntqZZUsyM9q7QzWEdyo86zkBb+alwje/dNQerWmijnimhkGY5o3icdqsN01V91bS2lxcW0vpwSNGT84Dkw7iMEeNUaGzMXB/IsvjzuPGlKVoi4pSlAG5pcXTajYJ1CbpW8IgZPwFTeors7HvXs8uOENsQD9KVwPsBqVbyoDI2N2MNI36qDeP2Vka2WbMew5QsRybCEFFx2VHIgJ9udTkb/2GzFhbRj6zdGZmHsxXX0l2l03TpW9KSASN4uSxrhbTWusWFx++nRDE15aae9lqFpNE8qXdnv76OqR4O9GTvcxwHPhh8+S2yaL08rJK6jOpKIts9jZV4m/0vW7CX+bhKXAz3ZNc2Ha/XG2Pn1xtKzqEV0LNcQzC2dCV/POizv7gzukZxvDnjlsbLwa5q91a7Va6Y0l8jaz0mzhheFYIHfEly6SZO9Jjhx5HPIgLFHSu54irzwdYkkg9e+Y6vCFBGiqPkhVHgo3RVQ3cKDaGe3+R+Xui/qm+Aq4zzbxNUU8ZNzxWW5V/v/w+caUpV5hmrqPxdqn1K4+4aglneT2U6zwnj6LoT5siHmrfh2VO9R+LtU+p3H3DVeVraBKUJJil7xJNE8tLu3vYVnhPmngynG9G/WrCvSSOKVGjljSSNsbySKGU9fEHhUHs7y4sZhNCw4gCRGyUkX5rD7OypdY6lZ3ygRsEmx50MhAcH6B5EeHsqm/TyqeY9FkLFJYZugZIHADt6gO2oNf3Pld5dXA9B5CI+6NfMX3AVJNbv0tbeS2Rh5VcKUIB4xRNwZm7CeQ8SfGI0zoq2k5sqvln0oUpStAXGGOAgy7EKgHynY7qj1mrQsLVbKys7RePQQpGx+c4GWb1nJqE7NWPlepJMy5hsQJ2J5GY5Ea+ri3qHbVgVk66zMlBfIbojxuFRTavTiyx6lEvGMLDdYHNCfMc+HI+I7KldYSRxyxyRSKGjkVkdTyZWGCDSNVjqmpIulHcsFUUrf1bTpNMu3gOTE2ZLZz8uLPIntHI/wDWtCvRRkprdHozmmnhilKVICSbNRkRX8p+XPHGPBE3v+Kujq8ph029bPGRUt18ZWAPuzWvoCbumo3XJPcP7G3B9leO0cmLeyhH6Sd5T4RoFH3qyGt+px9f9Di9NR1tG+KtK+qx/jXQ41z9G+KtK+qx/jXQpG38yX3ZdHpDLc8nPb10Gcg545FKDmviKrJFRXf8KZ/6Rj/HirdPNvE/bVRXf8KZ/wCkY/x4q3jzbxNUVfM2PE+q/t/R8pSlXmOauo/F2qfU7j7hqvKsPUfi7VPqdx9w1Xla/h/wyE9R2hSlK0hccSSTzPEk8zSlKAFOPIAkkgKqjLMxOAAO09VKkuy+ldPMNTnX4CBiLQEcJJhwMngvId/6tV22KuLkyUYuTwiRaJp35NsIoWx08hM10w45lcDKg9ijCjw766dKV52UnNuT7ZoJYWEKUpUTpoappsGp2rwPhZFy8EuMmOTHPwPIj/LhXNxb3FrNLb3CFJYjhlPLuKnrB5g1atcrWdHg1SHI3Y7uJSIJSOGOfRyY47p93PuLul1PlPbLoptr3crsrqletxb3FrNLb3EbRzRnDK3YeRB5EHqNeVbSeeUJdEz0Zd3TLD6UbP8AtOzVytpHzcWMfzbZm/bkYfhXa01d3T9NHZaQe9Aaj+0LZ1ED5ltbr7cv+NZVHq1Df3G7OKyS6N8VaV9Vj/GuhXP0b4q0r6rH+NdCkLfzJfdl8ekKDmviKUHNfEVWSKiu/wCFM/8ASMf48Vbx5t4n7aqG7/hTP/SMf48Vbp5t4n7aoq7ZseJ9V/b+hSlKvMc1dR+LtU+p3H3DVeVYeo/F2qfUrj7hqvK1/D/hkJ6jtClKVpC4pSt/S9LutVnMcWUgjIFxcEZWMc91c8C56h1cz2GMpKC3S6OpNvCMtI0qbVbno/OS1iIN1KOGAeIjQ/OPuHHszY0UUUMccUSKkUaKkaLwVVUYAFeVnaWtjbxW1sgSKMcOtmY8SzHrJ6zWxWDqL3dL6D1cNiFKUpcsFKUoAUpSgDn6npVnqkQWZSsqA9DMgHSRk9XeO0fZzEC1LTL7S3K3CZQ73RTJkxSYHUeo9x9/OrNrzmhguI5IZ40kikUq6SAMrA9oNNUamVXHaKp1KfPzOLaru2tmvzbaBfZGtRXW23tUu/o9AnsiSp29nugCH0VAAQnkAMAAmoDrAkXVL/pEdC07FA6lSygBQy55imNE91jZC/iJLtG+KtK+qx/jXQrn6N8VaV9Vj/GuhSFv5kvuy+PSFBzXxFKdlVkiobsj99E/EfwkH+PFW+ebeJqHS2lqdaa68nQ3AvgBLuedjpuee3vqYHr8arhDbkvu18dZhRjjbwKUpVhQauo/F2qfU7j7hqvKsPUfi7VPqdx9w1Xla/h/wyE9R2hQkAEkgADJJ5VtWWn6hqLbtnA0i5w0reZAvjIeHqGT3VL9M2YsrMpPdkXVyuGUMuLeNvoRnme8+wU1bqIVdvkrhXKRwdJ2eu9RKT3G/b2Rwckbs045/Bg8h3n1donNvb29pDHb28SxwxjCIgwB39ue017UrGuvlc+ehuEFDoUpSqCwUpSgBSlKAFKUoAUpSgBXhcWtpdxmK5gimj+bIobB7RniDXvShNp5QGpFZQ28MUFuCkUSBI1JZsKOQyeNfTFKOrPhxrapQ+eWBpHI5gjxr5mt6vGdVEbEAA8OIAzzoOmgSd/+v+NbFeHX663IgpUZAPHrFdZw8s19AY8lJ8BW2FUDgoHgBX2uAaFxaTXNtdW4ZYzPDJDvMN7d3xjO6CPtrQs9ltItirzh7uQcfzjAiB7ol8325rvUqyNkorbF4IuKbyzFVVFVUVVVRhVUAKB2ADhWVKVWSFKUoAUpSgBSlKAP/9k=" alt="Health Doctor" style={{ width: '200px', height: '200px', float: 'left', marginRight: '20px', borderRadius: '50%' }} />
        <div className="details">
          <p style={{ fontSize: '18px', marginBottom: '10px' }}><strong>Name:</strong> Dr. John Doe</p>
          <p style={{ fontSize: '18px', marginBottom: '10px' }}><strong>Specialty:</strong> General Medicine</p>
          <p style={{ fontSize: '18px', marginBottom: '10px' }}><strong>Contact:</strong> 123-456-7890</p>
          <p style={{ fontSize: '18px', marginBottom: '10px' }}><strong>Email:</strong> drjohndoe@example.com</p>
          <p style={{ fontSize: '18px', marginBottom: '10px' }}><strong>Address:</strong> 123 Main Street, City, Country</p>
        </div>
      </div>
    </div>






</div>








      ) : (
        <ul>
          {questions.map((question) => (
            <li key={question._id}>
              <strong>{question.text}</strong>
              <div className="options">
                <div>
                  <label>
                    <input
                      type="radio"
                      name={question._id}
                      value="not-at-all"
                      onChange={() => handleAnswerChange(question._id, 'not-at-all')}
                    />
                    NOT AT ALL
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name={question._id}
                      value="several-days"
                      onChange={() => handleAnswerChange(question._id, 'several-days')}
                    />
                    SEVERAL DAYS
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name={question._id}
                      value="more-than-half-days"
                      onChange={() => handleAnswerChange(question._id, 'more-than-half-days')}
                    />
                    MORE THAN HALF THE DAYS
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name={question._id}
                      value="nearly-every-day"
                      onChange={() => handleAnswerChange(question._id, 'nearly-every-day')}
                    />
                    NEARLY EVERY DAY
                  </label>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {!assessmentResult && <button onClick={handleSubmit}>Submit</button>}
    </div>
  );
};

export default ToolQuestions;
