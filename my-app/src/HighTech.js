import React from 'react';
import './styles.css'; 
import HighTechImage1 from '../src/img/high-tech-image-1.jpg';
import HighTechImage2 from '../src/img/high-tech-image-2-customer-experience.svg';
import HighTechImage3 from '../src/img/high-tech-image-2-cloud.svg';
import HighTechImage4 from '../src/img/high-tech-image-2-vulnerability.svg';
import HighTechImage5 from '../src/img/high-tech-image-3.jpg';
import HighTechImage6 from '../src/img/high-tech-image-4.jpg';
import HighTechImage7 from '../src/img/high-tech-image-5.jpg';

const HighTech = () => {
  return (
    <div className="operations-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={HighTechImage1} alt="High Tech" className="hero-image fade-in" />
        <div className="hero-text">
          <h1>Rapid Innovation</h1>
          <h3>We create cutting-edge technologies and life-changing experiences for a better society.</h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="content">
        <h1>Strategic Vision</h1>
        <p>The technology sector is the driving force behind business transformations across industries.</p>
        <p>This diverse industry—ranging from semiconductor manufacturers to industrial electronics and software companies—demands digital maturity and resilient supply chains.</p>
      </div>

      {/* Service Cards */}
      <div className="services">
      <div className="animated-card">
        <div className="service-card">
          <img src={HighTechImage2} alt="Customer Experience Transformation" />
          <h3>Customer Experience Transformation</h3>
          <p>Enhance CX strategy, leverage customer insights, and drive marketing transformation.</p>
        </div>
        </div>
        <div className="animated-card">

        <div className="service-card ">
          <img src={HighTechImage3} alt="Cloud Solutions" />
          <h3>Cloud Solutions</h3>
          <p>Plan, develop, implement, and manage cloud-based services with expert strategies.</p>
        </div>
        </div>
        <div className="animated-card">

        <div className="service-card">
          <img src={HighTechImage4} alt="Enterprise Vulnerability" />
          <h3>Enterprise Vulnerability Management</h3>
          <p>Boost agility with proactive risk management and scalable security measures.</p>
        </div>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="bottom-image">
        <img src={HighTechImage5} alt="High-Tech Growth"  />
        <img src={HighTechImage6} alt="High-Tech Growth"  />
        <img src={HighTechImage7} alt="High-Tech Growth"  />
      </div>
    </div>
  );
};

export default HighTech;
