import React from 'react';
import './styles.css';
import HistoryImage1 from "../src/img/Aakam360-Inception.jpg";
import HistoryImage2 from "../src/img/Early-Projects.jpg";
import HistoryImage3 from "../src/img/Expanding-Horizons.jpg";
import HistoryImage4 from "../src/img/Aakam360-Goes-Global.jpg";
import HistoryImage5 from "../src/img/Innovating-with-AI.jpg";
import HistoryImage6 from "../src/img/Continued-Growth.jpg";
import VisionImage from "../src/img/vision-image.jpg";
import MissionImage from "../src/img/mission-image.jpg";





const historyData = [
  {
    year: "2015",
    title: "Aakam360 Inception",
    description: "Aakam360 was founded in 2015 with a vision to transform how businesses and individuals connect through innovation and technology in Pullipalayam, Sankari, Salem, Tamil Nadu.",
    image:HistoryImage1,
  },
  {
    year: "2016",
    title: "Early Projects",
    description: "Within a year of its inception, Aakam360 successfully delivered multiple projects focused on small and medium enterprises, gaining recognition in the local community.",
    image:HistoryImage2,
  },
  
  {
    year: "2018",
    title: "Expanding Horizons",
    description: "In 2018, Aakam360 expanded its services to include digital solutions and consultancy, catering to industries beyond the local market, enhancing its reach and impact.",
    image:HistoryImage3,
  },
  {
    year: "2020",
    title: "Aakam360 Goes Global",
    description: "By 2020, Aakam360 began collaborating with international partners, focusing on delivering cutting-edge technology solutions to clients worldwide.",
    image:HistoryImage4,
  },
  {
    year: "2022",
    title: "Innovating with AI",
    description: "In 2022, Aakam360 launched its AI-driven chatbot services, revolutionizing customer interaction and feedback collection for businesses across various industries.",
    image:HistoryImage5,
  },
  {
    year: "2024",
    title: "Continued Growth",
    description: "As of 2024, Aakam360 continues to innovate, offering a wide range of services, including web development, AI integration, and digital transformation, while staying committed to its roots in Pullipalayam.",
    image:HistoryImage6,
  },
];

const History = () => {
  return (
    <div className="history-container">
      <h1 className="history-title">Aakam360: Our Journey</h1>
      {historyData.map((event, index) => (
        <div
          className={`history-event ${index % 2 === 0 ? "image-left" : "image-right"}`}
          key={index}
        >
          {index % 2 === 0 ? (
            <>
              <div>
                <img src={event.image} alt="" className="Historyimages" />
              </div>
              <div>
                <h1 className="event-year">{event.year}</h1>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h1 className="event-year">{event.year}</h1>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>
              </div>
              <div>
                <img src={event.image} alt="" className="Historyimages" />
              </div>
            </>
          )}
        </div>
      ))}
      <div className='vision-mission'>
      <div className="vision-mission-content">
        <h2 className="section-title">Our Vision</h2>
        <p className="text">
        At Aakam360, we empower businesses with innovative solutions for growth and success. Our expertise in cutting-edge technology drives transformation across industries.We provide strategic insights to help organizations stay ahead in a dynamic world.
        </p>
        <h2 className="section-title">Our Mission</h2>
        <p className="text">
        t Aakam360, we are committed to delivering excellence through innovative solutions.Our services are scalable, sustainable, and impactful, designed for long-term successWe empower clients with strategic insights to achieve their goals efficiently.
        </p>
        <h2 className="section-title">Who We Are</h2>
        <p className="text">
        At Aakam360, we are a dynamic platform dedicated to innovation, collaboration, and transformative solutions. Our mission is to bridge the gap between technology, industry expertise, and real-world applications, empowering individuals and businesses to thrive in an ever-evolving digital landscape.
        </p>
      </div>
      <div className="vision-mission-images">
      <img src={MissionImage} alt="" className='vision-mission-image1'/>
      <img src={VisionImage} alt="" className='vision-mission-image2'/>
        
      </div>
      </div>
    </div>
  );
};

export default History;
