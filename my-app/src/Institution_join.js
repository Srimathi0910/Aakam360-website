import React from 'react';
import './styles.css'; 
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import OnboardingMainImage2 from "../src/img/Institution-Connect-Main.jpg";


const Institution_join = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    designation: "",
    institutionName: "",
    location: "",
    district: "",
    state: "",
    domains: "",
    email: "",
    mobileNumber: "",
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
      await axios.post("http://localhost:5000/api/institution-join", formData);
      navigate("/submitted"); 
      setFormData({
        firstName: "",
        lastName: "",
        designation: "",
        institutionName: "",
        location: "",
        district: "",
        state: "",
        domains: "",
        email: "",
        mobileNumber: "",
        termsAccepted: false,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <section className='onboarding-form-container'>
      <div className='Onboarding-Main-Container'>
      {/* Header Section */}
      <div className='onboarding-form-header'>
        <h1>Nurture your innovation with us.</h1>
        <h3>
          Join hands with Aakam to create a powerful ecosystem of knowledge exchange and educational advancement.
        </h3>
      </div>

      {/* Image Section */}
      <div className='onboarding-form-image'>
        <img src={OnboardingMainImage2} alt="Institution Collaboration" className='OnboardingMainImages' />
      </div>
      </div>

      {/* Form Section */}
      <div className="onboardingWrapper">
        
          <div className="onboardingform" style={{ height: "900px" }}>
          <div className='borderLine'></div>
          <form onSubmit={handleSubmit}>
      <h1>Connect Your Institution With Aakam</h1>
      <div className="formGrid">
        {[
          { name: "firstName", label: "First Name" },
          { name: "lastName", label: "Last Name" },
          { name: "designation", label: "Designation" },
          { name: "institutionName", label: "Institution Name" },
          { name: "location", label: "Location" },
          { name: "district", label: "District" },
          { name: "state", label: "State" },
          { name: "domains", label: "Domains" },
          { name: "email", label: "Email", type: "email" },
          { name: "mobileNumber", label: "Mobile Number", type: "tel" },
        ].map((field) => (
          <div className="inputBox" key={field.name}>
            <input
              type={field.type || "text"}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required
            />
            <span>{field.label}</span>
          </div>
        ))}
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
      <div className="inputBox submitBox">
        <input type="submit" value="Apply" />
      </div>
    </form>
          </div>
        </div>
    </section>
  );
};

export default Institution_join;
