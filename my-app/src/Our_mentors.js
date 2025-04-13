import React from 'react'
import MentormainImage from '../src/img/Mentor-main-image.jpg';
import mentor1 from '../src/img/mentors/mentor1.jpg';
import mentor2 from '../src/img/mentors/mentor6.jpg';
import mentor3 from '../src/img/mentors/udaya-sankar.jpg';
import mentor4 from '../src/img/mentors/mentor2.jpg';
import mentor5 from '../src/img/mentors/anigrace.jpg';
import mentor6 from '../src/img/mentors/karthikeyan.jpg';
import mentor7 from '../src/img/mentors/suresh-sambantham.jpg';
import mentor8 from '../src/img/mentors/sivakumar.jpg';
import mentor9 from '../src/img/mentors/kavya.jpg';
import mentor10 from '../src/img/mentors/mentor12.jpg';
import mentor11 from '../src/img/mentors/mentor11.jpg';
import mentor12 from '../src/img/mentors/mentor7.jpg';
import mentor13 from '../src/img/mentors/pagu.jpg';
import mentor14 from '../src/img/mentors/kuppuraj.jpg';
import mentor15 from '../src/img/mentors/mentor5.jpg';
import mentor16 from '../src/img/mentors/mentor3.jpg';
import mentor17 from '../src/img/mentors/mentor4.jpg';
import mentor18 from '../src/img/mentors/sucindran .jpg';
import mentor19 from '../src/img/mentors/kishorekumar.jpg';
import mentor20 from '../src/img/mentors/sudharsan.jpg';
import mentor21 from '../src/img/mentors/sudhakar.jpg';
import IconImage4 from '../src/img/linkedin-image.png';
import './styles.css'; 


const mentors = [
    { id: 1, name: 'Mr. Thirumoorthy Arumugam', designation: 'Founder & Director aakam360', photo:mentor1,linkedin: 'https://in.linkedin.com/in/thirumoorthyarumugam'},
    { id: 2, name: 'Mr. Venkatesh Narayanaswamy', designation: 'Co - Founder aakam360', photo: mentor2 ,linkedin: 'https://in.linkedin.com/in/narayanaswamyvenkatesh'},
    { id: 3, name: 'Mr. Udaya Sankar', designation: 'Deputy Director NASSCOM', photo:mentor3,linkedin: 'https://www.linkedin.com/in/udaya-sankar-5ab28031'},
    { id: 4, name: 'Mr. Ramesh Kavil', designation: 'Founder & CEO Second Sigmoid & General Manager of Acabes', photo: mentor4,linkedin: 'https://www.linkedin.com/in/rameshkavil/' },
    { id: 5, name: 'Ms. Anigrace kalaimathi', designation: 'Registrar Tamilnadu Nursing Council', photo:mentor5,linkedin: 'https://www.linkedin.com/in/anigrace-kalaimathi-6a076815'},
    { id: 6, name: 'Mr. Karthikeyan', designation: 'Anchor Puthiya Thalaimurai Tv', photo: mentor6,linkedin: 'https://www.linkedin.com/in/karthikeyan-ravi-27a160193/'},
    { id: 7, name: 'Mr. Suresh Sambandam', designation: 'Founder & CEO Kissflow', photo:mentor7,linkedin: 'https://www.linkedin.com/in/sureshsambandam/'},
    { id: 8, name: 'Mr. Sivakumar Sadayappan', designation: 'Founder & CEO BillingParadise', photo: mentor8,linkedin: 'https://www.linkedin.com/in/revenuecyclemasters/'},
    { id: 9, name: 'Ms. Kaviya Raj Kamaraj', designation: 'Founder & CEO Dreamdaa', photo:mentor9,linkedin: 'https://www.linkedin.com/in/kaviya-raj-kamaraj/'},
    { id: 10, name: 'Mr. Muthukumar Arumugam', designation: 'Founder & CEO Launchpad LLC', photo: mentor10,linkedin: 'https://www.linkedin.com/in/muthukumar-arumugam-9175b739/' },
    { id: 11, name: 'Dr. Dhatchana Moorthy', designation: 'Director & Head EinNext Bioscience', photo:mentor11,linkedin: 'https://www.linkedin.com/in/dhatchanamoorthy/'},
    { id: 12, name: 'Mr. Suresh Kumar G', designation: 'Founder & CEO Pepul', photo: mentor12,linkedin: 'https://www.linkedin.com/in/sureshceo/' },
    { id: 13, name: 'Mr. Pagutharivu Muthusamy', designation: 'CEO & Co-Founder Surface Insight Technologies', photo:mentor13,linkedin: 'https://www.linkedin.com/in/pagu/'},
    { id: 14, name: 'Mr. Sivakumar Kuppuraj', designation: 'Quality Assurance Engineering specialistThe great American financial group, Cincinnati, Ohio, USA', photo: mentor14,linkedin: 'https://www.linkedin.com/company/aakam360/' },
    { id: 15, name: 'Mr. Arun Prasad', designation: 'Senior Consultant Hexaware Technologies', photo:mentor15,linkedin: 'https://www.linkedin.com/in/arun-prasad-r-94ab6910b/'},
    { id: 16, name: 'Mr. Sriram Balasubramaniam', designation: 'Enterprise Cloud Architect Tata Consultancy Services', photo: mentor16 ,linkedin: 'https://www.linkedin.com/in/sriram-balasubramaniam-814b8536/'},
    { id: 17, name: 'Mr. Soumen Banerjee', designation: 'Delivery Partner Tata Consultancy Services', photo:mentor17,linkedin: 'https://www.linkedin.com/company/aakam360/'},
    { id: 18, name: 'Mr. Suchindran Ramachandran', designation: 'Chief Executive Officer K7 Computing', photo: mentor18,linkedin: 'https://www.linkedin.com/in/sucindran/'},
    { id: 19, name: 'Mr. Kishorekumar Chandrasekaran', designation: 'Founder & CEO FintechGie', photo:mentor19,linkedin: 'https://www.linkedin.com/in/kishorekumarceo/'},
    { id: 20, name: 'Mr. Sudarshan', designation: 'Founder & CEOSatnovations Private Limited', photo: mentor20 ,linkedin: 'https://www.linkedin.com/in/sudarshan-r-24311316/'},
    { id: 21, name: 'Mr. Sudhakar Annadurai ', designation: 'Founder & CEOGreefi Technologies', photo: mentor21,linkedin: 'https://www.linkedin.com/in/sudhakarannadurai/'}
  ];

const Our_mentors = () => {
  return (
    <div className="operations-container">
              {/* Hero Section */}
              <div className="hero-section">
                <img src={MentormainImage} alt="IoT" className="hero-image" />
                <div className="hero-text">
                  <h1>Pioneers guiding our way to success</h1>
                  <h3>Our experienced mentors are dedicated to helping you unlock your potential and achieve your goals, guiding you every step of the way towards a successful future.</h3>
                </div>
              </div>
              <h1>Our Mentors</h1>
        
        <div className="mentors-container">
            {mentors.map((mentor) => (
                <div className="mentor-card" key={mentor.id}>
                    <img src={mentor.photo} alt={mentor.name} className="mentor-photo" />
                    <h3 className="mentor-name">{mentor.name}</h3>
                    <p className="mentor-designation">{mentor.designation}</p>
                    <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer">
        <img src={IconImage4} alt="LinkedIn" id="IconImage4" />
      </a>
        </div>
      ))}
    </div>
        
    </div>
  )
}

export default Our_mentors
