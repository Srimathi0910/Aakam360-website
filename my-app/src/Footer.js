import React from 'react';
import { Link } from 'react-router-dom';
import IconImage1 from '../src/img/instagram-image.png';
import IconImage2 from '../src/img/facebook-image.png';
import IconImage3 from '../src/img/twitter-image.png';
import IconImage4 from '../src/img/linkedin-image.png';

import './styles.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Section 1: Operation 360 */}
        <div className="footer-section">
          <h3 className='footer_head'>Operation 360</h3>
          <ul>
            <li><Link to="/banking">Banking</Link></li>
            <li><Link to="/consumerGoods">Consumer Goods and Distribution</Link></li>
            <li><Link to="/communication-media">Communication, Media, Information Services</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/energy-resourse">Energy, Resource, and Utilities</Link></li>
            <li><Link to="/healthcare">Healthcare</Link></li>
            <li><Link to="/high-tech">High Tech</Link></li>
            <li><Link to="/life-science">Life Science</Link></li>
            <li><Link to="/manufacturing">Manufacturing</Link></li>
            <li><Link to="/public-services">Public Services</Link></li>
            <li><Link to="/retail">Retail</Link></li>
            <li><Link to="/travel-logistics">Travel and Logistics</Link></li>
          </ul>
        </div>
        
        {/* Section 2: Insights */}
        <div className="footer-section">
          <h3>Insights</h3>
          <ul>
            <li><Link to="/cloud">Cloud</Link></li>
            <li><Link to="/blockchain">Blockchain</Link></li>
            <li><Link to="/iot">IoT</Link></li>
            <li><Link to="/metaverse">Metaverse</Link></li>
            <li><Link to="/future-of-Work">Future of Work</Link></li>
            <li><Link to="/health-wellness">Health and Wellness</Link></li>
            <li><Link to="/sustainability">Sustainability</Link></li>
            <li><Link to="/ai-ml">AI & ML</Link></li>
            <li><Link to="/cybersecurity">Cybersecurity</Link></li>
          </ul>
        </div>

        {/* Section 3: Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Sankari-Tiruchengode main road,Block B, Pullipalayam, Sankari, Salem, Tamil Nadu, India - 637304.</p>
          <p>Phone: +91 843 843 5777</p>
          <p>Phone: +91 7373 672 999</p>
          <p>Email: <a href="mailto:info@aakam360.com">info@aakam360.com</a></p>
        </div>

        {/* Section 4: Know Us */}
        <div className="footer-section">
          <h3>Know Us</h3>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/disclaimer">Disclaimer</Link></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>Copyright © 2024. All Rights Reserved.</p>
      </div>
      <div className='IconImages'>
        <a href="https://www.instagram.com/aakam360/" target="_blank" rel="noopener noreferrer">
        <img src={IconImage1} alt="Instagram" id="IconImage1" />
        </a>
        <a href="https://www.facebook.com/aakam360" target="_blank" rel="noopener noreferrer">
        <img src={IconImage2} alt="Facebook" id="IconImage2" />
        </a>
        <a href="https://x.com/aakam360?mx=2" target="_blank" rel="noopener noreferrer">
        <img src={IconImage3} alt="Twitter" id="IconImage3" />
        </a>
        <a href="https://www.linkedin.com/company/aakam360" target="_blank" rel="noopener noreferrer">
        <img src={IconImage4} alt="LinkedIn" id="IconImage4" />
        </a>

      
      </div>
    </footer>
  );
};

export default Footer;
