import React from 'react';
import './styles.css'; 
import video1 from "../src/img/aakam360_video_5i.mp4";

const Feedback = () => {
  return (
    <div>
      <h1 className="feedback_heading">OUR FEEDBACK</h1>
      <video controls>
        <source src={video1} type="video/mp4" />
      </video>
    </div>
  );
};

export default Feedback;
