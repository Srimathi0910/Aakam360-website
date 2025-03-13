import React from 'react';
import './styles.css'; 
import EducationImage1 from '../src/img/Education-image-1.jpg';
import EducationImage2 from '../src/img/Education-image-2-institute.svg';
import EducationImage3 from '../src/img/Education-image-2-digital.svg';
import EducationImage4 from '../src/img/Education-image-2-immersive.svg';
import EducationImage5 from '../src/img/Education-image-3.jpg';
import EducationImage6 from '../src/img/Education-image-4.jpg';
import EducationImage7 from '../src/img/Education-image-5.jpg';

const Education = () => {
  return (
    <div className="operations-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={EducationImage1} alt="Education" className="hero-image fade-in" />
        <div className="hero-text">
          <h1>Education</h1>
          <h3>We provide modern technology to support accessible, pocket-friendly, and immersive learning.</h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="content">
        <h1>Education's Tech Revolution</h1>
        <p>The demand for technology-driven blended learning experiences has increased as a result of current market changes.</p>
        <p>Students can enjoy hyper-individualized, immersive, and self-paced learning thanks to digital, which provides boundaryless access to education through physical models, extended reality, and most recently, the metaverse.</p>
        <p>You can create a dynamic, future-ready workforce by combining this with business and academic partnerships to reinvent the larger educational edifice.</p>
      </div>

      {/* Service Cards */}
      <div className="services">
      <div className="animated-card">
        <div className="service-card">
          <img src={EducationImage2} alt="Institution Reach" />
          <h3>Improve the Institution's Reach</h3>
          <p>Reach your enrolment goals by giving students continuous access to a seamless, multichannel digital platform and a campus that is equipped with technology.</p>
        </div>
        </div>

        <div className="animated-card">
        <div className="service-card">
          <img src={EducationImage3} alt="Digital Academy" />
          <h3>Corporate Digital Academy</h3>
          <p>A corporate training and digital learning solution.</p>
        </div>
        </div>

        <div className="animated-card">
        <div className="service-card">
          <img src={EducationImage4} alt="Immersive Learning" />
          <h3>Immersive Learning Content Services</h3>
          <p>Immersive Learning Content Services provides top-notch content created by professionals in the education sector.</p>
        </div>
        </div>ā
      </div>

      {/* Bottom Image */}
      <div className="bottom-image">
        <img src={EducationImage5} alt="Education Growth"  />
        <img src={EducationImage6} alt="Education Growth"  />
        <img src={EducationImage7} alt="Education Growth"  />
      </div>
    </div>
  );
};

export default Education;
