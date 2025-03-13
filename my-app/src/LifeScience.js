import React from 'react';
import './styles.css'; 
import LifeScienceImage1 from '../src/img/life-science-image-1.jpg';
import LifeScienceImage2 from '../src/img/life-science-image-2-research.svg';
import LifeScienceImage3 from '../src/img/life-science-image-2-advisory.svg';
import LifeScienceImage4 from '../src/img/life-science-image-3.jpg';
import LifeScienceImage5 from '../src/img/life-science-image-4.jpg';
import LifeScienceImage6 from '../src/img/life-science-image-5.jpg';

const LifeScience = () => {
  return (
    <div className="operations-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={LifeScienceImage1} alt="Life Science" className="hero-image" />
        <div className="hero-text">
          <h1>Optimizing Lives</h1>
          <h3>We help fuse science and technology for more accessible and beneficial remedies.</h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="content">
        <h1>Innovative Ecosystems for Better Health</h1>
        <p>Life sciences companies now focus on patient-centric ecosystems that accelerate innovation beyond traditional pharmaceuticals and technology.</p>
        <p>Disruptive technologies like digital twins, virtual clinical trials, digital surgery, 3D printing, blockchain, 5G, and quantum computing are shaping the future of healthcare.</p>
      </div>

      {/* Service Cards */}
      <div className="services">
      <div className="animated-card">
        <div className="service-card">
          <img src={LifeScienceImage2} alt="Improving Research Outcomes" />
          <h3>Improving Research Outcomes</h3>
          <p>Genomics-driven health research benefits from data integration and analytics technologies.</p>
        </div>
        </div>
        <div className="animated-card">

        <div className="service-card">
          <img src={LifeScienceImage3} alt="Life Sciences Advisory Services" />
          <h3>Life Sciences Advisory Services</h3>
          <p>Strategy and execution services help life sciences organizations establish responsive supply chains.</p>
        </div>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="bottom-image">
        <img src={LifeScienceImage4} alt="Life Science Growth" />
        <img src={LifeScienceImage5} alt="Life Science Growth" />
        <img src={LifeScienceImage6} alt="Life Science Growth" />
      </div>
    </div>
  );
};

export default LifeScience;
