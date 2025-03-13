import React from 'react';
import './styles.css'; 
import PublicServicesImage1 from '../src/img/public-services-image-1.jpg';
import PublicServicesImage2 from '../src/img/public-services-image-2-urban.svg';
import PublicServicesImage3 from '../src/img/public-services-image-2-building.svg';
import PublicServicesImage4 from '../src/img/public-services-image-3.jpg';
import PublicServicesImage5 from '../src/img/public-services-image-4.jpg';
import PublicServicesImage6 from '../src/img/public-services-image-5.jpg';

const PublicServices = () => {
  return (
    <div className="operations-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={PublicServicesImage1} alt="Public Services" className="hero-image"  />
        <div className="hero-text">
          <h1>Public Services</h1>
          <h3>Through innovative, open, and durable public services, we promote advancement.</h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="content">
        <h1>Citizens at the Centre of Governance</h1>
        <p>The foundation of a healthy society is adaptive, resilient, and inclusive public services.</p>
        <p>From drinking water and sanitation to licenses and passports, government organizations handle everything. Legacy systems, manual processes, and rising public expectations hinder effective governance and citizen empowerment.</p>
        <p>We drive digital innovation to help governments focus on delivering an outstanding citizen experience.</p>
      </div>

      {/* Service Cards */}
      <div className="services">
      <div className="animated-card">
        <div className="service-card">
          <img src={PublicServicesImage2} alt="Urban Local Body Solution" />
          <h3>Urban Local Body Solution</h3>
          <p>A digital platform that enhances governance and enables effective service delivery to residents.</p>
        </div>
        </div>
        <div className="animated-card">

        <div className="service-card">
          <img src={PublicServicesImage3} alt="Building Resilient Infrastructure" />
          <h3>Building Resilient Infrastructure</h3>
          <p>Pre-configured business solutions and accelerators to fast-track ERP transformation.</p>
        </div>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="bottom-image">
        <img src={PublicServicesImage4} alt="Public Services Growth"  />
        <img src={PublicServicesImage5} alt="Public Services Growth"  />
        <img src={PublicServicesImage6} alt="Public Services Growth"  />
      </div>
    </div>
  );
};

export default PublicServices;
