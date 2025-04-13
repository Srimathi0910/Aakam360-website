import React from 'react';
import './styles.css'; 
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import OnboardingMainImage4 from "../src/img/StartupsEntrepreneur-Main.jpg";
import{ useRef } from "react";
import Lottie from 'lottie-react';
import loadingAnimation from '../src/img/Loading.json';


const StartupsForm = () => {
  const navigate = useNavigate(); // Initialize navigation
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    designation: "",
    startupName: "",
    website: "",
    registrationNumber: "",
    establishmentYear: "",
    startupStage: "",
    industrySector: "",
    location: "",
    district: "",
    state: "",
    fundingStatus: "",
    collaboration: "",
    support: "",
    pitchDeck: null,
    termsAccepted: false,
  });
    const [loading, setLoading] = useState(false);
  
  const fileInputRef = useRef(null);
  const validate = () => {
    let tempErrors = {};
  
    if (!formData.firstName.trim()) tempErrors.firstName = "First Name is required.";
    if (!formData.lastName.trim()) tempErrors.lastName = "Last Name is required.";
  
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      tempErrors.email = "Invalid email format.";
    }
  
     // Mobile number validation
   if (!formData.contact.trim()) {
    tempErrors.contact = "Mobile Number is required";
  } else if (!/^\d+$/.test(formData.contact)) {
    tempErrors.contact = "Mobile Number must contain only digits";
  } else if (formData.contact.length !== 10) {
    tempErrors.contact = "Mobile Number must be exactly 10 digits";
  } else if (/^[012345]/.test(formData.contact)) {
    tempErrors.contact = "Mobile Number cannot start with 0, 1, 2, 3, 4, or 5";
  }
    
  
    if (!formData.designation.trim()) tempErrors.designation = "Designation is required.";
    if (!formData.startupName.trim()) tempErrors.startupName = "Startup Name is required.";
  
    if (!formData.website.trim()) {
      tempErrors.website = "Website is required.";
    } else if (!/^(https?:\/\/)?([\w\d\-_]+)\.([a-z]{2,})(\/[\w\d\-_]*)*\/?$/.test(formData.website)) {
      tempErrors.website = "Invalid website URL.";
    }
  
    if (!formData.registrationNumber.trim()) {
      tempErrors.registrationNumber = "Startup Registration Number is required.";
  } else if (isNaN(formData.registrationNumber)) {
      tempErrors.registrationNumber = "Startup Registration Number must be a number.";
  }
  
  
    if (!formData.establishmentYear.trim()) {
      tempErrors.establishmentYear = "Year of Establishment is required.";
    } else if (!/^\d{4}$/.test(formData.establishmentYear)) {
      tempErrors.establishmentYear = "Invalid year format (YYYY).";
    }
  
    if (!formData.startupStage) tempErrors.startupStage = "Please select Startup Stage.";
    if (!formData.industrySector.trim()) tempErrors.industrySector = "Industry Sector is required.";
    if (!formData.location.trim()) tempErrors.location = "Location is required.";
    if (!formData.district.trim()) tempErrors.district = "District is required.";
    if (!formData.state.trim()) tempErrors.state = "State is required.";
  
    if (!formData.fundingStatus) tempErrors.fundingStatus = "Please select Funding Status.";
    if (!formData.collaboration.trim()) tempErrors.collaboration = "Collaboration details are required.";
    if (!formData.support.trim()) tempErrors.support = "Expected Support from Aakam is required.";
  
    if (!formData.pitchDeck) tempErrors.pitchDeck = "Pitch Deck is required.";
    if (!formData.termsAccepted) tempErrors.termsAccepted = "You must agree to the terms.";
    if (formData.pitchDeck) {
      const allowedFormats = ["application/pdf", 
                              "application/vnd.openxmlformats-officedocument.wordprocessingml.document", 
                              "application/msword"];
      if (!allowedFormats.includes(formData.pitchDeck.type)) {
        alert("Invalid file format. Please upload a PDF or DOCX file.");
        return;
      }
    }
  
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0; // Return true if no errors
  };
   
    const handleFileChange1 = (e) => {
      const file = e.target.files[0];
      const maxSize = 500 * 1024; // 500 KB in bytes
    
      if (file && file.size > maxSize) {
        setErrors(prev => ({ ...prev, pitchDeck: "File size should be less than 500 KB" }));
        setFormData(prev => ({ ...prev, pitchDeck: null }));
    
        // Clear the file input
        if (fileInputRef.current) {
          fileInputRef.current.value = null;
        }
      } else {
        setErrors(prev => ({ ...prev, pitchDeck: "" }));
        setFormData(prev => ({ ...prev,pitchDeck: file }));
      }
    };

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else if (e.target.type === "checkbox") {
      setFormData({ ...formData, [e.target.name]: e.target.checked });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validate()) { // If validation fails, stop execution
      return;
    }
    setLoading(true);
  
    try {
      const formDataToSend = new FormData();
  
      Object.keys(formData).forEach((key) => {
        if (key === "pitchDeck" && formData[key]) {
          formDataToSend.append(key, formData[key]); // Append file
        } else {
          formDataToSend.append(key, formData[key]);
        }
      });
  
      // Send email
      await axios.post(
        "http://localhost:5000/sendmail-startup-form",
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
  
      // Store form data
      await axios.post(
        "http://localhost:5000/api/startup-form",
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
  
      // Reset form data after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        designation: "",
        startupName: "",
        website: "",
        registrationNumber: "",
        establishmentYear: "",
        startupStage: "",
        industrySector: "",
        location: "",
        district: "",
        state: "",
        fundingStatus: "",
        collaboration: "",
        support: "",
        pitchDeck: null,
        termsAccepted: false,
      });
  
      setErrors({}); // Clear errors
  
      // Redirect to the 'submitted' page
      navigate("/submitted");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form.");
    } finally {
      setLoading(false);
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
        <img src={OnboardingMainImage4 } alt="Startups Collaboration" className='OnboardingMainImages' />
      </div>
      </div>
      {/* Form Section */}
      <div className="onboardingWrapper">
        
      <div className="onboardingform">

          <div className='borderLine'></div>
          <form onSubmit={handleSubmit}>
      <h1>Connect Your Startup Idea With Aakam</h1>
      <div className="formGrid">
        {[
          { label: "First Name", name: "firstName", type: "text" },
          { label: "Last Name", name: "lastName", type: "text" },
          { label: "Email", name: "email", type: "email" },
          { label: "Contact Number", name: "contact", type: "tel" },
          { label: "Designation", name: "designation", type: "text" },
          { label: "Startup Name", name: "startupName", type: "text" },
          { label: "Website", name: "website", type: "url" },
          { label: "Startup Registration Number", name: "registrationNumber", type: "text" },
          { label: "Year of Establishment", name: "establishmentYear", type: "text" },
          { label: "Industry Sector", name: "industrySector", type: "text" },
          { label: "Location", name: "location", type: "text" },
          { label: "District", name: "district", type: "text" },
          { label: "State", name: "state", type: "text" },
          
          
        ].map(({ label, name, type }) => (
          <div key={name} className="inputBox">
            <input type={type} name={name} value={formData[name]} onChange={handleChange} required />
            <span>{label}</span>
            {errors[name] && <p style={{ color: "red" }}>{errors[name]}</p>}
          </div>
        ))}
        <div className="inputBox">
          <textarea type="text" name="collaboration" onChange={handleChange} required />
          <span>How do you want to collaborate?</span>
          {errors.collaboration && <p style={{ color: "red" }}>{errors.collaboration}</p>}
        </div>
        <div className="inputBox">
          <textarea type="text" name="support" onChange={handleChange} required />
          <span>Expected Support from Aakam</span>
          {errors.support && <p style={{ color: "red" }}>{errors.support}</p>}
        </div>
        
        

        <div className="inputBox">
          <select name="startupStage" value={formData.startupStage} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Ideation">Ideation</option>
            <option value="MVP">MVP</option>
            <option value="Growth">Growth</option>
            <option value="Scaling">Scaling</option>
          </select>
          <span>Startup Stage</span>
          {errors.startupStage && <p style={{ color: "red" }}>{errors.startupStage}</p>}

        </div>

        <div className="inputBox">
          <select name="fundingStatus" value={formData.fundingStatus} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Bootstrapped">Bootstrapped</option>
            <option value="Seed">Seed</option>
            <option value="Series A">Series A</option>
            <option value="Series B">Series B</option>
            <option value="Series C">Series C</option>
          </select>
          <span>Funding Status</span>
          {errors.fundingStatus && (
  <p style={{ color: "red" }}>{errors.fundingStatus}</p>
)}
        </div>

        <div className="inputBox">
          <input
            type="file"
            name="pitchDeck"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange1}
            ref={fileInputRef}
            required
          />
          <span>Upload Pitch Deck (PDF or DOC, Max 500KB)</span>
          {errors.pitchDeck && <p style={{ color: "red" }}>{errors.pitchDeck}</p>}
        </div>

        <div className="checkBox">
          <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
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

export default StartupsForm;