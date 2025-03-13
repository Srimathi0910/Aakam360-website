import React from 'react';
import './styles.css'; 
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import OnboardingMainImage4 from "../src/img/StartupsEntrepreneur-Main.jpg";


const StartupsForm = () => {
  const navigate = useNavigate(); // Initialize navigation

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

    if (!formData.termsAccepted) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    const formDataObject = new FormData();
    for (const key in formData) {
      formDataObject.append(key, formData[key]);
    }

    try {
      const response = await axios.post("http://localhost:5000/api/startup-form", formDataObject, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // alert(response.data.message);

      // Reset form state after successful submission
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

      // Navigate to /submitted page
      navigate("/submitted");

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form.");
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
        
      <div className="onboardingform" style={{ height: "1300px" }}>

          <div className='borderLine'></div>
          <form onSubmit={handleSubmit}>
      <h1>Connect Your Startup Idea With Aakam</h1>
      <div className="formGrid">
        <div className="inputBox">
          <input type="text" name="firstName" required onChange={handleChange} />
          <span>First Name:</span>
        </div>
        <div className="inputBox">
          <input type="text" name="lastName" required onChange={handleChange} />
          <span>Last Name:</span>
        </div>
        <div className="inputBox">
          <input type="email" name="email" required onChange={handleChange} />
          <span>Email</span>
        </div>
        <div className="inputBox">
          <input type="tel" name="contact" required onChange={handleChange} />
          <span>Contact Number</span>
        </div>
        <div className="inputBox">
          <input type="text" name="designation" required onChange={handleChange} />
          <span>Designation</span>
        </div>
        <div className="inputBox">
          <input type="text" name="startupName" required onChange={handleChange} />
          <span>Startup Name</span>
        </div>
        <div className="inputBox">
          <input type="url" name="website" required onChange={handleChange} />
          <span>Website</span>
        </div>
        <div className="inputBox">
          <input type="text" name="registrationNumber" required onChange={handleChange} />
          <span>Startup Registration Number</span>
        </div>
        <div className="inputBox">
          <input type="text" name="establishmentYear" required onChange={handleChange} />
          <span>Year of Establishment</span>
        </div>
        <div className="inputBox">
          <select name="startupStage" required onChange={handleChange}>
            <option value="">Select</option>
            <option value="Ideation">Ideation</option>
            <option value="MVP">MVP</option>
            <option value="Growth">Growth</option>
            <option value="Scaling">Scaling</option>
          </select>
          <span style={{marginTop:"-15px"}}>Startup Stage</span>
        </div>
        <div className="inputBox">
          <input type="text" name="industrySector" required onChange={handleChange} />
          <span>Industry Sector</span>
        </div>
        <div className="inputBox">
          <input type="text" name="location" required onChange={handleChange} />
          <span>Location:</span>
        </div>
        <div className="inputBox">
          <input type="text" name="district" required onChange={handleChange} />
          <span>District</span>
        </div>
        <div className="inputBox">
          <input type="text" name="state" required onChange={handleChange} />
          <span>State</span>
        </div>
        <div className="inputBox">
          <select name="fundingStatus" required onChange={handleChange}>
            <option value="">Select</option>
            <option value="Bootstrapped">Bootstrapped</option>
            <option value="Seed">Seed</option>
            <option value="Series A">Series A</option>
            <option value="Series B">Series B</option>
            <option value="Series C">Series C</option>
          </select>
          <span style={{marginTop:"-15px"}}>Funding Status</span>
        </div>
        <div className="inputBox">
          <input type="text" name="collaboration" required onChange={handleChange} />
          <span>How do you want to collaborate?</span>
        </div>
        <div className="inputBox">
          <input type="text" name="support" required onChange={handleChange} />
          <span>Expected Support from Aakam</span>
        </div>
        <div className="inputBox">
          <input type="file" name="pitchDeck" required onChange={handleChange} />
          <span style={{marginTop:"-15px"}}>Upload Pitch Deck</span>
        </div>
        <div className="checkBox">
          <input type="checkbox" name="termsAccepted" onChange={handleChange} />
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

export default StartupsForm;
