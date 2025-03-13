import React from 'react';
import './styles.css'; 
import BlockchainImage1 from '../src/img/blockchain-image-1.jpg';
import BlockchainImage2 from '../src/img/blockchain-image-2-management.svg';
import BlockchainImage3 from '../src/img/blockchain-image-2-decentral.svg';
import BlockchainImage4 from '../src/img/blockchain-image-2-contracts.svg';
import BlockchainImage5 from '../src/img/blockchain-image-3.jpg';
import BlockchainImage6 from '../src/img/blockchain-image-4.jpg';
import BlockchainImage7 from '../src/img/blockchain-image-5.jpg';

const BlockChain = () => {
  return (
    <div className="operations-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={BlockchainImage1} alt="Blockchain" className="hero-image" />
        <div className="hero-text">
          <h1>Blockchain</h1>
          <h3>The Decentralized Driving Force</h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="content">
        <h1>Decentralized Banking</h1>
        <p>Building Trust through Secure and Transparent Transactions.</p>
      </div>

      {/* Service Cards */}
      <div className="services">
      <div className="animated-card">
        <div className="service-card">
          <img src={BlockchainImage2} alt="Blockchain for Supply Chain Management" />
          <h3>Supply Chain Management</h3>
          <p>Ensures transparency, traceability, and accountability, reducing fraud and counterfeit risks.</p>
        </div>
        </div>
        <div className="animated-card">

        <div className="service-card">
          <img src={BlockchainImage3} alt="Decentralized Identity Management" />
          <h3>Decentralized Identity</h3>
          <p>Empowers users with control over identity and personal data, enhancing security and privacy.</p>
        </div>
        </div>
        <div className="animated-card">

        <div className="service-card">
          <img src={BlockchainImage4} alt="Smart Contracts" />
          <h3>Smart Contracts</h3>
          <p>Automates contract execution, eliminating intermediaries and improving efficiency.</p>
        </div>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="bottom-image">
        <img src={BlockchainImage5} alt="Blockchain Growth" />
        <img src={BlockchainImage6} alt="Blockchain Growth" />
        <img src={BlockchainImage7} alt="Blockchain Growth" />
      </div>
    </div>
  );
};

export default BlockChain;
