import React from 'react';
import './styles.css'; 
import SustainabilityImage1 from '../src/img/sustainability-image-1.jpg';
import SustainabilityImage2 from '../src/img/sustainability-image-2-green.svg';
import SustainabilityImage3 from '../src/img/sustainability-image-2-sustainable.svg';
import SustainabilityImage4 from '../src/img/sustainability-image-2-circular.svg';
import SustainabilityImage5 from '../src/img/sustainability-image-3.jpg';
import SustainabilityImage6 from '../src/img/sustainability-image-4.jpg';
import SustainabilityImage7 from '../src/img/sustainability-image-5.jpg';

const Sustainability = () => {
  return (
    <div className="operations-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={SustainabilityImage1} alt="Sustainability" className="hero-image" />
        <div className="hero-text">
          <h1>Building a sustainable future together.</h1>
          <h3>Through collective action and shared responsibility, let's forge a path towards a sustainable future for all.</h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="content">
        <h1>Sustainable Supply Chain Management</h1>
        <p>We focus on reducing the environmental impact of our institution's operations, such as energy and water use, waste management, and sustainable transportation options.</p>
      </div>

      {/* Service Cards */}
      <div className="services">
      <div className="animated-card">
        <div className="service-card">
          <img src={SustainabilityImage2} alt="Green Energy" />
          <h3>Green Energy</h3>
          <p>We encourage the development and implementation of sustainable solutions in various industries, such as renewable energy, green buildings, and sustainable agriculture.</p>
        </div>
        </div>
        <div className="animated-card">

        <div className="service-card">
          <img src={SustainabilityImage3} alt="Sustainable Water Management" />
          <h3>Sustainable Water Management</h3>
          <p>We focus on designing systems that minimize waste and maximize resource efficiency by reusing and recycling materials.</p>
        </div>
        </div>
        <div className="animated-card">

        <div className="service-card">
          <img src={SustainabilityImage4} alt="Circular Economy" />
          <h3>Circular Economy</h3>
          <p>We focus on developing and implementing sustainable waste management strategies, reducing waste generation, promoting recycling and reuse, and minimizing waste sent to landfills or incineration.</p>
        </div>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="bottom-image">
        <img src={SustainabilityImage5} alt="Sustainability Growth" />
        <img src={SustainabilityImage6} alt="Sustainability Growth" />
        <img src={SustainabilityImage7} alt="Sustainability Growth" />
      </div>
    </div>
  );
};

export default Sustainability;