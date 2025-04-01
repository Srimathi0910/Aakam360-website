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
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email address";
    if (!formData.contactNumber.trim() || !/^\d{10}$/.test(formData.contactNumber))
      newErrors.contactNumber = "Enter a valid 10-digit mobile number";
    if (!formData.college.trim()) newErrors.college = "College Name is required";
    if (!formData.degree.trim()) newErrors.degree = "Degree Program is required";
    if (!formData.graduationYear.trim()) {
      newErrors.graduationYear = "Year of Establishment is required.";
    } else if (!/^\d{4}$/.test(formData.graduationYear)) {
      newErrors.graduationYear = "Invalid year format (YYYY).";
    }
    if (!formData.technicalSkills.trim()) newErrors.technicalSkills = "Technical Skills are required";
    if (!formData.availability.trim()) newErrors.availability = "Availability period is required";
    if (!formData.reason.trim()) newErrors.reason = "Reason for applying is required";
    if (!formData.internshipDomain) newErrors.internshipDomain = "Select an internship domain";
    if (!formData.resume) newErrors.resume = "Resume upload is required";
    if (!formData.termsAccepted) newErrors.termsAccepted = "You must accept the terms and conditions";
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber= "Mobile Number is required";
    } else if (!/^\d+$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Mobile Number must contain only digits";
    } else if (formData.contactNumber.length !== 10) {
      newErrors.contactNumber = "Mobile Number must be exactly 10 digits";
    } else if (/^[012345]/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Mobile Number cannot start with 0, 1, 2, 3, 4, or 5";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
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
  
    if (validateForm()) {
      try {
        const formDataToSend = new FormData();
  
        Object.keys(formData).forEach((key) => {
          if (key === "resume") {
            formDataToSend.append(key, formData[key]); // Append resume file
          } else {
            formDataToSend.append(key, formData[key]);
          }
        });
  
        // Store form data in the database first
        const response = await axios.post("http://localhost:5000/apply", formDataToSend, {
          headers: { "Content-Type": "multipart/form-data" },
        });
  
        // If database storage is successful, proceed to send email
        await axios.post("http://localhost:5000/sendmail-apply-internship", formDataToSend, {
          headers: { "Content-Type": "multipart/form-data" },
        });
  
        alert("Form submitted successfully!");
  
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
  
        navigate("/submitted");
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Error submitting application");
      }
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
  <div className="onboardingform"  style={{ height: "1300px" , minHeight: "400px"}}>
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
          
        ].map(({ label, name, type }) => (
          <div className="inputBox" key={name}>
            <input type={type} name={name} value={formData[name]} onChange={handleChange} required />
            <span>{label}</span>
            {errors[name] && <p p style={{ color: "red" }}>{errors[name]}</p>}
          </div>
        ))}
        <div className="inputBox">
          <textarea type="text" name="reason" onChange={handleChange} required />
          <span>Why do you want to intern with us?</span>
          {errors.reason && <p style={{ color: "red" }}>{errors.reason}</p>}
        </div>



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
          {errors.internshipDomain && <p className="error">{errors.internshipDomain}</p>}
        </div>

        <div className="inputBox">
          <input type="file" name="resume" accept=".pdf,.doc,.docx"  onChange={handleChange} required />
          <span style={{ marginTop: "-15px" }}>Upload Resume</span>
          {errors.resume && <p className="error">{errors.resume}</p>}
        </div>

        <div className="checkBox">
          <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
          <span>I agree to the terms and conditions</span>
          {errors.termsAccepted && <p className="error">{errors.termsAccepted}</p>}
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
