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
import Aakakmintro from "../src/img/Videos/aakam360-Video.mp4";

const historyData = [
  {
    year: "2023",
    title: "Foundation Year",
    description: [
      "Foundation Year: Aakam360 was founded in 2023 by Thirumoorthy Arumugam in Pullipalayam, Sankari, Salem, Tamil Nadu.",
      "Vision: The platform was launched to bridge the gap between academia and industry using the 5i framework: Industry, Institution, Incubation, Innovation, Internship.",
      "Activities Began: Initiatives such as student-industry collaboration, internship programs, and early-stage innovation events were introduced."
    ],
    image: HistoryImage1,
  },
  {
    year: "2024",
    title: "Incorporation",
    description: [
      "Incorporation: On March 9, 2024, Aakam360 was formally registered as Aakam360 (5I) Private Limited.",
      "Expansion: Facilities like InnoHub (a 15,000 sq. ft. incubation space) and collaborations with Apollo Simulation Centre, FintechGie, etc., were actively promoted.",
      "Mentorship and Events: Increased involvement of industry mentors and events such as Zero to One inspired entrepreneurship."
    ],
    image: HistoryImage2,
  },
  {
    year: "2025",
    title: "Continued Growth",
    description: [
      "As of 2024, Aakam360 continues to innovate.",
      "Offers services including web development, AI integration, and digital transformation.",
      "Stays committed to its roots in Pullipalayam."
    ],
    image: HistoryImage3,
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
                <ul className="event-description">
                  {event.description.map((point, i) => (
                    <li key={i}>
                      {point.includes(':') ? (
                        <>
                          <strong>{point.split(':')[0]}:</strong>{point.split(':')[1]}
                        </>
                      ) : (
                        point
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <>
              <div>
                <h1 className="event-year">{event.year}</h1>
                <h3 className="event-title">{event.title}</h3>
                <ul className="event-description">
                  {event.description.map((point, i) => (
                    <li key={i}>
                      {point.includes(':') ? (
                        <>
                          <strong>{point.split(':')[0]}:</strong>{point.split(':')[1]}
                        </>
                      ) : (
                        point
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <img src={event.image} alt="" className="Historyimages" />
              </div>
            </>
          )}
        </div>
      ))}
      <div style={{
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh" // optional: vertically centers in full viewport
}}>
  <h1>Watch Our Video</h1>
  <video width="600" controls>
    <source src={Aakakmintro} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>


      <div className='vision-mission'>
        <div className="vision-mission-content">
          <h2 className="section-title">Our Vision</h2>
          <p className="text">
            At Aakam360, we empower businesses with innovative solutions for growth and success.
            Our expertise in cutting-edge technology drives transformation across industries.
            We provide strategic insights to help organizations stay ahead in a dynamic world.
          </p>
          <h2 className="section-title">Our Mission</h2>
          <p className="text">
            At Aakam360, we are committed to delivering excellence through innovative solutions.
            Our services are scalable, sustainable, and impactful, designed for long-term success.
            We empower clients with strategic insights to achieve their goals efficiently.
          </p>
          <h2 className="section-title">Who We Are</h2>
          <p className="text">
            At Aakam360, we are a dynamic platform dedicated to innovation, collaboration,
            and transformative solutions. Our mission is to bridge the gap between technology,
            industry expertise, and real-world applications, empowering individuals and businesses
            to thrive in an ever-evolving digital landscape.
          </p>
        </div>
        
        <div className="vision-mission-images">
          <img src={MissionImage} alt="Mission" className='vision-mission-image1' />
          <img src={VisionImage} alt="Vision" className='vision-mission-image2' />
        </div>
      </div>
    </div>
  );
};

export default History;
