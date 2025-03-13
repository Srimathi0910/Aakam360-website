// LearnMore.js
import React from "react";
import "./styles.css";

const industries = [
  {
    title: "Education",
    description: "AI-powered learning, AR/VR classrooms, and smart assessment tools.",
  },
  {
    title: "Healthcare",
    description: "Predictive diagnostics, robotic surgery, and telemedicine solutions.",
  },
  {
    title: "Manufacturing",
    description: "IoT-driven automation, smart factories, and predictive maintenance.",
  },
  {
    title: "Retail",
    description: "Personalized shopping experiences, AI chatbots, and inventory automation.",
  },
  {
    title: "Finance",
    description: "Blockchain-based transactions, fraud detection, and AI-driven risk assessment.",
  },
  {
    title: "Smart Cities & Infrastructure",
    description: "IoT-enabled smart grids, AI-driven traffic management, and sustainable urban development.",
  },
  {
    title: "Agriculture & Sustainability",
    description: "Precision farming, AI-powered crop monitoring, and blockchain-based food traceability.",
  },
  {
    title: "Logistics & Supply Chain",
    description: "Automated warehouses, real-time shipment tracking, and AI-based demand forecasting.",
  },
];


const LearnMore = () => {
  return (
    <div className="tech-intro-container">
      <h1 className="tech-title">Introduction to Our Technology Approach</h1>
      <p className="tech-description">
        At Aakam360, we leverage advanced technologies to drive innovation, scalability, and real-world impact. 
      </p>
      
      <div className="tech-details">
        <div className="tech-card">
          <h2>Innovation</h2>
          <p>We integrate the latest technologies to create cutting-edge solutions.</p>
        </div>
        <div className="tech-card">
          <h2>Scalability</h2>
          <p>Our solutions are designed to grow with businesses, ensuring long-term success.</p>
        </div>
        <div className="tech-card">
          <h2>Real-World Impact</h2>
          <p>We focus on practical implementations that drive meaningful change.</p>
        </div>
        
      </div>
      <button className="back-btn" onClick={() => window.history.back()}>
          Go Back
        </button>
        <div className="industry-container">
      <h1 className="industry-header">Applications in Various Industries</h1>
      <p className="industry-subtext">
        How these technologies are revolutionizing key sectors with real-world impact.
      </p>
      <div className="industry-grid">
        {industries.map((industry, index) => (
          <div key={index} className="industry-box">
            <h2>{industry.title}</h2>
            <p>{industry.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default LearnMore;
