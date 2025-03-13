import React from 'react';
import './styles.css';
import ServiceImage from '../src/img/Services-Image.jpg';
import ServiceImage1 from '../src/img/Service2-Image-1.jpg';
import ServiceImage2 from '../src/img/Service2-Image-2.jpg';

const services = [
  {
    title: "Web and App Development",
    description:
      "In today’s digital age, having a strong online presence is crucial for businesses. Aakam360 specializes in developing high-performance websites and mobile applications tailored to specific business needs. We focus on user-friendly design, seamless navigation, and robust functionality to create engaging digital experiences. Whether it's an e-commerce platform, a corporate website, or a mobile application, our development process ensures scalability, security, and responsiveness across all devices.",
  },
  {
    title: "AI-Powered Solutions and Chatbots",
    description:
      "Artificial intelligence is revolutionizing business operations, and Aakam360 provides AI-powered solutions to enhance automation and decision-making. Our AI-driven chatbots improve customer engagement by providing instant responses, handling inquiries, and automating routine tasks. These intelligent systems can be integrated across multiple platforms, reducing workload and increasing efficiency. Additionally, AI-based analytics help businesses gain valuable insights, optimize processes, and make data-driven decisions.",
  },
  {
    title: "Cloud Computing and Cybersecurity",
    description:
      "Cloud computing allows businesses to store, manage, and process data efficiently. Aakam360 helps companies transition to cloud-based systems, ensuring seamless accessibility, scalability, and cost-effectiveness. However, with digital expansion comes security risks. Our cybersecurity solutions protect businesses from cyber threats, ensuring data integrity and compliance with industry standards. By implementing advanced security protocols, encryption techniques, and real-time monitoring, we safeguard sensitive information against potential breaches.",
  },
  {
    title: "Blockchain and IoT Integration",
    description:
      "Blockchain and the Internet of Things (IoT) are reshaping industries by enhancing security, transparency, and connectivity. Aakam360 provides blockchain solutions for secure transactions, smart contracts, and decentralized applications. Our IoT integration services enable businesses to connect devices, collect real-time data, and automate processes for increased efficiency. By merging blockchain with IoT, we help organizations create secure, data-driven ecosystems that drive innovation and operational excellence.",
  },
];

const Services2 = () => {
  return (
    <div className="operations-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={ServiceImage1} alt="Healthcare" className="hero-image fade-in" />
        <div className="hero-text">
          <h1>Technology & Innovation</h1>
        </div>
      </div>

      <div className="empty"></div>

      {/* What We Do Content */}
      <div className="what-we-do-content">
        <div className="what-we-do-text">
          <h2 style={{ color: "#000" }}> Technology & Innovation</h2>
          <p>
          Aakam360 leverages cutting-edge technology and innovative solutions to drive digital transformation for businesses. Our expertise spans web and app development, AI-powered solutions, cloud computing, cybersecurity, blockchain, and IoT integration. By combining advanced technology with strategic implementation, we help businesses enhance efficiency, security, and customer experience, ensuring they stay ahead in the evolving digital landscape.
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

export default Services2;
