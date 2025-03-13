import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import InternshipImage from "../src/img/ApplyInternship-image.jpg";

const ApplyInternship = () => {
    return (
        <div className="apply-container">
            {/* Background Image */}
            <div className="background-container">
                <img src={InternshipImage} alt="Internship" className="background-image" />
                <div className="overlay" />
            </div>
            
            {/* Content */}
            <div className="content-box">
                <h1 className="title">Apply for Internship</h1>
                <p className="internship-description">
                    Gain hands-on experience, work on real-world projects, and learn from industry experts.
                </p>
                <ul className="benefits-list">
                    <li>✅ Work on live projects</li>
                    <li>✅ Mentorship from experts</li>
                    <li>✅ Certificate upon completion</li>
                </ul>
                <button className="apply-button-internship"><Link to="/apply-internship-form" className="clickable-div">Apply Now</Link></button>
            </div>
        </div>
    );
};

export default ApplyInternship;
