import React from "react";
import { Link } from 'react-router-dom';
import { FaLightbulb, FaUsers, FaLaptopCode, FaBalanceScale, FaCode, FaBullhorn, FaPaintBrush, FaCogs } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

import careers from "../src/img/Career-Main-image.jpg";
import './styles.css';
import RoleImage1 from "../src/img/RoleImage1.jpg";
import RoleImage2 from "../src/img/RoleImage2.jpg";
import RoleImage3 from "../src/img/RoleImage3.jpg";
import RoleImage4 from "../src/img/RoleImage4.jpg";
import CareerVideos from "./CareerVideos";

const Career = () => {
  const benefits = [
    {
      icon: <FaLightbulb className="icon"/>,
      title: "Innovative Environment",
      description: "Work on cutting-edge technologies and bring your ideas to life."
    },
    {
      icon: <FaUsers className="icon" />,
      title: "Collaborative Culture",
      description: "Be a part of an inclusive and supportive team."
    },
    {
      icon: <FaLaptopCode className="icon" />,
      title: "Career Growth",
      description: "Access training, mentorship, and career advancement opportunities."
    },
    {
      icon: <FaBalanceScale className="icon"  />,
      title: "Work-Life Balance",
      description: "Flexible work culture with a focus on employee well-being."
    }
  ];

  const jobs = [
    {
      icon: <FaCode className="icon"  />,
      title: "Frontend Developer",
      department: "IT",
      location: "Remote",
      experience: "1-3 years",
    },
    {
      icon: <FaBullhorn className="icon" />,
      title: "Marketing Executive",
      department: "Marketing",
      location: "On-site",
      experience: "2+ years",
    },
    {
      icon: <FaPaintBrush className="icon" />,
      title: "UI/UX Designer",
      department: "Design",
      location: "Hybrid",
      experience: "1-5 years",
    },
    {
      icon: <FaCogs className="icon"/>,
      title: "Software Engineer",
      department: "Development",
      location: "On-site",
      experience: "3+ years",
    },
  ];
  const responsibilities = [
    {
      id: 1,
      responsibilities: [
        "Develop user-friendly and responsive websites.",
        "Collaborate with design teams to create intuitive UI.",
        "Ensure cross-browser compatibility and optimize application performance."
      ],
      imgs:RoleImage1,
    },
    {
      id: 2,
      responsibilities: [
        "Plan and execute marketing strategies to boost brand awareness.",
        "Manage social media campaigns and track performance.",
        "Coordinate with sales teams to generate leads and increase conversions."
      ],
      imgs:RoleImage2,
    },
    {
      id: 3,
      responsibilities: [
        "Design intuitive and engaging user interfaces.",
        "Conduct user research and usability testing.",
        "Collaborate with developers to ensure seamless integration of designs."
      ],
      imgs:RoleImage3
    },
    {
      id: 4,
      responsibilities: [
        "Write clean, efficient, and maintainable code.",
        "Collaborate with cross-functional teams to develop software solutions.",
        "Troubleshoot and resolve software defects in a timely manner."
      ],
      imgs:RoleImage4
    }
  ];
  const jobBenefits = [
    {
      id: 1,
      benefits: [
        "Work with modern frontend frameworks like React and Vue.",
        "Collaborate with design teams to bring UI/UX ideas to life.",
        "Flexible work hours and remote-friendly policies.",
        "Access to premium dev tools and regular code reviews."
      ]
    },
    {
      id: 2,
      benefits: [
        "Manage campaigns across social platforms and Google Ads.",
        "Performance bonuses and target-based incentives.",
        "Exposure to brand strategy and analytics tools.",
        "Attend marketing events, webinars, and training sessions."
      ]
    },
    {
      id: 3,
      benefits: [
        "Creative freedom using tools like Figma and Adobe XD.",
        "User research opportunities and feedback integration.",
        "Cross-functional collaboration with frontend teams.",
        "Portfolio-building and participation in design sprints."
      ]
    },
    {
      id: 4,
      benefits: [
        "Hands-on experience with full-stack development.",
        "Access to CI/CD tools and cloud infrastructure.",
        "Hackathons, certifications, and internal innovation events.",
        "Mentorship from senior developers and architects."
      ]
    }
  ];
  const videos = [
    'https://www.youtube.com/embed/dQw4w9WgXcQ',
    'https://www.youtube.com/embed/ysz5S6PUM-U',
    'https://www.youtube.com/embed/tgbNymZ7vqY',
    'https://www.youtube.com/embed/oUFJJNQGwhk'
  ];
  
  return (
    <div className="operations-container1">
      {/* Hero Section */}
      <div className="hero-section1">
        <img src={careers} alt="careers" className="hero-image" />
        <div className="hero-text">
          <h1>CAREER</h1>
          <h3>Looking to grow your career in a dynamic, innovative environment? Aakam360 offers exciting opportunities in the fields of technology, management, and research.</h3>
        </div>
      </div>

      {/* Job Listings Section */}
      <section className="why-join">
        <h2>Open Positions</h2>
        <div className="benefits-container">
          {jobs.map((job, index) => (
            <div key={index} className="benefit-card">
              {job.icon}
              <h3>{job.title}</h3>
              <p><strong>Department:</strong> {job.department}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Experience:</strong> {job.experience}</p>
              <button className="cta-btn" style={{color:"#ffffff"}}><Link to="/job-apply-form" className="clickable-div">Apply Now</Link></button>
            </div>
          ))}
        </div>
        {/* Arrow */}
        <div style={{ display: "flex", justifyContent: "center", gap: "300px", margin: "20px 0" }}>
  <FaArrowDown size={30} color="gray" />
  <FaArrowDown size={30} color="gray" />
  <FaArrowDown size={30} color="gray" />
  <FaArrowDown size={30} color="gray" />
</div>
        <div>
        <div className="benefits-container" >
      {responsibilities.map((role) => (
        <div key={role.id} className="benefit-card" >
          <img src={role.imgs} alt={`Role ${role.id}`} style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "50%",
          marginBottom: "10px",
          border:"3px solid black",
          boxShadow:"0px 0px 10px blue"
        }}></img>
          <h3>Responsibilities for Role </h3>
          <ul className="left-aligned-list">
            {role.responsibilities.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
        
      ))}
      
      
      
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "300px", margin: "20px 0" }}>
  <FaArrowDown size={30} color="gray" />
  <FaArrowDown size={30} color="gray" />
  <FaArrowDown size={30} color="gray" />
  <FaArrowDown size={30} color="gray" />
</div>
      <div>
        <CareerVideos />
      </div>
      {/* Arrow */}
      <div style={{ display: "flex", justifyContent: "center", gap: "300px", margin: "20px 0" }}>
  <FaArrowDown size={30} color="gray" />
  <FaArrowDown size={30} color="gray" />
  <FaArrowDown size={30} color="gray" />
  <FaArrowDown size={30} color="gray" />
</div>
      <div className="benefits-container" >
      {jobBenefits.map((role) => (
        <div key={benefits.id} className="benefit-card" >
          <h3>BENEFITS</h3>
          <ul className="left-aligned-list">
            {role.benefits.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
        
      ))}
      </div>
    </div>
      </section>

      {/* Why Join Aakam360 Section */}
      <section className="why-join">
        <h2>Why Join Aakam360?</h2>
        <div className="benefits-container">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              {benefit.icon}
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
        <Link to="/getaquote" className="cta-btn" style={{textDecoration:"none",color:"white",fontWeight:"bold"}}>
                        Get A Quote
                      </Link>
      </section>
    </div>
  );
};

export default Career;
