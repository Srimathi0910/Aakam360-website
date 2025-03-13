import React from 'react';
import './styles.css'; 
import MetaverseImage1 from '../src/img/metaverse-image-1.jpg';
import MetaverseImage2 from '../src/img/metaverse-image-2-shopping.svg';
import MetaverseImage3 from '../src/img/metaverse-image-2-safe.svg';
import MetaverseImage4 from '../src/img/metaverse-image-2-led.svg';
import MetaverseImage5 from '../src/img/metaverse-image-3.jpg';
import MetaverseImage6 from '../src/img/metaverse-image-4.jpg';
import MetaverseImage7 from '../src/img/metaverse-image-5.jpg';

const Metaverse = () => {
  return (
    <div className="operations-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={MetaverseImage1} alt="Metaverse" className="hero-image" />
        <div className="hero-text">
          <h1>Metaverse</h1>
          <h3>Step into a Virtual World</h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="content">
        <h1>Experience Beyond the Physical</h1>
        <p>The Metaverse is an ever-expanding virtual space where businesses and individuals interact, collaborate, and innovate.</p>
        <p>From shopping to data security, explore the vast potential of the Metaverse and unlock new opportunities.</p>
      </div>

      {/* Service Cards */}
      <div className="services">
      <div className="animated-card">
        <div className="service-card">
          <img src={MetaverseImage2} alt="Metaverse shopping" />
          <h3>Metaverse Shopping</h3>
          <p>Take your customers on a virtual tour and showcase products and services right from their homes.</p>
        </div>
        </div>
        <div className="animated-card">

        <div className="service-card">
          <img src={MetaverseImage3} alt="Data safe" />
          <h3>Data Security</h3>
          <p>Metaverse platforms use AR/VR devices that collect biometric data, secured through advanced encryption and transmitted over 5G networks.</p>
        </div>
        </div>
        <div className="animated-card">

        <div className="service-card">
          <img src={MetaverseImage4} alt="Metaverse-led disruption" />
          <h3>Metaverse-Led Disruption</h3>
          <p>Virtual platforms provide engaging, location-independent experiences that redefine how we interact with the digital world.</p>
        </div>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="bottom-image">
        <img src={MetaverseImage5} alt="Metaverse Growth" />
        <img src={MetaverseImage6} alt="Metaverse Growth" />
        <img src={MetaverseImage7} alt="Metaverse Growth" />

        

      </div>
    </div>
  );
};

export default Metaverse;
