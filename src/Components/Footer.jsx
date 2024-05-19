import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerContent}>
        <div>
          <h3 style={footerHeading}>Contact Us</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div>
          <h3 style={footerHeading}>Follow Us</h3>
          <p>Twitter</p>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
        <div>
          <h3 style={footerHeading}>Quick Links</h3>
          <p>Home</p>
          <p>About Us</p>
          <p>Services</p>
        </div>
      </div>
      <div style={copyright}>
        <p>&copy; 2024 Your Website. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
};

const footerContent = {
  display: 'flex',
  justifyContent: 'space-around',
};

const footerHeading = {
  fontSize: '1.5rem',
  marginBottom: '10px',
};

const copyright = {
  marginTop: '20px',
};

export default Footer;
