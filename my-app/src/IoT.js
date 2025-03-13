import React from 'react';
import './styles.css'; 
import IoTImage1 from '../src/img/iot-image-1.jpg';
import IoTImage2 from '../src/img/iot-image-2-autonomous.svg';
import IoTImage3 from '../src/img/iot-image-2-intelligent.svg';
import IoTImage4 from '../src/img/iot-image-2-smart.svg';
import IoTImage5 from '../src/img/iot-image-3.jpg';
import IoTImage6 from '../src/img/iot-image-4.jpg';
import IoTImage7 from '../src/img/iot-image-5.jpg';


const IoT = () => {
  return (
    <div className="operations-container">
      <div className="hero-section">
        <img src={IoTImage1} alt="IoT" className="hero-image" />
        <div className="hero-text">
          <h1>Making Things Come to Life</h1>
          <h3>Drive holistic growth with a secure, boundaryless, and humane approach.</h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="content">
        <h1>Connected Experiences</h1>
        <p>IoT-based technologies add digital intelligence to physical objects, enabling seamless interactions.</p>
        <p>By integrating products, processes, plants, and people, organizations can create digital ecosystems that enhance user experiences.</p>
        <p>The Internet of Things (IoT) is revolutionizing industries and modernizing business operations, making it one of the most transformative technologies today.</p>
      </div>

      {/* Service Cards */}
      <div className="services">
      <div className="animated-card">
        <div className="service-card">
          <img src={IoTImage2} alt="Autonomous mobile clinics" />
          <h3>Autonomous Mobile Clinics</h3>
          <p>Empowering healthcare professionals with IoT-enabled solutions for preventive healthcare practices.</p>
        </div>
        </div>
        <div className="animated-card">

        <div className="service-card">
          <img src={IoTImage3} alt="Intelligent connectivity" />
          <h3>Intelligent Connectivity</h3>
          <p>Optimizing vaccine logistics with IoT-driven real-time tracking and management solutions.</p>
        </div>
        </div>
        <div className="animated-card">

        <div className="service-card">
          <img src={IoTImage4} alt="Smart vaccine logistics" />
          <h3>Smart Vaccine Logistics</h3>
          <p>Enhancing decision-making and personalization through IoT-powered logistics and analytics.</p>
        </div>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="bottom-image">
        <img src={IoTImage5} alt="IoT Growth"  />
        <img src={IoTImage6} alt="IoT Growth"  />
        <img src={IoTImage7} alt="IoT Growth"  />
      </div>
    </div>
  );
};

export default IoT;
