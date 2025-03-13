import React from 'react';
import './styles.css'; 
import InitiativeMainImage from '../src/img/Initiatives-Image.jpg';
import InitiativeImage1 from '../src/img/Industry-Institution-Connect.jpg';
import InitiativeImage2 from '../src/img/Infrastructure-to-Asset.jpg';
import InitiativeImage3 from '../src/img/Research-and-Consulting.jpg';


const Initiatives = () => {
  return (
<div 
  className="operations-container2" 
  style={{ backgroundImage: `url(${InitiativeMainImage})` }}
>
      <div className="content">
        <h1 style={{color:"#333"}}>Our Initiatives</h1>
      <div className="services_1">
        <div className="service-card_1">
          <h3>Industry Institution Connect</h3>
          <p>Aakam links industries and institutions to provide students with real-world experiences, driving innovation.</p>
          <img src={InitiativeImage1} alt="Industry Institution Connect"  className='InitiativesImages'/>

        </div>

        <div className="service-card_1">
          <h3>Infrastructure to Asset</h3>
          <p>Aakam transforms infrastructure into valuable assets, maximizing returns, enhancing efficiency, and fueling sustainable growth.</p>
          <img src={InitiativeImage2} alt="Infrastructure to Asset" className='InitiativesImages' />

        </div>

        <div className="service-card_1">
          <h3>Research and Consulting</h3>
          <p>Hybrid cloud allows enterprises to continue digital transformation while ensuring compliance with evolving regulatory requirements.</p>
          <img src={InitiativeImage3} alt="Research and Consulting"className='InitiativesImages' />

        </div>
      </div>
      </div>

      {/* Bottom Image */}

    </div>
  );
};

export default Initiatives;
