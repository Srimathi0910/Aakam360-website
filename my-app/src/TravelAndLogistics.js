import React from 'react';
import './styles.css'; 
import TravelImage1 from '../src/img/travel-logistics-image-1.jpg';
import TravelImage2 from '../src/img/travel-logistics-image-2-personalized.svg';
import TravelImage3 from '../src/img/travel-logistics-image-3.jpg';
import TravelImage4 from '../src/img/travel-logistics-image-4.jpg';
import TravelImage5 from '../src/img/travel-logistics-image-5.jpg';

const TravelAndLogistics = () => {
  return (
    <div className="operations-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={TravelImage1} alt="Travel and Logistics" className="hero-image" />
        <div className="hero-text">
          <h1>Travel and Logistics</h1>
          <h3>We assist you in designing seamless, flexible, and safe journeys.</h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="content">
        <h1>Revolutionizing Travel Experiences</h1>
        <p>Travel and logistics businesses are building robust ecosystems that enable safe, adaptable, and convenient travel for both people and packages.</p>
        <p>They provide new and personalized services by forming strategic alliances and developing digital marketplaces powered by technology.</p>
      </div>

      {/* Service Cards */}
      <div className="services">
      <div className="animated-card">
        <div className="service-card">
          <img src={TravelImage2} alt="Personalizing customer experiences" />
          <h3>Personalizing Customer Experiences</h3>
          <p>An AI-powered pricing engine that helps bundle the right services based on consumer preferences.</p>
        </div>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="bottom-image">
        <img src={TravelImage3} alt="Travel Logistics Growth"/>
        <img src={TravelImage4} alt="Travel Logistics Growth"/>
        <img src={TravelImage5} alt="Travel Logistics Growth"/>
      </div>
    </div>
  );
};

export default TravelAndLogistics;
