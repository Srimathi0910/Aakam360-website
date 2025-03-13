import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './styles.css'; 
import OnboardingMainImage3 from "../src/img/Training-Partner-Main.jpg";


const TrainingAndPartner = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    designation: "",
    location: "",
    district: "",
    state: "",
    domains: "",
    contact: "",
    specialization: "",
    portfolioLink: "",
    trainingDetails: "",
    termsAccepted: false,
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
    if (!formData.termsAccepted) {
      alert("You must agree to the terms and conditions.");
      return;
    }
    try {
      await axios.post("http://localhost:5000/api/training-partner", formData);
      navigate("/submitted"); 
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        designation: "",
        location: "",
        district: "",
        state: "",
        domains: "",
        contact: "",
        specialization: "",
        portfolioLink: "",
        trainingDetails: "",
        termsAccepted: false,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };
  return (
    <section className='onboarding-form-container'>
      {/* Header Section */}
      <div className='Onboarding-Main-Container'>
      <div className='onboarding-form-header'>
        <h1>Nurture your innovation with us.</h1>
        <h3>Join hands with Aakam to create a powerful ecosystem of knowledge exchange and educational advancement.</h3>
      </div>

      {/* Image Section */}
      <div className='onboarding-form-image'>
        <img src={ OnboardingMainImage3} alt="Training Collaboration"  className='OnboardingMainImages'/>
      </div>
      </div>
      {/* Form Section */}
      <div className="onboardingWrapper">
        
      <div className="onboardingform"  style={{ height: "1000px" }}>

          <div className='borderLine'></div>
          <form onSubmit={handleSubmit}>
      <h1>Become a Training Partner with Aakam</h1>
      <div className="formGrid">
        {[
          { name: "firstName", label: "First Name", type: "text" },
          { name: "lastName", label: "Last Name", type: "text" },
          { name: "email", label: "Email", type: "email" },
          { name: "location", label: "Location", type: "text" },
          { name: "district", label: "District", type: "text" },
          { name: "state", label: "State", type: "text" },
          { name: "domains", label: "Domains", type: "text" },
          { name: "contact", label: "Contact", type: "tel" },
          { name: "specialization", label: "Specialization", type: "text" },
          { name: "portfolioLink", label: "Portfolio Link", type: "url" },
        ].map((field) => (
          <div className="inputBox" key={field.name}>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required
            />
            <span>{field.label}</span>
          </div>
        ))}

        {/* Designation Dropdown */}
        <div className="inputBox">
          <select name="designation" value={formData.designation} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Corporate Trainer">Corporate Trainer</option>
            <option value="Freelancer">Freelancer</option>
            <option value="Certified Trainer">Certified Trainer</option>
          </select>
          <span style={{marginTop:"-15px"}}>Designation</span>
        </div>

        {/* Training Details Textarea */}
        <div className="inputBox">
          <textarea
            name="trainingDetails"
            value={formData.trainingDetails}
            onChange={handleChange}
            required
          ></textarea>
          <span>About Training Details:</span>
        </div>

        {/* Terms and Conditions Checkbox */}
        <div className="checkBox">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
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

export default TrainingAndPartner;
