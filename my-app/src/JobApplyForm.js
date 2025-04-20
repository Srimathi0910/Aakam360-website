import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles.css";
import{ useRef } from "react";
import Lottie from 'lottie-react';
import loadingAnimation from '../src/img/Loading.json';

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
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);


  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};

    if (!formData.fullName.trim()) tempErrors.fullName = "Full Name is required.";
    if (!formData.role.trim()) tempErrors.role = "Role is required.";

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Invalid email format.";
    }

    if (!formData.mobileNumber.trim()) {
      tempErrors.mobileNumber = "Mobile Number is required.";
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      tempErrors.mobileNumber = "Mobile Number must be exactly 10 digits.";
    }

    if (!formData.resume) tempErrors.resume = "Resume is required.";
    if (!formData.agreedToTerms) tempErrors.agreedToTerms = "You must agree to the terms.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const allowedFormats = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/msword",
    ];

    if (file && !allowedFormats.includes(file.type)) {
      setErrors({ ...errors, resume: "Invalid file format. Upload a PDF or DOCX file." });
      return;
    }

    setFormData({ ...formData, resume: file });
    setErrors({ ...errors, resume: "" });
  };
  const handleFileChange1 = (e) => {
    const file = e.target.files[0];
    const maxSize = 500 * 1024; // 500 KB in bytes
  
    if (file && file.size > maxSize) {
      setErrors(prev => ({ ...prev, resume: "File size should be less than 500 KB" }));
      setFormData(prev => ({ ...prev, resume: null }));
  
      // Clear the file input
      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
    } else {
      setErrors(prev => ({ ...prev, resume: "" }));
      setFormData(prev => ({ ...prev, resume: file }));
    }
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
  
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "resume" && formData.resume) {
        data.append(key, formData.resume);
      } else {
        data.append(key, formData[key]);
      }
    });
  
    try {
      // Send Email
      const emailResponse = await axios.post(
        "http://localhost:5000/api/sendmail-job-applications",
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log("Email Response:", emailResponse.data);
  
      // Save Application to Database
      const formResponse = await axios.post(
        "http://localhost:5000/api/job-applications",
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log("Form Response:", formResponse.data);
  
      // Navigate to submitted page after successful completion of both requests
      navigate("/Applied");
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Error submitting job application. Please try again.");
    } finally {
      setLoading(false);
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
        
          <div className="onboardingform" >
          <div className='borderLine'></div>
          <form onSubmit={handleSubmit}>
      <h1>Shape Your Future with Aakam360</h1>
      <div className="formGrid1">
        <div className="inputBox">
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          <span>Full Name</span>
          {errors.fullName && <p style={{ color: "red" }}>{errors.fullName}</p>}
        </div>
        <div className="inputBox">
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <span>Email</span>
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <div className="inputBox">
          <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
          <span>Mobile Number</span>
          {errors.mobileNumber && <p style={{ color: "red" }}>{errors.mobileNumber}</p>}
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
          {errors.role && <p style={{ color: "red" }}>{errors.role}</p>}
        </div>
        <div className="inputBox" id="uploads">
  <input
    type="file"
    name="resume"
    accept=".pdf,.doc,.docx"
    onChange={handleFileChange1}
    ref={fileInputRef}
    required
  />
  <span style={{ marginTop: "-15px" }}>Upload Resume</span>
  {errors.resume && <p style={{ color: "red" }}>{errors.resume}</p>}
</div>


        <div className="checkBox">
          <input type="checkbox" name="agreedToTerms" checked={formData.agreedToTerms} onChange={handleChange} />
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
         <input type="submit" value="Apply" />
       )}
     </div>
    </form>
          </div>
        </div>
      
    </section>
  );
};

export default JobApplyForm;
