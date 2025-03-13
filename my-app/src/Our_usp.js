import React from 'react';
import uspmainImage from '../src/img/usp-main-image.jpg';
import uspImage1 from  '../src/img/usp-Future-Demand-Skill.jpg';
import uspImage2 from  '../src/img/usp-Early-Mapping.jpg';
import uspImage3 from  '../src/img/usp-Bring-Together.jpg';




const Our_usp = () => {
  return (
    <div>
        <div className="operations-container">
                      <div className="hero-section">
                        <img src={uspmainImage} alt="uspmainImage" className="hero-image" />
                        <div className="hero-text">
                          <h1>Unleashing creativity through our collaboration.</h1>
                          <h3>At Aakam, we pride ourselves on our unique approach to education that emphasizes innovation, creativity, and entrepreneurship.</h3>
                        </div>
                      </div>
                </div>
                <h1 className='aboutus-heading'>Our Unique Selling Point</h1>
        <div className='onboarding' style={{gap:'100px'}}>
                    
                          <div>
                              <img src={uspImage1} alt="Future Demand Skill" />
                              <h3>Future Demand Skill</h3>
                              <p>Equipping students with the tools and expertise needed to thrive in a rapidly-evolving job market.</p>
                          </div>
                          <div>
                              <img src={uspImage2} alt="Early Mapping" />
                              <h3>Early Mapping</h3>
                              <p>Charting a course for success by setting clear goals and defining a path forward.</p>
                          </div>
                          <div>
                              <img src={uspImage3} alt="Bring Together" />
                              <h3>Bring Together</h3>
                              <p>Fostering collaboration and synergy between students, faculty, and industry for a brighter future.</p>
                          </div>
            
                      </div>
        
      
    </div>
  )
}

export default Our_usp;
