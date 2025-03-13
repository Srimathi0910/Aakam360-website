import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './styles.css'; 
import ApplyJobImage from "../src/img/Apply-Job-Image.jpg";


  const JobApplyForm = () => {
    const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      mobileNumber: "",
      role: "",
      resume: null,
      agreedToTerms: false,
    });
    const navigate = useNavigate();
  
    // Handle input change
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    };
  
    // Handle file change
    const handleFileChange = (e) => {
      setFormData({ ...formData, resume: e.target.files[0] });
    };
  
    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = new FormData();
      data.append("fullName", formData.fullName);
      data.append("email", formData.email);
      data.append("mobileNumber", formData.mobileNumber);
      data.append("role", formData.role);
      data.append("resume", formData.resume);
      data.append("agreedToTerms", formData.agreedToTerms);
  
      try {
        const response = await fetch("http://localhost:5000/api/job-applications", {
          method: "POST",
          body: data,
        });
  
        if (response.ok) {
          navigate("/submitted"); // ✅ Redirect to SuccessPage after submission
        } else {
          alert("Error submitting job application.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
  

  return (
    <section className='onboarding-form-container'>
      {/* Header Section */}
      <div className='Onboarding-Main-Container'>
      <div className='onboarding-form-header'>
        <h1>Be Part of Something Bigger  Work with Aakam360.</h1>
        <h3>
        Join Aakam360 and be part of an innovative, collaborative team driving real impact. Grow your career and make a difference with us!
        </h3>
      </div>

      {/* Image Section */}
      <div className='onboarding-form-image'>
        <img src={ApplyJobImage} alt="Industry Collaboration" className='OnboardingMainImages'/>
      </div>
      </div>

      {/* Form Section */}
      <div className="onboardingWrapper">
        
          <div className="onboardingform" style={{ height: "850px" }}>
          <div className='borderLine'></div>
          <form onSubmit={handleSubmit}>
      <h1>Shape Your Future with Aakam360</h1>
      <div className="formGrid1">
        <div className="inputBox">
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          <span>Full Name</span>
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
          <select className="Designation" name="role" value={formData.role} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Marketing Executive">Marketing Executive</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Software Engineer">Software Engineer</option>
          </select>
          <span style={{marginTop:"-15px"}}>Role</span>
        </div>
        <div className="inputBox" id="uploads">
          <input type="file" name="resume" onChange={handleFileChange} required />
          <span style={{marginTop:"-15px"}}>Upload Resume</span>
        </div>
        <div className="checkBox">
          <input type="checkbox" name="agreedToTerms" checked={formData.agreedToTerms} onChange={handleChange} />
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

export default JobApplyForm;
