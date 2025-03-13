import React from 'react';
import './styles.css';
import ServiceImage from '../src/img/Services-Image.jpg';
import ServiceImage1 from '../src/img/Service3-Image-1.jpg';
import ServiceImage2 from '../src/img/Service3-Image-2.jpg';

const services = [
  {
    title: "Skill Development Programs",
    description:
      "In a rapidly evolving job market, having the right skills is essential. Aakam360 offers specialized skill development programs designed to equip learners with industry-relevant expertise. These programs cover a wide range of fields, including programming, digital marketing, data analytics, and business management. Our hands-on approach ensures that participants gain practical knowledge, problem-solving abilities, and the confidence to excel in their careers.",
  },
  {
    title: "Online and Offline Workshops",
    description:
      "Learning is most effective when it is interactive and engaging. Our workshops, available both online and offline, provide a platform for learners to gain insights from industry experts. These sessions focus on emerging trends, real-world applications, and problem-solving techniques. Whether it's a coding bootcamp, leadership training, or an AI and ML seminar, our workshops are designed to provide participants with valuable skills that can be immediately applied in their professional journeys.",
  },
  {
    title: "Certification Courses in Emerging Technologies",
    description:
      "With technological advancements reshaping industries, staying updated is crucial. Aakam360 offers certification courses in cutting-edge technologies such as artificial intelligence, cybersecurity, blockchain, and cloud computing. These courses are designed to provide in-depth knowledge and hands-on experience, helping learners enhance their credibility and career prospects. Our certifications are recognized by industry leaders, making them a valuable asset for professionals looking to advance in their fields.",
  },
  
];

const Services3= () => {
  return (
    <div className="operations-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={ServiceImage1} alt="Healthcare" className="hero-image fade-in" />
        <div className="hero-text">
          <h1>Education & Training</h1>
        </div>
      </div>

      <div className="empty"></div>

      {/* What We Do Content */}
      <div className="what-we-do-content">
        <div className="what-we-do-text">
          <h2 style={{ color: "#000" }}> Education & Training</h2>
          <p>
          Aakam360 is committed to empowering individuals with the knowledge and skills needed to succeed in today’s competitive world. Through our comprehensive education and training programs, we provide hands-on learning experiences, industry-relevant certifications, and expert-led workshops. Our goal is to bridge the gap between academic learning and practical application, ensuring career growth and professional excellence.
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

export default Services3;
