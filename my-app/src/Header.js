import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext'; 
import './styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faClock, faEnvelope, faPhone ,faTimes,faBars} from "@fortawesome/free-solid-svg-icons";

import img from "../src/img/aakam360-mainlogo.png";

const Header = () => {
  const { isLightMode, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <header>
      <div className='Heading'>
      <div className='Main-Header'>
        
          <FontAwesomeIcon icon={faPhone}  className="customIcon1"/>
          <p>+918438435777</p>
        <div className='Main-Header'>
          <FontAwesomeIcon icon={faEnvelope}  className="customIcon1"/>
          <p>info@aakam360.com</p>
        </div>
        <div className='Main-Header'>
          <FontAwesomeIcon icon={faClock}  className="customIcon1"/>
          <p>
            Mon-Sat:09:00 AM-06:00 PM.
          </p>
          </div>
      </div>
      </div>

        
      
      <div className='Menus'>
      
      <div className="logo">
        <img src={img} alt="aakam360" className="logo-img" />
      </div>
      <button className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>


      <nav  className={`main-menu ${menuOpen ? "open" : ""}`}>
        <ul className="menu">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/our-5i-explain">OUR 5I</Link></li>
          <li><Link to="/career">CAREERS</Link></li>
          <li className="dropdown">
            <a href="#">SERVICES &#9662;</a>
            <ul className="dropdown-content">
              <li><Link to="/Business-Consulting-Solutions"> Business Consulting & Solutions</Link></li>
              <li><Link to="/Technology-Innovation">Technology & Innovation</Link></li>
              <li><Link to="/Education-Training">Education & Training</Link></li>
              <li><Link to="/Mentorship-Career-Guidance"> Mentorship & Career Guidance</Link></li>
              <li><Link to="/Research-Development">Research & Development</Link></li>
            </ul>
          </li>
          <li><Link to="/blog">BLOG</Link></li>
          <li className="dropdown">
            <a href="#">ABOUT US &#9662;</a>
            <ul className="dropdown-content">
              <li><Link to="/do">What We Do</Link></li>
              <li><Link to="/our-mentors">Our Mentors</Link></li>
              <li><Link to="/our-partners">Our Partners</Link></li>
              <li><Link to="/our-usp">Our USP</Link></li>
              <li><Link to="/our-outcomes">Outcomes</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">MILESTONES&#9662;</a>
            <ul className="dropdown-content">
              <li><Link to="/history"> History</Link></li>
              <li><Link to="/Infrastructure">Infrastructure</Link></li>
              <li><Link to="/Feedback">Our Feedback</Link></li>
              
            </ul>
            </li>
          <li><Link to="/events">EVENTS</Link></li>
          <li><Link to="/contact">CONTACT US</Link></li>
        </ul>
      </nav>

      <button onClick={toggleTheme} className="theme-toggle">
        {isLightMode ? "☀️" : "🌙"}
      </button>
      </div>
    
      
    
    </header>
  );
};

export default Header;
