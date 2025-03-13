import React from 'react';
import './styles.css';
import ServiceImage from '../src/img/Services-Image.jpg';
import ServiceImage1 from '../src/img/Service5-Image-1.jpg';
import ServiceImage2 from '../src/img/Service5-Image-2.jpg';
const services = [
  {
    title: "Innovation Labs for New Technology Exploration",
    description:
      "At Aakam360, we believe that innovation is the key to progress. Our innovation labs serve as a hub for exploring emerging technologies such as artificial intelligence, blockchain, IoT, and sustainable solutions. Researchers, engineers, and students collaborate in these labs to experiment, test hypotheses, and develop groundbreaking innovations. These facilities provide state-of-the-art resources and mentorship to drive technological advancements..",
  },
  {
    title: "Prototyping and Product Development Support",
    description:
      "Turning ideas into tangible products requires structured support and technical expertise. Aakam360 assists businesses and innovators in the prototyping and product development phase. From concept validation to design, testing, and refinement, our experts guide teams through the entire development lifecycle. By leveraging advanced tools and methodologies, we help bring innovative solutions to market faster and more efficiently.",
  },
  {
    title: "Collaborative Research Initiatives",
    description:
      "Collaboration drives progress, and Aakam360 actively partners with academic institutions, research organizations, and industry leaders to conduct research in emerging fields. Our collaborative research initiatives focus on solving real-world challenges through interdisciplinary approaches. By fostering partnerships and knowledge sharing, we contribute to the development of future-ready technologies and drive impactful change across various industries.",
  },
];

const Services5 = () => {
  return (
    <div className="operations-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={ServiceImage1} alt="Healthcare" className="hero-image fade-in" />
        <div className="hero-text">
          <h1>Research & Development</h1>
        </div>
      </div>

      <div className="empty"></div>

      {/* What We Do Content */}
      <div className="what-we-do-content">
        <div className="what-we-do-text">
          <h2 style={{ color: "#000" }}>Research & Development</h2>
          <p>
          Aakam360 is dedicated to fostering innovation through its Research & Development (R&D) initiatives. We provide an ecosystem where new ideas are explored, tested, and transformed into real-world solutions. Our R&D efforts focus on cutting-edge technologies, product development, and collaborative research, ensuring businesses and individuals stay ahead in an ever-evolving technological landscape.
          </p>
        </div>
        <div className="what-we-do-image-container">
          <img src={ServiceImage2} alt="Innovative Solutions" className="what-we-do-image2" />
        </div>
      </div>

      {/* Why Choose Us Section */}
<div className="WhyChooseUs-whole-content" style={{marginTop:"-200px",backgroundImage: `url(${ServiceImage})` }}>
        {/* Features Section */}
        <section className="WhyChooseUs-sub-content">
          {services.map((services, index) => (
            <div key={index} className="feature-card">
              <h3>{services.title}</h3>
              <p>{services.description}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Services5;
