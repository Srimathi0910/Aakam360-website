import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './styles.css'; 
import OnboardingMainImage3 from "../src/img/Training-Partner-Main.jpg";
import Lottie from 'lottie-react';
import loadingAnimation from '../src/img/Loading.json'; 


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
    const [loading, setLoading] = useState(false);
  
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let newErrors = {};

    // Required fields validation
    Object.keys(formData).forEach((key) => {
      if (key !== "termsAccepted" && !formData[key].trim()) {
        newErrors[key] = `${key.replace(/([A-Z])/g, " $1")} is required`;
      }
    });

    // Email validation
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Mobile number validation
   if (!formData.contact.trim()) {
         newErrors.contact = "Mobile Number is required";
       } else if (!/^\d+$/.test(formData.contact)) {
         newErrors.contact = "Mobile Number must contain only digits";
       } else if (formData.contact.length !== 10) {
         newErrors.contact = "Mobile Number must be exactly 10 digits";
       } else if (/^[012345]/.test(formData.contact)) {
         newErrors.contact = "Mobile Number cannot start with 0, 1, 2, 3, 4, or 5";
       }

    // Portfolio link validation (optional, but if provided, should be a valid URL)
    if (formData.portfolioLink && !/^https?:\/\/\S+$/.test(formData.portfolioLink)) {
      newErrors.portfolioLink = "Enter a valid URL";
    }

    // Terms acceptance validation
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
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
  
    if (!validateForm()) return; // Prevent submission if validation fails
    setLoading(true);
  
    try {
      // Send email (without showing an alert)
      await axios.post('http://localhost:5000/sendmail-training-partner', formData);
      
      // Store data in the database
      await axios.post("http://localhost:5000/api/training-partner", formData);
  
      // Navigate to the 'submitted' page
      navigate("/submitted"); 
  
      // Reset form after successful submission
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
  
      setErrors({}); // Clear any errors
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setLoading(false); // Stop loading state
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
        
      <div className="onboardingform">

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
            {errors[field.name] && <p style={{ color: "red" }}>{errors[field.name]}</p>}
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
          <span style={{ marginTop: "-15px" }}>Designation</span>
          {errors.designation && <p style={{ color: "red" }}>{errors.designation}</p>}
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
          {errors.trainingDetails && <p style={{ color: "red" }}>{errors.trainingDetails}</p>}
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
          {errors.termsAccepted && <p style={{ color: "red" }}>{errors.termsAccepted}</p>}
        </div>
      </div>

      <div className="inputBox">
        {loading ? (
          <div className="lottie-loader">
            <Lottie animationData={loadingAnimation} loop={true} style={{ width: 60, height: 60 }} />
          </div>
        ) : (
          <input type="submit" value="Apply" />
        )}
      </div>
    </form>
          </div>
        </div>
    </section>
  );
};

export default TrainingAndPartner;
