import React from 'react';
import './styles.css'; 
import CommunicationImage1 from '../src/img/CommunicationMedia-image-1.jpg';
import CommunicationImage2 from '../src/img/CommunicationMedia-image-2-streams.svg';
import CommunicationImage3 from '../src/img/CommunicationMedia-image-2-prompt.svg';
import CommunicationImage4 from '../src/img/CommunicationMedia-image-2-strategic.svg';
import CommunicationImage5 from '../src/img/CommunicationMedia-image-3.jpg';
import CommunicationImage6 from '../src/img/CommunicationMedia-image-4.jpg';

import CommunicationImage7 from '../src/img/CommunicationMedia-image-5.jpg';


const CommunicationMedia = () => {
  return (
    <div className="operations-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={CommunicationImage1} alt="Communication Media" className="hero-image fade-in" />
        <div className="hero-text">
          <h1>Building Multimedia Experiences</h1>
          <h3>We assist you in revealing value beyond boundaries.</h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="content">
        <h1>Bring Passion to Innovation</h1>
        <p>The way people consume data, material, and information has changed significantly as a result of the digital revolution. Communication and media service providers must evolve to remain competitive in today's market.</p>
        <p>Telecom firms must ensure secure communications while creating ecosystems for bundled services. Media companies must captivate audiences with accessible, compelling content. Information service providers must extract valuable insights from data.</p>
      </div>

      {/* Service Cards */}
      <div className="services">
        <div className="animated-card">
        <div className="service-card">
          <img src={CommunicationImage2} alt="Revenue Streams" />
          <h3>Opening Up New Revenue Streams</h3>
          <p>Scalable deployment of digital services is enabled through cloud-based subscription platforms.</p>
        </div>
        </div>

        <div className="animated-card">
        <div className="service-card">
          <img src={CommunicationImage3} alt="Efficient Decision-Making" />
          <h3>Ensuring Prompt and Efficient Decision-Making</h3>
          <p>A virtual environment using digital twins to help businesses plan, test, and execute decisions.</p>
        </div>
        </div>
        <div className="animated-card">
        <div className="service-card">
          <img src={CommunicationImage4} alt="Strategic Systems" />
          <h3>Strategic Systems</h3>
          <p>An intelligent system leveraging existing tech capabilities for purpose-driven customer engagement.</p>
        </div>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="bottom-image">
        <img src={CommunicationImage5} alt="Communication Growth"  />
        <img src={CommunicationImage6} alt="Communication Growth"  />
        <img src={CommunicationImage7} alt="Communication Growth"  />
      </div>
    </div>
  );
};

export default CommunicationMedia;
