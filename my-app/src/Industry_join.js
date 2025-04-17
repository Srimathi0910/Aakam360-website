import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './styles.css'; 
import OnboardingMainImage1 from "../src/img/Industry-Connect-Main.jpg";
import { Height } from '@mui/icons-material';
import Lottie from 'lottie-react';
import loadingAnimation from '../src/img/Loading.json'; // Adjust path based on your project


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
   const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let newErrors = {};

    // Required Fields Validation
    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== "agreedToTerms") {
        newErrors[key] = `${key.replace(/([A-Z])/g, " $1")} is required`;
      }
    });

    // Email Validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Mobile Number Validation
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile Number is required";
    } else if (!/^\d+$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Mobile Number must contain only digits";
    } else if (formData.mobileNumber.length !== 10) {
      newErrors.mobileNumber = "Mobile Number must be exactly 10 digits";
    } else if (/^[012345]/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Mobile Number cannot start with 0, 1, 2, 3, 4, or 5";
    }
    // Employee Size Validation
    if (formData.employeeSize && !/^\d+$/.test(formData.employeeSize)) {
      newErrors.employeeSize = "Employee size should be a number";
    }
    if (!formData.collaboratewithAakam.trim()) newErrors.collaboratewithAakam = "Domains are required";

  
    // Website Validation
    if (
      formData.companyWebsite &&
      !/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/.test(formData.companyWebsite)
    ) {
      newErrors.companyWebsite = "Invalid website URL";
    }

    // Terms & Conditions Validation
    if (!formData.agreedToTerms) {
      newErrors.agreedToTerms = "You must agree to the terms and conditions";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Run validation
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      alert(Object.values(newErrors)[0]); // Show first error in an alert
      return; // Stop the function execution if validation fails
    }
    
    setLoading(true);
  
    try {
      // Send email
      await axios.post('http://localhost:5000/sendmail-industry-join', formData);
  
      // Store data in the database
      await axios.post("http://localhost:5000/api/industry-join", formData);
      
      // Navigate to the submitted page
      navigate("/submitted");
  
      // Reset form data
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
        collaboratewithAakam:"",
        agreedToTerms: false,
      });
      
      // Clear errors after successful submission
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form"); // Show alert if there's an error
    } finally {
      setLoading(false); // Stop loading state
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
        
          <div className="onboardingform">
          <div className='borderLine'></div>
        
      
      <form onSubmit={handleSubmit}>
      <h1>Connect Your Industry With Aakam</h1>
      <div className="formGrid">
        {[
          { name: "firstName", type: "text", label: "First Name" },
          { name: "lastName", type: "text", label: "Last Name" },
          { name: "email", type: "email", label: "Email" },
          { name: "mobileNumber", type: "tel", label: "Mobile Number" },
          { name: "companyName", type: "text", label: "Company Name" },
          { name: "companyWebsite", type: "url", label: "Company Website" },
          { name: "employeeSize", type: "text", label: "Employee Size" },
          { name: "domains", type: "text", label: "Domains" },
        ].map(({ name, type, label }) => (
          <div className="inputBox" key={name}>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required
            />
            <span>{label}</span>
            {errors[name] && <p style={{ color: "red" }}>{errors[name]}</p>}
          </div>
        ))}

        <div className="inputBox">
          <textarea
            name="aboutCompany"
            value={formData.aboutCompany}
            onChange={handleChange}
            required
          ></textarea>
          <span>About Company</span>
          {errors.aboutCompany && <p style={{ color: "red" }}>{errors.aboutCompany}</p>}
        </div>
        <div className="inputBox">
          <textarea
            name="collaboratewithAakam"
            value={formData.collaborate}
            onChange={handleChange}
            required
          ></textarea>
          <span>How do you collaborate with Aakam?</span>
          {errors.collaboratewithAakam && <p style={{ color: "red" }}>{errors.collaboratewithAakam}</p>}
        </div>

        <div className="checkBox">
          <input
            type="checkbox"
            name="agreedToTerms"
            checked={formData.agreedToTerms}
            onChange={handleChange}
            required
          />
          <span>I agree to the terms and conditions</span>
          {errors.agreedToTerms && <p style={{ color: "red" }}>{errors.agreedToTerms}</p>}
        </div>
      </div>

      <div className="inputBox">
        {loading ? (
          <div className="lottie-loader">
            <Lottie animationData={loadingAnimation} loop={true} style={{ width: 60, height: 60 }} />
          </div>
        ) : (
          <input type="submit" value="Submit" />
        )}
      </div>
    </form>
          </div>
        </div>
      
    </section>
  );
};

export default Industry_join;
