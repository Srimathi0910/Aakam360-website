import React, { useState } from 'react';
import './styles.css'; 
import eventimgmain1 from '../src/img/Events/aakam360-inaguration.jpg';
import eventimgmain2 from '../src/img/Events/aakam360-inaguration2.jpg';
import eventimgmain3 from '../src/img/Events/aakam360-inaguration3.jpg';
import eventimgmain4 from '../src/img/Events/aakam360-inaguration4.jpg';
const Events2=()=>{
    return(
        <div className='event2'>
            <div className="slider-container">
              <div className="slider">
                <div className="slide">
                  <img src={eventimgmain1} alt="" />
                </div>
                <div className="slide">
                  <img src={eventimgmain2} alt="" />
                </div>
                <div className="slide">
                  <img src={eventimgmain3} alt="" />
                </div>
                <div className="slide">
                  <img src={eventimgmain4} alt="" />
                </div>
                  
              </div>
          </div>
          
          
      </div>
      
    )
}
export default Events2;