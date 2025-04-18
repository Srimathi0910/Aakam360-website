import React from 'react';
import infra1 from '../src/img/InfraImage1.JPG';
import infra2 from '../src/img/InfraImage2.jpg';
import infra3 from '../src/img/InfraImage3.JPG';
import infra4 from '../src/img/InfraImage4.JPG';




import './styles.css';

const infrastructureData = [
  {
    title: 'Office Building',
    description: 'Aakam360 operates in a fully equipped workspace with modern architecture.',
    image: infra1,
    style: 'diamond',
  },
  {
    title: 'Training Hall',
    description: 'Area for workshops, seminars, and learning activities.',
    image: infra2,
    style: 'circle',
  },
  {
    title: 'Technology Lab',
    description: 'Systems and fast internet for innovative development.',
    image:  infra3,
    style: 'diamond',
  },
  {
    title: 'Eco-friendly Garden',
    description: 'Sustainable vertical garden promoting green practices.',
    image:  infra4,
    style: 'circle',
  },
];

const Infrastructure = () => {
  return (
    <section className="infrastructure-section">
      <h2 className="infra-heading">Our Infrastructure</h2>
      <div className="infra-grid">
        {infrastructureData.map((item, index) => (
          <div className={`infra-card ${item.style}`} key={index}>
            <div className={`image-wrapper ${item.style}`}>
              <img src={item.image} alt={item.title} className="infra-image" />
            </div>
            <h3 className="infra-title">{item.title}</h3>
            <p className="infra-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Infrastructure;
