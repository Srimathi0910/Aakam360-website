import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; 
import OnboardingImage1 from "../src/img/Onboarding-Industry-Connect.jpg";
import OnboardingImage2 from "../src/img/Onboarding-Institution-Connect.jpg";
import OnboardingImage3 from "../src/img/Onboarding-Training-Partner.jpg";
import OnboardingImage4 from "../src/img/Onboarding-StartupsEntrepreneur.jpg";
import OnboardingImage5 from "../src/img/Onboarding-Apply-Intern.jpg";




const Onboarding = () => {
  return (
    <div className='onboarding'>
        <div>
        <Link to="/industry-apply-form" className="clickable-div">
            <img src={OnboardingImage1} alt="Industry Connect" />
            <h3>Industry Connect</h3>
            <button>Join Now</button>
        </Link>
        </div>
        <div>
        <Link to="/institution-apply-form" className="clickable-div">
            <img src={OnboardingImage2} alt="Institution Connect" />
            <h3>Institution Connect</h3>
            <button>Join Now</button>
        </Link>
        </div>
        <div>
        <Link to="/training-partner-apply-form" className="clickable-div">
            <img src={OnboardingImage3} alt="Training Partner" />
            <h3>Training Partner</h3>
            <button>Join Now</button>
        </Link>
        </div>
        <div>
        <Link to="/startup-apply-form" className="clickable-div">
            <img src={OnboardingImage4} alt="Startups/Entrepreneur" />
            <h3>Startups/Entrepreneur</h3>
            <button>Join Now</button>
        </Link>
        </div>
        <div>
        <Link to="/apply-internship-form" className="clickable-div">
            <img src={OnboardingImage5} alt="Apply Intern" />
            <h3>Apply Intern</h3>
            <button>Join Now</button>
        </Link>
        </div>
    </div>
    
  );
};

export default Onboarding;
