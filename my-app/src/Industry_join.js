import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './styles.css'; 
import OnboardingMainImage1 from "../src/img/Industry-Connect-Main.jpg";

const Industry_join = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    companyName: "",
    companyWebsite: "",
    employeeSize: "",
    domains: "",
    aboutCompany: "",
    agreedToTerms: false,
  });
   const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/industry-join", formData);
      navigate("/submitted");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        companyName: "",
        companyWebsite: "",
        employeeSize: "",
        domains: "",
        aboutCompany: "",
        agreedToTerms: false,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form");
    }
  };
  return (
    <section className='onboarding-form-container'>
      {/* Header Section */}
      <div className='Onboarding-Main-Container'>
      <div className='onboarding-form-header'>
        <h1>Nurture your innovation with us</h1>
        <h3>
          Unleash the potential of collaborative growth by partnering with Aakam 
          to drive innovation and progress within your industry.
        </h3>
      </div>

      {/* Image Section */}
      <div className='onboarding-form-image'>
        <img src={OnboardingMainImage1} alt="Industry Collaboration" className='OnboardingMainImages'/>
      </div>
      </div>

      {/* Form Section */}
      <div className="onboardingWrapper">
        
          <div className="onboardingform" style={{ height: "850px" }}>
          <div className='borderLine'></div>
          <form onSubmit={handleSubmit}>
      <h1>Connect Your Industry With Aakam</h1>
      <div className="formGrid">
        <div className="inputBox">
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          <span>First Name</span>
        </div>
        <div className="inputBox">
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
          <span>Last Name</span>
        </div>
        <div className="inputBox">
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <span>Email</span>
        </div>
        <div className="inputBox">
          <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
          <span>Mobile Number</span>
        </div>
        <div className="inputBox">
          <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />
          <span>Company Name</span>
        </div>
        <div className="inputBox">
          <input type="url" name="companyWebsite" value={formData.companyWebsite} onChange={handleChange} required />
          <span>Company Website</span>
        </div>
        <div className="inputBox">
          <input type="text" name="employeeSize" value={formData.employeeSize} onChange={handleChange} required />
          <span>Employee Size</span>
        </div>
        <div className="inputBox">
          <input type="text" name="domains" value={formData.domains} onChange={handleChange} required />
          <span>Domains</span>
        </div>
        <div className="inputBox">
          <textarea name="aboutCompany" value={formData.aboutCompany} onChange={handleChange} required></textarea>
          <span>About Company</span>
        </div>
        <div className="checkBox">
          <input type="checkbox" name="agreedToTerms" checked={formData.agreedToTerms} onChange={handleChange} required />
          <span>I agree to the terms and conditions</span>
        </div>
      </div>
      <div className="inputBox">
        <input type="submit" value="Apply" />
      </div>
    </form>
          </div>
        </div>
      
    </section>
  );
};

export default Industry_join;
