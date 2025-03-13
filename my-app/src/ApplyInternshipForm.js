import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './styles.css'; 
import OnboardingMainImage5 from "../src/img/Apply-Intern-Main.jpg";


const ApplyInternshipForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    college: "",
    degree: "",
    graduationYear: "",
    technicalSkills: "",
    internshipDomain: "",
    availability: "",
    resume: null,
    reason: "",
    termsAccepted: false,
  });
  
  const navigate = useNavigate(); // Initialize navigate function
  
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
  
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });
  
    try {
      const response = await axios.post("http://localhost:5000/apply", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
  
      // alert(response.data.message);
  
      // Clear the form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        college: "",
        degree: "",
        graduationYear: "",
        technicalSkills: "",
        internshipDomain: "",
        availability: "",
        resume: null,
        reason: "",
        termsAccepted: false,
      });
  
      // Redirect to the submitted page
      navigate("/submitted");
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Error submitting application");
    }
  };

  return (
    <section className='onboarding-form-container'>
      {/* Header Section */}
      <div className='Onboarding-Main-Container'>

      <div className='onboarding-form-header'>
        <h1>Kickstart Your Career with Aakam</h1>
        <h3>Gain hands-on experience and work on real-world projects with industry experts.</h3>
      </div>

      {/* Image Section */}
      <div className='onboarding-form-image'>
        <img src={OnboardingMainImage5} alt="Internship Program"   className='OnboardingMainImages'/>
      </div>
      </div>

      {/* Form Section */}
      <div className="onboardingWrapper">
  <div className="onboardingform"  style={{ height: "1000px" }}>
    <div className="borderLine"></div>
    <form onSubmit={handleSubmit}>
      <h1>Apply for an Internship and Grow with Aakam360</h1>
      <div className="formGrid">
        {[
          { label: "First Name", name: "firstName", type: "text" },
          { label: "Last Name", name: "lastName", type: "text" },
          { label: "Email", name: "email", type: "email" },
          { label: "Contact Number", name: "contactNumber", type: "tel" },
          { label: "College/University Name", name: "college", type: "text" },
          { label: "Degree Program", name: "degree", type: "text" },
          { label: "Year of Graduation", name: "graduationYear", type: "text" },
          { label: "Technical Skills", name: "technicalSkills", type: "text" },
          { label: "Availability (Start Date - End Date)", name: "availability", type: "text" },
          { label: "Why do you want to intern with us?", name: "reason", type: "text" },
        ].map(({ label, name, type }) => (
          <div className="inputBox" key={name}>
            <input type={type} name={name} value={formData[name]} onChange={handleChange} required />
            <span>{label}</span>
          </div>
        ))}

        <div className="inputBox">
          <select name="internshipDomain" value={formData.internshipDomain} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Web Development">Web Development</option>
            <option value="Data Science">Data Science</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="AI/ML">AI/ML</option>
            <option value="Marketing">Marketing</option>
          </select>
          <span>Preferred Internship Domain</span>
        </div>

        <div className="inputBox" >
          <input type="file" name="resume" onChange={handleChange} required />
          <span style={{marginTop:"-15px"}}>Upload Resume</span>
        </div>

        <div className="checkBox">
          <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
          <span>I agree to the terms and conditions</span>
        </div>
      </div>

      <div className="inputBox submitBox">
        <input type="submit" value="Apply" />
      </div>
    </form>
  </div>
</div>

    </section>
  );
};

export default ApplyInternshipForm;
