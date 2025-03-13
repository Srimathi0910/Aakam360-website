import React from 'react';
import './styles.css'; 
import HealthcareImage1 from '../src/img/Healthcare-image-1.jpg';
import HealthcareImage2 from '../src/img/Healthcare-image-2-patient.svg';
import HealthcareImage3 from '../src/img/Healthcare-image-2-HCP.svg';
import HealthcareImage4 from '../src/img/Healthcare-image-3.jpg';
import HealthcareImage5 from '../src/img/Healthcare-image-4.jpg';
import HealthcareImage6 from '../src/img/Healthcare-image-5.jpg';

const HealthCare = () => {
  return (
    <div className="operations-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={HealthcareImage1} alt="Healthcare" className="hero-image fade-in" />
        <div className="hero-text">
          <h1>Patient-Driven Healthcare</h1>
          <h3>We support your efforts to realize patient-driven, intelligent, and connected healthcare.</h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="content">
        <h1>Providing High-Quality Care</h1>
        <p>Patients seek affordable, high-quality care whenever and wherever they need it. This demand for a connected, always-on, patient-centric delivery model is driving healthcare providers to rewire their businesses and build cross-industry ecosystems.</p>
        <p>These solutions offer intelligent, connected, and personalized care, ensuring the patient remains the central focus of the healthcare system.</p>
      </div>

      {/* Service Cards */}
      <div className="services">
      <div className="animated-card">
        <div className="service-card">
          <img src={HealthcareImage2} alt="Patient Care Platform" />
          <h3>Patient Care Platform</h3>
          <p>An AI-powered mobile solution providing on-demand access to patient data from various sources.</p>
        </div>
        </div>
        <div className="animated-card">

        <div className="service-card">
          <img src={HealthcareImage3} alt="HCP Engagement" />
          <h3>HCP Engagement</h3>
          <p>Healthcare professionals can collaborate and share critical information using data-driven analytics.</p>
        </div>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="bottom-image">
        <img src={HealthcareImage4} alt="Healthcare Growth"  />
        <img src={HealthcareImage5} alt="Healthcare Growth"  />
        <img src={HealthcareImage6} alt="Healthcare Growth"  />
      </div>
    </div>
  );
};

export default HealthCare;
