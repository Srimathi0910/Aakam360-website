import React from 'react';
import PartnerMainImage from "../src/img/Partner-main-image.jpg";
import partner1 from '../src/img/partners/k7-image.jpg';
import partner2 from '../src/img/partners/second-sigmoid-image.jpg';
import partner3 from '../src/img/partners/dreamdaa-image.jpg';
import partner4 from '../src/img/partners/inn2.png';
import partner5 from '../src/img/partners/fintechgie-image.jpg';
import partner6 from '../src/img/partners/greefi-image.jpg';
import partner7 from '../src/img/partners/e2-info-image.jpg';
import partner8 from '../src/img/partners/pepul-image.jpg';
import partner9 from '../src/img/partners/geekonomy-image.jpg';
import partner10 from '../src/img/partners/satnovations-image.jpg';
import partner11 from '../src/img/partners/focus-image.jpg';
import partner12 from '../src/img/partners/skillsda-image.jpg';



const Our_partners = () => {
  return (
    <div className='Our_partners' >
        <div className="operations-container">
              <div className="hero-section">
                <img src={PartnerMainImage} alt="PartnerMainImage" className="hero-image" />
                <div className="hero-text">
                  <h1>Want to be a global change-maker? Join our team.</h1>
                  <h3>We have established relationships with a wide range of industry partners, from small startups to large multinational corporations</h3>
                </div>
              </div>
        </div>
        <h1 className='aboutus-heading'>Our Partners</h1>
        <div className='partner_images'>
            <div><img src={partner1} alt="" className='partner_image1'/></div>
            <div><img src={partner2} alt="" /></div>
            <div><img src={partner3} alt="" /></div>
            <div><img src={partner4} alt="" /></div>
            <div><img src={partner5} alt="" /></div>
            
            <div><img src={partner6} alt="" /></div>
           <div><img src={partner7} alt="" /></div> 
            <div><img src={partner8} alt=""  /></div>
            <div><img src={partner9} alt=""   /></div>
            <div><img src={partner10} alt=""  /></div>
            <div><img src={partner11} alt="" /></div>
            <div><img src={partner12} alt="" /></div>
            
            

        </div>
    </div>
  )
}

export default Our_partners
