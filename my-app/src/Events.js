import React, { useState } from 'react';
import './styles.css'; 
import eventimgmain1 from '../src/img/Events/Aakam360_event(image1).jpg';
import eventimgmain2 from '../src/img/Events/iyarkai_event(image2).jpg';
import eventimgmain3 from '../src/img/Events/Event_aakam360(image3).jpg';
import eventimgmain4 from '../src/img/Events/Event_aakam360(image4).jpg';
import eventimg1 from '../src/img/Events/event1.jpg';
import eventimg2 from '../src/img/Events/event2.jpg';
import eventimg3 from '../src/img/Events/event3.jpg';
import eventimg4 from '../src/img/Events/event4.jpg';
import eventimg5 from '../src/img/Events/event5.jpg';
import eventimg6 from '../src/img/Events/event6.jpg';
import eventimg7 from '../src/img/Events/event7.jpg';
import eventimg8 from '../src/img/Events/event8.jpg';
import eventimg9 from '../src/img/Events/event9.jpg';
import eventimg10 from '../src/img/Events/event10.jpg';
import eventimg11 from '../src/img/Events/event11.jpg';
import eventimg12 from '../src/img/Events/event12.jpg';
import eventimg13 from '../src/img/Events/event13.jpg';
import eventimg14 from '../src/img/Events/event14.jpg';
import eventimg15 from '../src/img/Events/event15.jpg';

const posters = [
  eventimgmain1, eventimgmain2, eventimgmain3, eventimgmain4
];

const events = [
  { img: eventimg1, name: 'Zero to One', description: 'A Unique Digital Transformation of SSEI inaugurated on 25.03.2023 by Mr. Charles Godwin - Zoho HR Lead' },
  { img: eventimg2, name: 'Student Incubation', description: 'Inauguration of student incubation by III years for their own product in the company name of Eterio.' },
  { img: eventimg3, name: 'Inauguration of Dreamdaa', description: 'An AI-assisted training platform was launched in our institution on 30.03.2023 by our chief guests Mr.Sivakumar Sadayappan and Kaviya Raj Kamaraj' },
  { img: eventimg4, name: 'Inauguration of Dreamdaa', description: 'Our respective Executive Director Mr. Thirumoorthy Aarumugam welcoming Mr. Sivakumar Sadaiyappan from Dreamdaa.' },
  { img: eventimg5, name: 'Aakam360 Launch', description: 'A Unique Initiative of SSEI inaugurated on 11.05.2023 by Mr. Udaya Sankar - NASSCOM' },
  { img: eventimg6, name: 'Aakam360 - Mr. Udaya Sankar', description: 'Mr. Udaya Sankar - NASSCOM gave a chief guest speech and the importance of aakam.' },
  { img: eventimg7, name: 'Aakam360 - Mr. Sivakumar Kuppuraj', description: 'Mr. Sivakumar Kuppuraj gave a chief guest speech and the importance of aakam.' },
  { img: eventimg8, name: 'Aakam360', description: 'Guest Panel of aakam360 Inauguration event.' },
  { img: eventimg9, name: 'iYarkai 23', description: 'We celebrated, iYARKAI 23, the cultural event at our institution. It was a vibrant success!' },
  { img: eventimg10, name: 'iYarkai 23 - Ms. Maanasi', description: 'Stunning performance of Super Singer fame Ms. Maanasi.' },
  { img: eventimg11, name: 'iYarkai 23 - Mounaragam Team', description: 'Mounaragam orchestra team gave a wonderful performance on iYarkai 23 event.' },
  { img: eventimg12, name: 'Arivom Digital', description: 'Arivom Digital organized by Puthiyathalaimurai and SSEI held on 04.05.2023' },
  { img: eventimg13, name: 'Arivom Digital', description: 'Thiru. Karthikeyan gave a chief guest speech and the importance of Digital Transformation.' },
  { img: eventimg14, name: 'Arivom Digital', description: 'Our special guest gave a speech and the importance of Digital Transformation.' },
  { img: eventimg15, name: 'Arivom Digital', description: 'Thiru. Parisal Krishna gave a chief guest speech and the importance of Digital Transformation.' },
];

const Events = () => {
  const [currentPoster, setCurrentPoster] = useState(0);

  const handleNext = () => {
    setCurrentPoster((prevPoster) => (prevPoster + 1) % posters.length);
  };

  const handlePrev = () => {
    setCurrentPoster((prevPoster) => (prevPoster - 1 + posters.length) % posters.length);
  };

  return (
    <div className="events-page">
      {/* <h1>Upcoming Events</h1>
      <div className="carousel-container">
        <button className="arrow-button" onClick={handlePrev}>⬅</button>
        <img src={posters[currentPoster]} alt={`Poster ${currentPoster + 1}`} className="carousel-poster" />
        <button className="arrow-button" onClick={handleNext}>➡</button>
      </div> */}
      
      {/* Events Section */}
      <h1 style={{padding:"30px"}}>Our 15 Events</h1>
      <div className="event-grid">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.img} alt={event.name} className="event-img" />
            <h3>{event.name}</h3>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
