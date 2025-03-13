import React from 'react';
import './styles.css'; 
import CloudImage1 from '../src/img/cloud-image-1.jpg';
import CloudImage2 from '../src/img/cloud-image-2-edge.svg';
import CloudImage3 from '../src/img/cloud-image-2-edge.svg';
import CloudImage4 from '../src/img/cloud-image-2-hybrid.svg';
import CloudImage5 from '../src/img/cloud-image-3.jpg';
import CloudImage6 from '../src/img/cloud-image-4.jpg';
import CloudImage7 from '../src/img/cloud-image-5.jpg';

const Cloud = () => {
  return (
    <div className="operations-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={CloudImage1} alt="Cloud" className="hero-image" />
        <div className="hero-text">
          <h1>Cloud</h1>
          <h3>Dynamic, Scalable, Accessible</h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="content">
        <h1>Strategy to Scale</h1>
        <p>Your business's mission and growth trajectory are unique. You need a specific cloud strategy to leverage cutting-edge technologies, scale efficiently, and embrace new opportunities.</p>
        <p>We assist you in achieving transformation, adaptation, and innovation for a reimagined future by driving business value and fostering resilience.</p>
      </div>

      {/* Service Cards */}
      <div className="services">
      <div className="animated-card">
        <div className="service-card">
          <img src={CloudImage2} alt="Manage complexity and interoperability" />
          <h3>Manage Complexity & Interoperability</h3>
          <p>The cloud offers flexibility and scalability but also presents challenges in managing the environment efficiently.</p>
        </div>
        </div>
        <div className="animated-card">

        <div className="service-card">
          <img src={CloudImage3} alt="Edge computing" />
          <h3>Edge Computing</h3>
          <p>Edge computing enables real-time data processing, allowing devices to make instant data-based decisions.</p>
        </div>
        </div>
        <div className="animated-card">

        <div className="service-card">
          <img src={CloudImage4} alt="Hybrid cloud" />
          <h3>Hybrid Cloud</h3>
          <p>Hybrid cloud allows enterprises to continue digital transformation while ensuring compliance with evolving regulatory requirements.</p>
        </div>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="bottom-image">
        <img src={CloudImage5} alt="Cloud Growth"  />
        <img src={CloudImage6} alt="Cloud Growth"  />
        <img src={CloudImage7} alt="Cloud Growth"  />
      </div>
    </div>
  );
};

export default Cloud;
