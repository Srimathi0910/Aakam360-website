import React from 'react';
import './styles.css'; 
import FutureOfWorkImage1 from '../src/img/futureofwork-image-1.jpg';
import FutureOfWorkImage2 from '../src/img/futureofwork-image-2-ethics.svg';
import FutureOfWorkImage3 from '../src/img/futureofwork-image-2-resilient.svg';
import FutureOfWorkImage4 from '../src/img/futureofwork-image-2-skiing.svg';
import FutureOfWorkImage5 from '../src/img/futureofwork-image-3.jpg';
import FutureOfWorkImage6 from '../src/img/futureofwork-image-4.jpg';
import FutureOfWorkImage7 from '../src/img/futureofwork-image-5.jpg';


const FutureOfWork = () => {
  return (
    <div className="operations-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={FutureOfWorkImage1} alt="Future of Work" className="hero-image" />
        <div className="hero-text">
          <h1>Embrace the Future of Work with Aakam</h1>
          <h3>Transforming and Revolutionizing the way we work and thrive in the future</h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="content">
        <h1>Challenges and Opportunities</h1>
        <p>Our comprehensive approach to the future of work combines innovative technologies, expert insights, and customized solutions to help businesses and individuals navigate challenges and capitalize on opportunities.</p>
      </div>

      {/* Service Cards */}
      <div className="services">
      <div className="animated-card">
        <div className="service-card">
          <img src={FutureOfWorkImage2} alt="Ethics of Workplace" />
          <h3>Ethics of Workplace</h3>
          <p>We help businesses navigate the ethical implications of emerging technologies and implement practices that prioritize fairness, transparency, and accountability.</p>
        </div>
        </div>
        <div className="animated-card">

        <div className="service-card">
          <img src={FutureOfWorkImage3} alt="Building Resilient Minds" />
          <h3>Building Resilient Minds</h3>
          <p>We offer customized solutions to help businesses build resilience and agility, enabling teams to adapt and thrive in challenging circumstances.</p>
        </div>
        </div>

        <div className="animated-card">

        <div className="service-card">
          <img src={FutureOfWorkImage4} alt="Upskilling and Reskilling" />
          <h3>Upskilling and Reskilling</h3>
          <p>Our upskilling and reskilling solutions equip employees with the skills they need to stay ahead in the evolving job market.</p>
        </div>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="bottom-image">
        <img src={FutureOfWorkImage5} alt="Future Growth"/>
        <img src={FutureOfWorkImage6} alt="Future Growth"/>
        <img src={FutureOfWorkImage7} alt="Future Growth"/>
      </div>
    </div>
  );
};

export default FutureOfWork;