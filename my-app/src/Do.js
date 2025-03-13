import React from 'react'
import './styles.css';
import whatwedo from  '../src/img/what-we-do-image-1.jpg';
import whatwedo2 from  '../src/img/what-we-do-image-2.jpg';
import whatWeDoImage1 from "../src/img/Industry-Knowledge.jpg";
import whatWeDoImage2 from "../src/img/Live-Experience.jpg";
import whatWeDoImage3 from "../src/img/Training.jpg";
import whatWeDoImagee4 from "../src/img/Corporate-Awareness.jpg";
import whatWeDoImage5 from "../src/img/Live-Client-Interactions.jpg";





const Do = () => {
  return (
    <div className="operations-container">
          {/* Hero Section */}
          <div className="hero-section">
            <img src={whatwedo} alt="Healthcare" className="hero-image fade-in" />
            <div className="hero-text">
              <h1>What We Do</h1>
            </div>
            
          </div>
          <div className='empty'></div>
          <div className='what-we-do-content'>
            <div className='what-we-do-content1'>
                <h1>Your Trusted Partner for Innovative  Solutions</h1>
                <p>At Aakam360, we specialize in delivering cutting-edge software solutions that empower businesses to thrive in today's digital landscape. From concept to deployment, our team of experienced developers, designers, and project managers work collaboratively to bring your vision to life.</p>
            </div>
            <div>
                <img src={whatwedo2} alt="" className='what-we-do-image2' />
            </div>
          </div>
          <h2 className='aboutus-heading'>Students Benefits</h2>
          <div className='onboarding' style={{marginTop:"50px"}}>
            
                  <div>
                      <img src={whatWeDoImage1} alt="Industry Connect" />
                      <h3>Industry Knowledge</h3>
                      <p>We Enable students to acquire Industry knowledge</p>
                  </div>
                  <div>
                      <img src={whatWeDoImage2} alt="Institution Connect" />
                      <h3>Live Experience</h3>
                      <p>Incorporating Industrial standards to curriculum</p>
                  </div>
                  <div>
                      <img src={whatWeDoImage3} alt="Training Partner" />
                      <h3>Training</h3>
                      <p>Disruptive skill based training models</p>
                  </div>
                  <div>
                      <img src={whatWeDoImagee4} alt="Startups/Entrepreneur" />
                      <h3>Corporate Awareness</h3>
                      <p>Enriching knowledge and building understanding about the corporate world for success</p>
                  </div>
                  <div>
                      <img src={whatWeDoImage5} alt="Apply Intern" />
                      <h3>Live Client Interactions</h3>
                      <p>Real-world experience to sharpen skills and build lasting professional relationships</p>
                  </div>
              </div>
    </div>
  )
}

export default Do
