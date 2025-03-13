import React from 'react';
import './styles.css';
import ServiceImage from '../src/img/Services-Image.jpg';
import ServiceImage1 from '../src/img/Service4-Image-1.jpg';
import ServiceImage2 from '../src/img/Service4-Image-2.jpg';

const services = [
  {
    title: "One-on-One Mentorship Programs",
    description:
      "Personalized mentorship can make a significant difference in career growth. Aakam360 offers one-on-one mentorship programs where individuals receive tailored guidance from industry experts. Our mentors provide insights into career paths, skill development, and industry trends. Whether it's refining technical skills, improving leadership abilities, or setting career goals, our mentorship programs help individuals gain confidence and clarity in their professional pursuits.",
  },
  {
    title: "Career Counseling and Job Placement Assistance",
    description:
      "Choosing the right career path can be challenging, and that’s where our career counseling services come in. Aakam360 provides expert guidance to help individuals identify their strengths, interests, and career opportunities. We offer resume-building support, interview preparation, and job placement assistance, ensuring candidates are well-prepared to enter the workforce. Our strong industry connections enable us to match individuals with the right job opportunities based on their skills and aspirations.",
  },
  {
    title: "Internship Opportunities with Industry Experts",
    description:
      "Hands-on experience is crucial for career development. Aakam360 collaborates with industry leaders to provide internship opportunities for students and professionals. These internships offer real-world exposure, practical knowledge, and the chance to work on live projects. By gaining industry experience and networking with professionals, interns enhance their employability and build a strong foundation for their future careers.",
  },
];

const Services4 = () => {
  return (
    <div className="operations-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={ServiceImage1} alt="Healthcare" className="hero-image fade-in" />
        <div className="hero-text">
          <h1>Mentorship & Career Guidance</h1>
        </div>
      </div>

      <div className="empty"></div>

      {/* What We Do Content */}
      <div className="what-we-do-content">
        <div className="what-we-do-text">
          <h2 style={{ color: "#000" }}>Mentorship & Career Guidance</h2>
          <p>
          Aakam360 provides personalized mentorship and career guidance to help individuals navigate their professional journeys. Our goal is to bridge the gap between academic learning and industry requirements by offering one-on-one mentorship, career counseling, and internship opportunities. By connecting aspiring professionals with experienced mentors and industry experts, we empower them to make informed career decisions and achieve success.
          </p>
        </div>
        <div className="what-we-do-image-container">
          <img src={ServiceImage2} alt="Innovative Solutions" className="what-we-do-image2" />
        </div>
      </div>

      {/* Why Choose Us Section */}
<div className="WhyChooseUs-whole-content" style={{marginTop:"-200px",backgroundImage: `url(${ServiceImage})` }}>
        {/* Features Section */}
        <section className="WhyChooseUs-sub-content">
          {services.map((services, index) => (
            <div key={index} className="feature-card">
              <h3>{services.title}</h3>
              <p>{services.description}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Services4;
