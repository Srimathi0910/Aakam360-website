import React from "react";
import Lottie from "lottie-react"; // Import Lottie
import "./styles.css"; 
import animationData from "../src/img/Animation.json"; // Correct path

const Message1 = () => {
  return (
    <div className="success-container">
      <div className="animation-container">
        <Lottie animationData={animationData} loop={true} />
      </div>
      <h2 className="success-title">Applied Successfully!</h2>
      <p className="success-message">
        Thank you for reaching out. We will get back to you soon.
      </p>
    </div>
  );
};

export default Message1;
