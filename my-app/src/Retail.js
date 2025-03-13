import React from 'react';
import './styles.css'; 
import RetailImage1 from '../src/img/retail-image-1.jpg';
import RetailImage2 from '../src/img/retail-image-2-models.svg';
import RetailImage3 from '../src/img/retail-image-2-sustainability.svg';
import RetailImage4 from '../src/img/retail-image-3.jpg';
import RetailImage5 from '../src/img/retail-image-4.jpg';
import RetailImage6 from '../src/img/retail-image-5.jpg';

const Retail = () => {
  return (
    <div className="operations-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={RetailImage1} alt="Retail" className="hero-image" />
        <div className="hero-text">
          <h1>Retail</h1>
          <h3>We assist you in evolving into a dynamic and productive business.</h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="content">
        <h1>Leading the Retail Industry's Future</h1>
        <p>Retailers are considering a wide range of options as customers demand convenient, immersive, and unified shopping experiences.</p>
        <p>We collaborate with major retailers to explore new growth opportunities and harness the potential of cutting-edge technologies.</p>
        <p>Additionally, inclusive and sustainable banking practices promote holistic growth.</p>
      </div>

      {/* Service Cards */}
      <div className="services">
      <div className="animated-card">
        <div className="service-card">
          <img src={RetailImage2} alt="Adopting New Business Models" />
          <h3>Adopting New Business Models</h3>
          <p>An AI-powered store optimization suite for creating the store of the future – lean, intelligent, and automated.</p>
        </div>
      </div>
      <div className="animated-card">
        <div className="service-card">
          <img src={RetailImage3} alt="Ensuring Sustainability" />
          <h3>Ensuring Sustainability</h3>
          <p>An ecosystem-led platform for innovation at speed and scale.</p>
        </div>
      </div>
      </div>

      {/* Bottom Image */}
      <div className="bottom-image">
        <img src={RetailImage4} alt="Retail Growth"  />
        <img src={RetailImage5} alt="Retail Growth"  />
        <img src={RetailImage6} alt="Retail Growth"  />
      </div>
    </div>
  );
};

export default Retail;
