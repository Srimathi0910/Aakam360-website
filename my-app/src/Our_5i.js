import React from 'react';
import './styles.css';

import industry from "../src/img/our5i-1i.png";
import institution from "../src/img/our5i-2i.png";
import incubation from "../src/img/our5i-3i.png";
import innovation from "../src/img/our5i-4i.png";
import internship from "../src/img/our5i-5i.png";
import aakamfiveifullimage from '../src/img/fivei-full-image.png';


const Our_5i = () => {
  return (
    <section className="our_5i_body">
      <h1>Our 5i</h1>
      <div className='our_5i_split'>
        <div className='our_5i_split_content'>
        <img src={industry} alt="Industry"  className='our_5i_split_image'/> 
          <h2>Industry</h2>
          <p>We understand industry needs for hiring, we provide dedicated/open infrastructure with high amenities.</p>
        </div>

        <div className='our_5i_split_content'>
        <img src={institution} alt="Institution"className='our_5i_split_image' />
          <h2>Institution</h2>
          <p>We have 2000+ student talent pools, 30+ live industry labs, 100+ research scholars for R&D with different industry knowledge.</p>
        </div>
        <div className='our_5i_split_content'>
        <img src={incubation} alt="Incubation" className='our_5i_split_image' />
          <h2>Incubation</h2>
          <p>We encourage building new ideas, and provide space for young budding entrepreneurs and hire talent for their demand.</p>
        </div>
        
        <div className='our_5i_split_content'>
        <img src={innovation} alt="Innovation"  className='our_5i_split_image'/>
          <h2>Innovation</h2>
          <p>We are providing innovative solutions to industrial problems and disrupting industry with game changing innovation.</p>
        </div>
        <div className='our_5i_split_content'>
        <img src={internship} alt="Internship" className='our_5i_split_image'/>
          <h2 >Internship</h2>
          <p>Students evaluate corporate culture, periodic enhancement of curriculum with internships.</p>
        </div>

  
      </div>
      <div>
        <img src={aakamfiveifullimage} alt="aakamfiveifullimage" style={{width:"700px",height:"700px",objectFit:"contain"}} />
      </div>
    </section>
  );
}

export default Our_5i;
