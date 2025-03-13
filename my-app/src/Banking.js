import React from 'react';
import './styles.css'; 
import BankingImage1 from '../src/img/banking-image-1.webp';
import BankingImage2 from '../src/img/banking-image-1 customer.svg';
import BankingImage3 from '../src/img/banking-image-1 cognitive.svg';
import BankingImage4 from '../src/img/banking-image-1 cyber.svg';
import BankingImage5 from '../src/img/Banking-image-creditcard.jpg';
import BankingImage6 from'../src/img/Banking-image-customer.jpg';
import BankingImage7 from'../src/img/Banking-image-manusing.jpg';

const Banking = () => {
  return (
    <div className="operations-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={BankingImage1} alt="Banking" className="hero-image"/>
        <div className="hero-text">
          <h1>Banks go boundaryless</h1>
          <h3>With a safe, open-ended strategy, we assist you in supporting overall growth.</h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="content">
        <h1>Banking on Innovation</h1>
        <p>Banking is expanding outside of banks. Businesses are straying from their conventional lines to develop cross-industry ecosystems and add value at every stage of the customer experience as financial services are integrated into other industries.</p>
        <p>This boundaryless model aids in the creation of novel offerings and experiences when supported by the appropriate intelligence.</p>
        <p>Additionally, inclusive and sustainable banking practices promote holistic growth.</p>
      </div>

      {/* Service Cards */}
      <div className="services">
  <div className="animated-card">
    <div className="service-card">
      <img src={BankingImage2} alt="Customer Service" />
      <h3>Suite for Customer Service Management</h3>
      <p>To rethink client interactions across major service domains, a data-driven, automation-led suite is being used.</p>
    </div>
  </div>
  <div className="animated-card">
    <div className="service-card">
      <img src={BankingImage3} alt="Risk & Compliance" />
      <h3>Risk and Compliance Cognitive Assurance</h3>
      <p>A collection of techniques to support intelligent interventions in risk information and control assurance.</p>
    </div>
  </div>
  <div className="animated-card">
    <div className="service-card">
      <img src={BankingImage4} alt="Cyber Security" />
      <h3>Platform for Cyber Vigilance</h3>
      <p>Analytics-based managed detection and response services to proactively combat cyber threats.</p>
    </div>
  </div>
</div>


      {/* Bottom Image */}
      <div className="bottom-image">
        <img src={BankingImage5} alt="Banking Growth" />
        <img src={BankingImage6} alt="Banking Growth" />
        <img src={BankingImage7} alt="Banking Growth" />
      </div>
    </div>
  );
};

export default Banking;
