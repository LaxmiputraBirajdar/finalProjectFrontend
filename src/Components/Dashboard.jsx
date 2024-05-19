import React from 'react';
import { Link } from 'react-router-dom';
import addIcon from './add.png'; // Import your add icon here

const Dashboard = () => {
  return (
    <div style={styles.dashboard}>
      <div style={styles.mainCard}>
        <h1 style={styles.heading}>Take a Mental Health Test</h1>
        <p style={styles.text}>
          Online screening is one of the quickest and easiest ways to determine whether you are experiencing symptoms of a mental health condition. Mental health conditions, such as depression or anxiety, are real, common, and treatable. And recovery is possible.
        </p>
      </div>

      <div style={styles.bottomCardContainer}>
        <Link to="/tools/depression/questions" style={styles.link}>
          <div style={{ ...styles.bottomCard, backgroundColor: '#81c784' }}>
            <strong>DEPRESSION TEST</strong>
          </div>
        </Link>

         {/* Add space between top and bottom buttons */}

        <Link to="/tools/anxiety/questions" style={styles.link}>
          <div style={{ ...styles.bottomCard, backgroundColor: '#ff8a65' }}>
            <strong>Anxiety Test</strong>
          </div>
        </Link>

        <Link to="/tools/adhd/questions" style={styles.link}>
          <div style={{ ...styles.bottomCard, backgroundColor: '#ba68c8' }}>
            <strong>ADHD Test</strong>
          </div>
        </Link>
       

        

        <Link to="/tools/Eating disorder/questions" style={styles.link}>
          <div style={{ ...styles.bottomCard, backgroundColor: '#64b5f6' }}>
            <strong>Eating Disorder</strong>
          </div>
        </Link>

        <Link to="/tools/adhd/questions" style={styles.link}>
          <div style={{ ...styles.bottomCard, backgroundColor: '#90a4ae' }}>
            <strong>PHQ-9</strong>
          </div>
        </Link>

        <Link to="/tools/adhd/questions" style={styles.link}>
          <div style={{ ...styles.bottomCard, backgroundColor: '#f06292' }}>
            <strong>GAD-7</strong>
          </div>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  dashboard: {
    padding: '20px',
    textAlign: 'center',
    maxWidth: '900px',
    margin: '0 auto',
  },
  mainCard: {
    backgroundColor: '#e3f8f8',
    borderRadius: '20px',
    padding: '50px',
    margin: '30px auto',
    maxWidth: '600px',
  },
  heading: {
    color: '#237591',
    fontSize: '40px',
    marginBottom: '20px',
  },
  text: {
    color: 'grey',
    fontSize: '18px',
    lineHeight: '1.6',
  },
  bottomCardContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '30px',
  },
  bottomCard: {
    borderRadius: '30px',
    width: '250px', // Increased width of the button
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px',
    cursor: 'pointer',
    color: 'white',
    fontWeight: 'bold',
  },
  link: {
    textDecoration: 'none',
  },
};

export default Dashboard;
