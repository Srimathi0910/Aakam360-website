import React from "react";
import "./styles.css";

const CareerVideos = () => {
  const videos = [
    "https://www.youtube.com/embed/u-mN0aItczw",
    "https://www.youtube.com/embed/vRfc5uoYOeI",
    "https://www.youtube.com/embed/QEGKX_H7QYU",
    "https://www.youtube.com/embed/aMg4J7MJpbI",
  ];

  return (
    <div className="video-container">
      {videos.map((video, index) => (
        <div className="video-wrapper" key={index}>
          <iframe
            src={video}
            title={`YouTube Video ${index + 1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default CareerVideos;
