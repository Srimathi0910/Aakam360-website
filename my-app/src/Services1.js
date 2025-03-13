import React from 'react';
import './styles.css';
import ServiceImage from '../src/img/Services-Image.jpg';
import ServiceImage1 from '../src/img/Service1-Image-1.jpg';
import ServiceImage2 from '../src/img/Service1-Image-2.jpg';


const services = [
  {
    title: "Strategic Planning and Execution",
    description:
      "Strategic planning is essential for any business aiming for growth and stability. At Aakam360, we assist companies in defining their vision, setting achievable goals, and formulating action plans to reach them. Our approach involves analyzing market trends, assessing risks, and identifying opportunities to create a roadmap that aligns with business objectives. ",
  },
  {
    title: "Business Process Optimization",
    description:
      "Efficiency is key to profitability, and our business process optimization services help organizations enhance their workflows. We conduct in-depth assessments to identify inefficiencies, bottlenecks, and areas for improvement. By automating repetitive tasks, restructuring processes, and integrating innovative technologies, we help businesses reduce costs, increase productivity, and improve overall performance.",
  },
  {
    title: "Digital Transformation Strategies",
    description:
      "In the digital era, businesses need to adapt and innovate to remain relevant. Aakam360 offers comprehensive digital transformation strategies to help companies integrate modern technologies into their operations. From cloud computing and artificial intelligence to IoT and blockchain, we assist businesses in adopting the latest digital solutions. ",
  },
];

const Services1 = () => {
  return (
    <div className="operations-container" >
      {/* Hero Section */}
      <div className="hero-section">
        <img src={ServiceImage1} alt="Healthcare" className="hero-image fade-in" />
        <div className="hero-text">
          <h1>Business Consulting & Solutions</h1>
        </div>
      </div>

      <div className="empty"></div>

      {/* What We Do Content */}
      <div className="what-we-do-content">
        <div className="what-we-do-text">
          <h2 style={{ color: "#000" }}>Business Consulting & Solutions</h2>
          <p>
            Aakam360 provides expert business consulting services to help organizations streamline operations, improve efficiency, and achieve sustainable growth. By leveraging data-driven strategies, industry expertise, and cutting-edge technology, we empower businesses to make informed decisions and stay ahead in a competitive market. Our consulting solutions are tailored to meet the unique challenges of each business, ensuring long-term success.
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

export default Services1;
