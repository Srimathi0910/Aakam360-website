import React from 'react';
import './styles.css'; 
import EnergyImage1 from '../src/img/EnergyResourse-image-1.jpg';
import EnergyImage2 from '../src/img/EnergyResourse-image-2-asset.svg';
import EnergyImage3 from '../src/img/EnergyResourse-image-2-workspace.svg';
import EnergyImage4 from '../src/img/EnergyResourse-image-2-ecosystem.svg';
import EnergyImage5 from '../src/img/EnergyResourse-image-3.jpg';
import EnergyImage6 from '../src/img/EnergyResourse-image-4.jpg';
import EnergyImage7 from '../src/img/EnergyResourse-image-5.jpg';

const EnergyResource = () => {
  return (
    <div className="operations-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={EnergyImage1} alt="Energy Resource" className="hero-image fade-in" />
        <div className="hero-text">
          <h1>Beyond Net-Zero</h1>
          <h3>We assist you in building a smart, secure, and sustainable future.</h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="content">
        <h1>Transition to the Zero State</h1>
        <p>Energy, resource, and utility companies must redesign their operational strategies and embrace an ecosystem perspective to foster a cleaner and greener future.</p>
        <p>A robust digital core that offers security and continuity will serve as the foundation of these future businesses, while the company itself drives innovation throughout the value chain.</p>
      </div>

      {/* Service Cards */}
      <div className="services">
      <div className="animated-card">
        <div className="service-card">
          <img src={EnergyImage2} alt="Field Asset Management" />
          <h3>Managing Field Assets</h3>
          <p>Automating and standardizing field asset inspection using AI and ML.</p>
        </div>
        </div>

        <div className="animated-card">
        <div className="service-card">
          <img src={EnergyImage3} alt="Empowering Field Workspace" />
          <h3>Empowering Field Workspace</h3>
          <p>Increase field workers' productivity while maintaining safety using AI and analytics-based solutions.</p>
        </div>
        </div>
        <div className="animated-card">

        <div className="service-card">
          <img src={EnergyImage4} alt="Energy Value Ecosystem" />
          <h3>Energy Value Ecosystem</h3>
          <p>A platform enabling utilities to create customized energy services in cooperation with businesses, vendors, and clients.</p>
        </div>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="bottom-image">
        <img src={EnergyImage5} alt="Energy Growth"  />
        <img src={EnergyImage6} alt="Energy Growth"  />
        <img src={EnergyImage7} alt="Energy Growth" />
        
      </div>
    </div>
  );
};

export default EnergyResource;
