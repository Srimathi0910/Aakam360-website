import React from 'react';
import './styles.css';
import research from '../src/img/outcomes/research.svg';
import coe from '../src/img/outcomes/coe.svg';
import offshore from '../src/img/outcomes/off-shore.svg';
import hubs from '../src/img/outcomes/hubs.svg';
import media from '../src/img/outcomes/media-hub.svg';
import i_and_s from '../src/img/outcomes/i-and-s.svg';




const boxes = [
    {
      id: 1,
      title: 'Research',
      description: 'Focuses on analysing and understanding the business trends, strategies, and operations of corporations..',
      image: research
    },
    {
      id: 2,
      title: 'Center Of Excellence',
      description: 'Group of professionals dedicated to providing the highest level of expertise and service in a particular field.',
      image: coe,
    },
    {
      id: 3,
      title: 'Off-Share Dev Centres',
      description: 'Collaborative development environments that focus on connecting developers and innovators to share resources and ideas.',
      image: offshore,
    },
    {
      id: 4,
      title: 'Product Hubs',
      description: 'Focus on the development, marketing, and distribution of products, services, and solutions.',
      image:hubs ,
    },
    {
      id: 5,
      title: 'Media Hub ',
      description: 'Provide a centralized platform for managing and sharing digital media, such as videos, photos, and music, within a corporate environment.',
      image: media,
    },
    {
      id: 6,
      title: 'Incubation & Startups',
      description: 'Process of encouraging and supporting the development of innovative business ideas within the structure of an existing corporate entity.',
      image: i_and_s,
    },
  ];

const Our_outcomes = () => {
    return (
        <div className="boxes-container">
          
          {boxes.map((box) => (
              
            <div className="box" key={box.id}>
              
              <img src={box.image} alt={box.title} className="box-images" />
              <h3 className="box-title">{box.title}</h3>
              <p className="box-description">{box.description}</p>
            </div>
            
          ))}
           </div>
        
      );
}

export default Our_outcomes
