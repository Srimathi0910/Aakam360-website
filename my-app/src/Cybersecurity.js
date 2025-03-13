import React from 'react';
import './styles.css'; 
import CybersecurityImage1 from '../src/img/cybersecurity-image-1.jpg';
import CybersecurityImage2 from '../src/img/cybersecurity-image-2-secure.svg';
import CybersecurityImage3 from '../src/img/cybersecurity-image-2-incident.svg';
import CybersecurityImage4 from '../src/img/cybersecurity-image-2-emerging.svg';
import CybersecurityImage5 from '../src/img/cybersecurity-image-3.jpg';
import CybersecurityImage6 from '../src/img/cybersecurity-image-4.jpg';
import CybersecurityImage7 from '../src/img/cybersecurity-image-5.jpg';

const Cybersecurity = () => {
  return (
    <div className="operations-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={CybersecurityImage1} alt="Cloud" className="hero-image" />
        <div className="hero-text">
          <h1>Securing the Future</h1>
          <h3>Exploring emerging cybersecurity threats and developing strategies to protect against them.</h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="content">
        <h1>Cybersecurity Education and Training</h1>
        <p>We provide cybersecurity education and training to all employees, so they can be equipped with the skills and knowledge necessary to identify and prevent cyberattacks.</p>
      </div>

      {/* Service Cards */}
      <div className="services">
      <div className="animated-card">
        <div className="service-card">
          <img src={CybersecurityImage2} alt="Secure Digital Infrastructure" />
          <h3>Secure Digital Infrastructure</h3>
          <p>We focus on building and maintaining secure digital infrastructure that can support your organization's operations and growth, while also protecting against cyber threats.</p>
        </div>
        </div>
        <div className="animated-card">

        <div className="service-card">
          <img src={CybersecurityImage3} alt="Incident Response and Business Continuity Planning" />
          <h3>Incident Response and Business Continuity Planning</h3>
          <p>We focus on developing and implementing plans and procedures to respond to cybersecurity incidents and ensure continuity of operations in the event of a breach or attack.</p>
        </div>
        </div>
        <div className="animated-card">

        <div className="service-card">
          <img src={CybersecurityImage4} alt="Emerging Threats and Technologies" />
          <h3>Emerging Threats and Technologies</h3>
          <p>We focus on monitoring and staying up-to-date with the latest cybersecurity threats and technologies, so your organization can stay ahead of potential risks and be proactive in implementing security measures.</p>
        </div>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="bottom-image">
        <img src={CybersecurityImage5} alt="Cybersecurity Growth"  />
        <img src={CybersecurityImage6} alt="Cybersecurity Growth"  />
        <img src={CybersecurityImage7} alt="Cybersecurity Growth"  />
      </div>
    </div>
  );
};


export default Cybersecurity;
