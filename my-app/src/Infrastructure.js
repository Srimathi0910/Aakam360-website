import React from 'react';
import './styles.css';

const infrastructureData = [
  {
    title: 'Office Building',
    description: 'Aakam360 operates in a fully equipped workspace with modern architecture and a tech-focused environment.',
    image: '/images/infra-office.jpg',
  },
  {
    title: 'Training Hall',
    description: 'Dedicated training area for workshops, seminars, and collaborative learning activities.',
    image: '/images/infra-training.jpg',
  },
  {
    title: 'Technology Lab',
    description: 'High-performance systems and fast internet connectivity to support innovative tech development.',
    image: '/images/infra-lab.jpg',
  },
  {
    title: 'Eco-friendly Terrace Garden',
    description: 'Vertical garden and sustainable systems for encouraging green practices.',
    image: '/images/infra-garden.jpg',
  },
];

const Infrastructure = () => {
  return (
    <section className="infrastructure-section">
      <h2 className="infra-heading">Our Infrastructure</h2>
      <p className="infra-subtext">Take a glimpse into the facilities that empower Aakam360 to innovate and grow.</p>
      <div className="infra-grid">
        {infrastructureData.map((item, index) => (
          <div className="infra-card" key={index}>
            <img src={item.image} alt={item.title} className="infra-image" />
            <h3 className="infra-title">{item.title}</h3>
            <p className="infra-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Infrastructure;
