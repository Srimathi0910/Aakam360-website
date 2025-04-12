import React from 'react';
import './styles.css'; 
import video1 from "../src/feedback-videos/Bhavani TekEinstein.mp4";
import video2 from "../src/feedback-videos/Dhanusri.mp4";

const Feedback = () => {
  const videos = [
    { id: 1, video: video1 },
    { id: 2, video: video2 },
    { id: 3, video: video1 },
    { id: 4, video: video2 },
  ];

  return (
    <div className="feedback-container">
      <h1 className="feedback_heading">OUR FEEDBACK</h1>
      <div className="video-grid">
        {videos.map(v1 => {
          return (
            <video key={v1.id} controls 
            controlsList="nodownload noplaybackrate" className="feedback-video">
              <source src={v1.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          );
        })}
      </div>
    </div>
  );
};

export default Feedback;
