import React from 'react';
import './styles.css'; 
import ManufacturingImage1 from '../src/img/manufacturing-image-1.jpg';
import ManufacturingImage2 from '../src/img/manufacturing-image-2-vehicle.svg';
import ManufacturingImage3 from '../src/img/manufacturing-image-2-equipment.svg';
import ManufacturingImage4 from '../src/img/manufacturing-image-2-strategic.svg';
import ManufacturingImage5 from '../src/img/manufacturing-image-3.jpg';
import ManufacturingImage6 from '../src/img/manufacturing-image-4.jpg';
import ManufacturingImage7 from '../src/img/manufacturing-image-5.jpg';

const Manufacturing = () => {
  return (
    <div className="operations-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={ManufacturingImage1} alt="Manufacturing" className="hero-image" />
        <div className="hero-text">
          <h1>Manufacturing</h1>
          <h3>We create ecosystems capable of monitoring, learning, and adapting to enterprise value chains.</h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="content">
        <h1>Building a Value Network</h1>
        <p>Consumers now buy experiences rather than just products. To drive adaptive innovation at scale, manufacturers must create connected, cognitive, and collaborative networks.</p>
        <p>This requires a neural approach where the industrial value chain functions like a human nervous system—continuously receiving information, interpreting its meaning, and acting accordingly in real-time.</p>
      </div>

      {/* Service Cards */}
      <div className="services">
      <div className="animated-card">
        <div className="service-card">
          <img src={ManufacturingImage2} alt="Mobility Autonomous Vehicle Solutions" />
          <h3>Mobility Autonomous Vehicle Solutions</h3>
          <p>Engineering services from start to finish for faster autonomous vehicle development.</p>
        </div>
        </div>
        <div className="animated-card">

        <div className="service-card">
          <img src={ManufacturingImage3} alt="Equipment Intelligence" />
          <h3>Equipment Intelligence</h3>
          <p>Predictive maintenance driven by ready-to-deploy machine learning models.</p>
        </div>
        </div>
        <div className="animated-card">

        <div className="service-card">
          <img src={ManufacturingImage4} alt="Strategic Cost Management" />
          <h3>Strategic Cost Management</h3>
          <p>Ready-to-use tools to increase financial resilience across the industrial value chain.</p>
        </div>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="bottom-image">
        <img src={ManufacturingImage5} alt="Manufacturing Growth"  />
        <img src={ManufacturingImage6} alt="Manufacturing Growth" />
        <img src={ManufacturingImage7} alt="Manufacturing Growth"  />
      </div>
    </div>
  );
};

export default Manufacturing;
