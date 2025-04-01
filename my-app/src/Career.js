// import React from "react";
// import careers from "../src/img/careers-aakam360.jpg";
// import data_analyst from "../src/img/Data_analyst_aakam360.jpg";
// import frontend from "../src/img/frontend_dev_aakam360.jpg";
// import product_manager from "../src/img/product_manager_aakam360.jpg";
// import "./styles.css";

// const Career = () => {

//   return (
//     // <div className="career-container">
//     //   <h1 className="career-heading">Careers</h1>
//     //   <div className="career-intro">
//     //     <div>
//     //     <img src={careers} alt="Career" className="career-img" />
//     //     </div>
//     //     <div>
//     //     <p className="career-text">
//     //       Looking to grow your career in a dynamic, innovative environment? Aakam360 offers exciting opportunities in the fields of technology, management, and research.
//     //     </p>
//     //     </div>
    
//     //   </div>
//     <div className="operations-container">
//           {/* Hero Section */}
//           <div className="hero-section">
//             <img src={careers} alt="careers" className="hero-image" />
//             <div className="hero-text">
//               <h1>Career</h1>
//               <h3>Looking to grow your career in a dynamic, innovative environment? Aakam360 offers exciting opportunities in the fields of technology, management, and research.</h3>
//             </div>
//           </div>
//       <h2 className="current-openings">Current Openings</h2>
//       <div className="Career_description">
//       <div style={{ backgroundColor: "#3639db" }} className="Career_description_content">
//           <h2>Front-End Developer</h2>
//           <ul>
//             <li>Location: Sankari, Salem</li>
//             <li>Responsibilities: Develop and maintain user-friendly websites.</li>
//             <li>Qualifications: Proficiency in HTML, CSS, JavaScript, and modern frameworks.</li>
//           </ul>
//         </div>
//         <div>
//           <img src={frontend} alt="frontend"  className="current-opening-images"/>
//         </div>
//       </div>
//       <div className="Career_description">
//         <div>
//           <img src={product_manager} alt="product_manager" />
//         </div>
//         <div style={{ backgroundColor: "#45ffa2" }} className="Career_description_content">
//           <h2>Product Manager</h2>
//           <ul>
//             <li>Location: Sankari, Salem</li>
//             <li>Responsibilities: Oversee product development and ensure alignment with business goals.</li>
//             <li>Qualifications: Experience in product management and agile methodology.</li>
//           </ul>
//         </div>
//       </div>
//       <div className="Career_description">
//           <div style={{ backgroundColor: "#ceab0e" }} className="Career_description_content">
//             <h2>Data Analyst</h2>
//             <ul>
//               <li>Location: Sankari, Salem</li>
//               <li>Responsibilities: Analyze data to provide insights for business decisions.</li>
//               <li>Qualifications: Strong skills in data analysis tools like Excel, SQL, and Python.</li>
//             </ul>
//           </div>
//           <div>
//             <img src={data_analyst} alt="data_analyst" />
//           </div>
//         </div>
        


      
//     </div>
//   );
// };

// export default Career;
import React from "react";
import { Link } from 'react-router-dom';
import { FaLightbulb, FaUsers, FaLaptopCode, FaBalanceScale, FaCode, FaBullhorn, FaPaintBrush, FaCogs } from "react-icons/fa";
import careers from "../src/img/Career-Main-image.jpg";
import './styles.css';

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
