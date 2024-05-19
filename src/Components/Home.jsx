<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button } from '@mui/material';
import toolbw from './toolbw.png';
import MLBW from './MLBW.png';
import backgroundImage from './backgroundImage.jpg'; // Import your background image

const Home = () => {
  const handleButtonClick = () => {
    // Redirect to localhost:5000/upload
    window.location.href = 'http://localhost:5000/upload';
  };

  const dashboardStyle = {
    padding: '20px',
    justifyContent: 'center',
  };

  const testOptionsContainer = {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: '20px',
  };

  const testOptionLink = {
    textDecoration: 'none',
  };

  const imageContainer = {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginBottom: '20px',
  };

  const imageStyle = {
    width: '100px',
    height: '100px',
  };

  return (
    <div style={{ 
      // backgroundImage: `url(${backgroundImage})`, // Apply the background image here
      backgroundSize: 'cover', 
      minHeight: '100vh',
      padding: '20px', // Add padding to center content within the background
      boxSizing: 'border-box', // Ensure padding is included in the element's total width and height
    }}>
      <div style={dashboardStyle}>
        {/* First Card */}
        <Card sx={{ backgroundColor: '#c2f0c2', borderRadius: '20px', margin: '30px auto', maxWidth: '770px' }}>
          <CardContent>
            <Typography variant="h4" sx={{ textAlign: 'center', color: '#20247b', marginTop: '20px', paddingBottom: '20px', fontStyle:'italic', fontFamily: 'Times New Roman' }}>
              WEB APP FOR MENTAL HEALTH ASSESSMENT
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', color: '#333', paddingBottom: '20px', fontFamily: 'Times New Roman' }}>
              Online screening is one of the quickest and easiest ways to determine whether you are experiencing symptoms of a mental health condition.
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', color: '#333', paddingBottom: '20px', fontFamily: 'Times New Roman', fontStyle: 'italic' }}>
              Mental health conditions, such as depression or anxiety, are <strong>real</strong>, <strong>common</strong>, and <strong>treatable</strong>. And <strong>recovery</strong> is possible.
            </Typography>
          </CardContent>
        </Card>

        {/* Second Card */}
        <Card sx={{ backgroundColor: '#d2f0f7', borderRadius: '20px', margin: '30px auto', maxWidth: '770px',justifyContent:'center', alignItems:'center' }}>
          <CardContent>
            <Typography variant="h4" sx={{ textAlign: 'center', color: '#007a99', marginTop: '30px', paddingBottom: '20px', fontFamily: 'Times New Roman' }}>
              Test Your Mental Health
            </Typography>
            <div style={imageContainer }>
              <img src={toolbw} alt="Tools" style={{marginRight:'45px',  width: '100px', height: '100px'}} />
              <img src={MLBW} alt="ML" style={imageStyle} />
            </div>
            <div style={testOptionsContainer}>
              <Link to="/tools" style={testOptionLink}>
                <Button variant="contained" sx={{ backgroundColor: '#1976d2', color: '#fff', borderRadius: '10px',  margin: '0 10px', minWidth: '200px', fontFamily: 'Times New Roman' }}>
                  Using Tools
                </Button>
              </Link>
              <Button variant="contained" sx={{ backgroundColor: '#1976d2', color: '#fff', borderRadius: '10px',  minWidth: '200px', fontFamily: 'Times New Roman' }} onClick={handleButtonClick}>
                Test Depression Using ML
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Third Card */}
        <Card sx={{ backgroundColor: '#f9fbe7', borderRadius: '20px', margin: '30px auto', maxWidth: '770px' }}>
          <CardContent>
            <Typography variant="h4" sx={{ textAlign: 'center', color: '#007a99', marginTop: '30px', paddingBottom: '20px', fontFamily: 'Times New Roman' }}>
              Learn about mental health conditions
            </Typography>
            <Typography variant="h6" sx={{ textAlign: 'center', color: '#333', paddingBottom: '20px', fontFamily: 'Times New Roman' }}>
              Abuse | Addiction | ADHD | Anxiety | Bipolar | Borderline | Depression | Eating Disorder | Loneliness | OCD | Postpartum Depression | Psychosis | Relationships | Self-Harm | Sleep | Suicide | Tardive Dyskinesia | Trauma & PTSD
            </Typography>
          </CardContent>
        </Card>

        {/* Fourth Card */}
        <Card sx={{ backgroundColor: '#f0f4c3', borderRadius: '20px', margin: '30px auto', maxWidth: '770px' }}>
          <CardContent>
            <Typography variant="h4" sx={{ textAlign: 'center', color: '#007a99', marginTop: '30px', paddingBottom: '20px', fontFamily: 'Times New Roman' }}>
              Popular Mental Health Articles
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', color: '#333', fontFamily: 'Times New Roman' }}>
              <a href=''>Am I depressed or just sad?</a><br/><br/>
              <a href=''>I don't want to live, but I don't want to die.</a><br/><br/>
              <a href=''>Need to talk to someone? (Warmlines)</a><br/><br/>
              <a href=''>I hate myself</a><br/><br/>
              <a href=''>I think about death all the time</a><br/><br/>
              <a href=''>What mental illness do I have?</a><br/><br/>
              <a href=''>Does depression go away on its own?</a><br/><br/>
              <a href=''>I can't get over things that happened in the past</a><br/><br/>
            </Typography>
          </CardContent>
        </Card>

     
      </div>
    </div>
  );
};

export default Home;

=======
import React from "react";
const Home = () =>{
    return <h1>hiii</h1>
}
export default Home;
>>>>>>> ee5a232c4ee0a9005f8499043542f3b555b23b65
