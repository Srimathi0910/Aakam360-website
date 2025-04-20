import React from 'react';
import './styles.css'; 
import HealthImage1 from '../src/img/health-wellness-image-1.jpg';
import HealthImage2 from '../src/img/health-wellness-image-2-mental.svg';
import HealthImage3 from '../src/img/health-wellness-image-2-ergonomics.svg';
import HealthImage4 from '../src/img/health-wellness-image-2-nutrition.svg';
import HealthImage5 from '../src/img/health-wellness-image-3.jpg';
import HealthImage6 from '../src/img/health-wellness-image-4.jpg';
import HealthImage7 from '../src/img/health-wellness-image-5.jpg';

const HealthWellness = () => {
  return (
    <div className="operations-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={HealthImage1} alt="Health and Wellness" className="hero-image"  />
        <div className="hero-text">
          <h1>Empowering Health and Wellness</h1>
          <h3>Prioritize your well-being with innovative solutions and workplace initiatives.</h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="content">
        <h1>Work-Life Balance</h1>
        <p>Achieve a healthy balance through flexible work schedules and effective time management strategies.</p>
      </div>

      {/* Service Cards */}
      <div className="services">
      <div className="animated-card">
        <div className="service-card">
          <img src={HealthImage2} alt="Mental Health and Resilience" />
          <h3>Mental Health & Resilience</h3>
          <p>Support employee well-being with stress reduction programs and resilience-building initiatives.</p>
        </div>
        </div>
        <div className="animated-card">

        <div className="service-card">
          <img src={HealthImage3} alt="Workplace Safety and Ergonomics" />
          <h3>Workplace Safety & Ergonomics</h3>
          <p>Enhance workplace safety with ergonomic designs and training programs.</p>
        </div>
        </div>
        <div className="animated-card">

        <div className="service-card">
          <img src={HealthImage4} alt="Nutrition and Fitness Programs" />
          <h3>Nutrition & Fitness</h3>
          <p>Encourage healthy lifestyles with nutritious food options and fitness classes.</p>
        </div>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="bottom-image">
        <img src={HealthImage5} alt="Health Growth"  />
        <img src={HealthImage6} alt="Health Growth"  />
        <img src={HealthImage7} alt="Health Growth"  />
      </div>
    </div>
  );
};

export default HealthWellness;
