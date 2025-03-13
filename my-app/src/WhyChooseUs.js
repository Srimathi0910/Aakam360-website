import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const features = [
  {
    title: " Cutting-edge insights",
    description:
      "In today's rapidly evolving industries, staying ahead requires more than just keeping up with trends—it demands a deep understanding of market shifts, technological advancements, and consumer behavior. At Aakam360, we provide cutting-edge insights that help businesses, entrepreneurs, and professionals navigate these changes with confidence.",
  },
  {
    title: "Expert mentorship",
    description:
      "At Aakam360, we believe that the right guidance can make all the difference in achieving success. That’s why we connect you with seasoned professionals and industry experts who bring years of experience and deep domain knowledge. Our mentors provide personalized guidance, strategic insights, and practical advice to help you navigate challenges, refine your skills, and accelerate your growth.",
  },
  {
    title: " Real-time solutions",
    description:
      "In a fast-paced and competitive world, businesses and professionals need instant, effective solutions to overcome challenges and seize opportunities. At Aakam360, we provide real-time solutions that address industry-specific needs through data-driven insights, automation tools, and expert guidance.",
  },
  {
    title: "A dynamic ecosystem",
    description:
      "Aakam360 fosters a dynamic ecosystem where innovation, collaboration, and growth thrive. Our platform connects industry experts, businesses, entrepreneurs, and learners, creating an interconnected network that encourages knowledge sharing, skill development, and strategic partnerships.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="WhyChooseUs-whole-content">
      {/* Main Content Section */}
      <div className="WhyChooseUs-main-content">
        <h1>Why Choose Aakam360?</h1>
        <p>
          At Aakam360, we bridge the gap between innovation and practical solutions. Our platform is designed to empower individuals, businesses, and organizations by providing cutting-edge insights, expert mentorship, and real-time solutions tailored to evolving industry needs.
        </p>
      </div>

      {/* Features Section */}
      <section className="WhyChooseUs-sub-content">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default WhyChooseUs;
