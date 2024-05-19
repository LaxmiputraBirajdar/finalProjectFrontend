<<<<<<< HEAD
import React from 'react';
import aboutImage from './about.jpg';
import './About.css';

const About = () => {
    return (
        <div className="container-fluid py-5 bg-cream">
            <div className="container">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-5 mb-5 mb-lg-0">
                        <img className="img-fluid rounded smaller-image" src={aboutImage} alt="About Us" />
                    </div>
                    <div className="col-lg-7">
                        <div className="mb-4">
                            <h5 className="d-inline-block text-blue-green text-uppercase border-bottom border-5">About Us</h5>
                            <h1 className="display-4 text-blue">Best Medical Care For Yourself and Your Family</h1>
                        </div>
                        <p className="text-muted">
                            <i className="fa fa-heart"></i> At our healthcare center, we are dedicated to providing exceptional medical services tailored to meet the unique needs of every individual. With a team of highly skilled professionals and state-of-the-art facilities, we are committed to delivering compassionate care, innovative treatments, and outstanding patient experiences. Our mission is to empower our community to lead healthier lives by offering comprehensive medical solutions and promoting wellness at every stage. With a focus on integrity, excellence, and patient-centered care, we strive to be the trusted healthcare provider you can rely on for all your medical needs. Welcome to our center, where your health is our top priority.
                        </p>
                        <div className="row g-3 pt-3">
                            {/* Additional content can be added here if needed */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
=======
import React from "react";

const About = () => {
    return <h1>About Page</h1>;
}

export default About;
>>>>>>> ee5a232c4ee0a9005f8499043542f3b555b23b65
