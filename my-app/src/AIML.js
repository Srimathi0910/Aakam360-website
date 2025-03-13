import React from 'react';
import './styles.css'; 
import AIMLImage1 from '../src/img/aiml-image-1.jpg';
import AIMLImage2 from '../src/img/aiml-image-2-nlp.svg';
import AIMLImage3 from '../src/img/aiml-image-2-vision.svg';
import AIMLImage4 from '../src/img/aiml-image-2-reinforcement.svg';
import AIMLImage5 from '../src/img/aiml-image-3.jpg';
import AIMLImage6 from '../src/img/aiml-image-4.jpg';
import AIMLImage7 from '../src/img/aiml-image-5.jpg';

const AIML = () => {
  return (
    <div className="operations-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={AIMLImage1} alt="AIML" className="hero-image" />
        <div className="hero-text">
          <h1>Development in AI & ML</h1>
          <h3>Developing ethical and trustworthy AI and ML models for responsible and inclusive innovation.</h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="content">
        <h1>AI Ethics</h1>
        <p>Examining the ethical considerations and implications of AI and ML applications.</p>
      </div>

      {/* Service Cards */}
      <div className="services">
      <div className="animated-card">
        <div className="service-card">
          <img src={AIMLImage2} alt="Natural Language Processing (NLP)" />
          <h3>Natural Language Processing (NLP)</h3>
          <p>Improving machines' ability to understand and interpret human language.</p>
        </div>
        </div>
        <div className="animated-card">

        <div className="service-card">
          <img src={AIMLImage3} alt="Computer Vision" />
          <h3>Computer Vision</h3>
          <p>Enhancing machines' ability to interpret and analyse visual information.</p>
        </div>
        </div>
        <div className="animated-card">

        <div className="service-card">
          <img src={AIMLImage4} alt="Reinforcement Learning" />
          <h3>Reinforcement Learning</h3>
          <p>Studying and implementing techniques for machines to learn from their environment and improve their decision-making capabilities.</p>
        </div>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="bottom-image">
        <img src={AIMLImage5} alt="AIML Growth" />
        <img src={AIMLImage6} alt="AIML Growth" />
        <img src={AIMLImage7} alt="AIML Growth" />
      </div>
    </div>
  );
};

export default AIML;