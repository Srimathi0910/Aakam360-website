import React from 'react';
import './styles.css';
import ConsumerImage1 from '../src/img/consumer-main-image.jpg';
import ConsumerImage2 from '../src/img/consumerGoods-image-2-smart.svg';
import ConsumerImage3 from '../src/img/consumerGoods-image-2-solution.svg';
import ConsumerImage4 from '../src/img/consumerGoods-image-2-enterprise.svg';
import ConsumerImage5 from '../src/img/consumer-image-store.jpg';
import ConsumerImage6 from'../src/img/consumer-image-distribute.jpg';
import ConsumerImage7 from'../src/img/consumer-image-checking.jpg'

const ConsumerGoodsDistribution = () => {
  return (
    <div className="operations-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={ConsumerImage1} alt="Consumer Goods" className="hero-image" />
        <div className="hero-text">
          <h1>Modern Consumer Ecosystems</h1>
          <h3>We work with you to meet sustainable consumption targets and multichannel demand.</h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="content">
        <h1>Establishing a Connection with Mindful Consumers</h1>
        <p>Conscious customers demand more from convenience. They demand ethical and sustainable sourcing, production, and distribution of the goods they purchase.</p>
        <p>This means that consumer products businesses must adapt their strategies to suit these preferences while enabling widespread commerce.</p>
        <p>Massive technological investments are being driven by this paradigm shift in order to personalize experiences, strengthen ethical supply chains, and expedite consumer-first innovation.</p>
      </div>

      {/* Service Cards */}
      <div className="services">
            <div className="animated-card">
              <div className="service-card">
                <img src={ConsumerImage2} alt="Smart Prediction" />
                <h3>Smart Prediction</h3>
                <p>Improve forecasting, inventory control, and distribution by gathering and processing data from all interested parties.</p>
              </div>
            </div>
            <div className="animated-card">
              <div className="service-card">
                <img src={ConsumerImage3} alt="Solution for Inventory Allocation" />
                <h3>Solution for Inventory Allocation</h3>
                <p>A solution for inventory management as well as distribution that provides full supply chain perspective</p>
              </div>
            </div>
            <div className="animated-card">
              <div className="service-card">
                <img src={ConsumerImage4} alt="Building a sustainable enterprise" />
                <h3>Building a sustainable enterprise</h3>
                <p>By implementing carbon-neutral solutions, you may ensure complete management of carbon emissions.</p>
              </div>
            </div>
            </div>
      
            {/* Bottom Image */}
            <div className="bottom-image">
              <img src={ConsumerImage5} alt="Banking Growth" />
              <img src={ConsumerImage6} alt="Banking Growth" />
              <img src={ConsumerImage7} alt="Banking Growth" />
            </div>
    </div>
  );
};

export default ConsumerGoodsDistribution;
