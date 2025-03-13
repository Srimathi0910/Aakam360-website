import React from "react";
import { Link } from 'react-router-dom';
import TechnologyImage1 from '../src/img/Technology-image-1.jpg';
import TechnologyImage2 from '../src/img/Technology-AI.jpg';
import TechnologyImage3 from '../src/img/Technology-Blockchain.jpg';
import TechnologyImage4 from '../src/img/Technology-IOT.jpg';
import TechnologyImage5 from '../src/img/Technology-Cloud.jpg';

import "./styles.css";

const Technology = () => {
  return (
    <div>
    <div className="hero-content">
      <div>
          <h1>
            Revolutionizing <span>Technology</span> Solutions
          </h1>
          <p>
            Cutting-edge tools and technologies to drive your business forward.
          </p>
          <Link to="/LearnMore" className="cta-btn1">Learn More</Link>
       </div>
      {/* <div>
          <img src={TechnologyImage1} alt="" />
      </div> */}
    </div>
    <div className="grid-container">
      
      <div className="grid-item AI">
        <h2>Artificial Intelligence</h2>
        <p>
        At Aakam360, Artificial Intelligence (AI) lies at the core of our mission to revolutionize businesses. Leveraging cutting-edge AI technologies, we design solutions that help organizations automate processes, derive actionable insights, and enhance decision-making.
        </p>
      </div>
      <div>
        <img src={TechnologyImage3} alt="" />
      </div>
      <div className="grid-item IOT">
        <h2>Internet of Things (IoT)</h2>
        <p>
        At Aakam360, we harness the Internet of Things (IoT) to create interconnected systems that streamline operations, reduce costs, and improve efficiency. Our IoT-enabled solutions help businesses monitor, control, and analyze physical devices remotely.
        </p>
      </div>
      <div>
        <img src={TechnologyImage5} alt="" />
      </div>
      <div>
        <img src={TechnologyImage2} alt="" />
      </div>
      <div className="grid-item Blockchain">
        <h2>Blockchain</h2>
        <p>
        Aakam360 harnesses the transformative power of blockchain technology to ensure transparency, security, and efficiency in business operations. By integrating blockchain into our solutions, we empower businesses with decentralized systems.
        </p>
      </div>
      <div>
        <img src={TechnologyImage4} alt="" />
      </div>
      
      <div className="grid-item cloud">
        <h2>Cloud Computing</h2>
        <p>
        Cloud computing forms the backbone of Aakam360's scalable and efficient digital solutions. By leveraging the power of the cloud, we help businesses achieve agility, cost-efficiency, and global reach. Our cloud-first approach ensures seamless integration, enhanced security.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Technology;
