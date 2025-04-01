import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import "./styles.css";

const images = [
  require("../src/img/aakam-welcome-image.jpg"),
  require("../src/img/aakam-welcome-image2.jpg"),
  require("../src/img/aakam-welcome-image3.jpg"),
  require("../src/img/aakam-welcome-image4.jpg"),
];

const Hero_section = () => {
  const { isLightMode } = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // Start fade-in after changing image
      }, 800); // Wait for fade-out before changing image
    }, 3000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="operations-container1">
      <div className="hero-section1">
        <div className="image-container">
          <img
            src={images[currentImageIndex]}
            alt="Aakam360"
            className="hero-image1"
            style={{
              width: "100%",
              height: "100vh",
              objectFit: "cover",
              position: "absolute",
              opacity: fade ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
          />
        </div>
        <div className="hero-text1">
          <h1>
            {"WELCOME TO AAKAM360".split("").map((char, index) => (
              <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          <h3>
            Aakam360 has been a leading platform for enabling students to
            acquire industry knowledge and bridge the gap between Industry and
            Institute.
          </h3>
          <Link to="/contact" className="cta-btn">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero_section;
