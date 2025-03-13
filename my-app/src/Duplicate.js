import React, { useState } from 'react';
import './styles.css';
import Header from './Header';
import Allone from './Allone'
import Our_5i from './Our_5i';
import Hero_section from'./Hero_section';
import Do from './Do';
import Our_mentors from './Our_mentors';
import Our_partners from './Our_partners';
import Our_usp from './Our_usp';
import Our_outcomes from './Our_outcomes';
import History from './History';
import Events from './Events';
import Career from './Career';
import Technology from './Technology';
import Feedback from './Feedback';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {
  const [activeComponent, setActiveComponent] = useState('Header');


  const renderComponent = () => {
    switch (activeComponent) {
      case 'Our 5i':
        return <Our_5i />;
      case 'Career':
        return <Career />;
      case 'Technology':
        return <Technology />;
      case 'Feedback':
        return <Feedback />;
      case 'Do':
        return <Do />;
      case 'Our_mentors':
        return <Our_mentors />;
      case 'Our_partners':
        return <Our_partners />;
      case 'Our_usp':
        return <Our_usp />;
      case 'Our_outcomes':
        return <Our_outcomes />; 
      case 'History':
        return <History />; 
      case 'Events':
        return <Events />;
      case 'Contact':
        return <Contact />;    
      default:
        return <Allone />; // Home section content
    }
  };

  return (
    <div>
      {/* Header Section */}
      <Header setActiveComponent={setActiveComponent} />
      {/* <Hero_section setActiveComponent={setActiveComponent} /> */}

      {/* Render the corresponding section */}
      <div className="content">
        {renderComponent()}
      </div>
    </div>

  );
};

export default App;








import React from 'react';
import './styles.css';
import img from "../src/img/aakam360-logo1.png";

const Header = ({ setActiveComponent }) => {
  return (
    <div>
      <header>
        <div className="logo">
          <img src={img} alt="aakam360" width="220px" height="80px" />
        </div>
        <nav>
          <ul className="menu">
            <li><a href="#" onClick={() => setActiveComponent('Home')}>Home</a></li>
            <li><a href="#" onClick={() => setActiveComponent('Our 5i')}>Our 5i</a></li>
            <li><a href="#" onClick={() => setActiveComponent('Career')}>Careers</a></li>
            <li><a href="#" onClick={() => setActiveComponent('Technology')}>Technology</a></li>
            <li><a href="#" onClick={() => setActiveComponent('Feedback')}>Feedback</a></li>
            <li className="dropdown">
              <a href="#">About Us &#9662;</a>
              <ul className="dropdown-content">
                <li><a href="#" onClick={() => setActiveComponent('Do')}>What We Do</a></li>
                <li><a href="#" onClick={() => setActiveComponent('Our_mentors')}>Our Mentors</a></li>
                <li><a href="#" onClick={() => setActiveComponent('Our_partners')}>Our Partners</a></li>
                <li><a href="#"  onClick={() => setActiveComponent('Our_usp')}>Our USP</a></li>
                <li><a href="#" onClick={() => setActiveComponent('Our_outcomes')}>Outcomes</a></li>
              </ul>
            </li>
            <li><a href="#"  onClick={() => setActiveComponent('History')}>History</a></li>
            <li><a href="#" onClick={() => setActiveComponent('Events')}>Events</a></li>
            <li><a href="#" onClick={() => setActiveComponent('Contact')}>Contact Us</a></li>
      
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;











