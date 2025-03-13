import React from 'react';
import { Link } from 'react-router-dom';
import aakamimage from '../src/img/aakam-welcome-image.jpg';
import { useTheme } from './ThemeContext'; 
import './styles.css'; 
const Hero_section = () => {
  const { isLightMode } = useTheme();

  return (
    // <section className={`hero ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
    //   <div className="operations-container">
    //         {/* Hero Section */}
    //         <div className="hero-section">
    //           <img src={aakamimage} alt="Travel and Logistics" className="hero-image" />
    //           <div className="hero-text">
    //           <h2>WELCOME TO AAKAM360</h2>
    //           <p>Aakam360 has been a leading platform for providing Enabling students to acquire industry knowledge and bridge the gap between Industry and Institute.</p>
    //           <a href="#contact" className="cta-btn">
    //             <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>Get in Touch</Link></a>

    //           </div>
    //         </div>

        
        
    //   </div>
    // </section>
    <div className="operations-container1">
          {/* Hero Section */}
          <div className="hero-section1">
            <img src={aakamimage} alt="" className="hero-image1" />
            <div className="hero-text1">
            <h1>
  {"WELCOME TO AAKAM360".split("").map((char, index) => (
    <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
      {char === " " ? "\u00A0" : char} {/* Preserve spaces */}
    </span>
  ))}
</h1>
              <h3>Aakam360 has been a leading platform for providing Enabling students to acquire industry knowledge and bridge the gap between Industry and Institute.</h3>
              <a href="/contact" className="cta-btn">
                <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>Get in Touch</Link></a>
              
            </div>
          </div>
  
        </div>
    
  );
};

export default Hero_section;
