import React from 'react';
import './styles.css';
import { useTheme } from './ThemeContext'; 
import Header from'./Header.js';
import  Hero_section from './Hero_section';
import  Our_5i from './Our_5i';
import Career from './Career';
import Technology from'./Technology';
import Feedback from './Feedback';
import Chatbot from './Chatbot.js';
import ApplyInternship from './ApplyInternship.js';
// import Footer from './Footer.js';
import Initiatives from './Initiatives.js';
import Onboarding from './Onboarding.js';
import Information from './Information.js';
import WhyChooseUs from'./WhyChooseUs';
import Message from './Message.js';




const Allone = () => {
  return (
    <div> 

      < Hero_section/>
      <Our_5i/>
      <Career />
      <Technology />
      <ApplyInternship />
      <Initiatives />
      <Information/>
      <Onboarding />
      <WhyChooseUs/>
      <Chatbot />
      <Message/>

      
    </div>
  );
};

export default Allone;