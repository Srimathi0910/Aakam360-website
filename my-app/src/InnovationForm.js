import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import OnboardingMainImage2 from "../src/img/Institution-Connect-Main.jpg";
import Lottie from 'lottie-react';
import loadingAnimation from '../src/img/Loading.json'; // Adjust path based on your structure
import './styles.css';

const InnovationForm = () => {
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
    collegeName: "",
    department: "",
    yearofstudy: "",
    title: "",
    problem: "",
    solution: "",
    techUsed: "",
    uniqueness: "",
    impact: "",
    audience: "",
    termsAccepted: false,
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    let newErrors = {};

    const requiredFields = [
      "firstName", "lastName", "designation", "institutionName", "location",
      "district", "state", "domains", "email", "mobileNumber", "collegeName",
      "department", "yearofstudy", "title", "problem", "solution", "techUsed",
      "uniqueness", "impact", "audience"
    ];

    requiredFields.forEach(field => {
      if (!formData[field]?.trim()) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });

    if (formData.yearofstudy && !/^\d{1,2}$/.test(formData.yearofstudy)) {
      newErrors.yearofstudy = "Year should be a single or two-digit number";
    }
    

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!/^\d+$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Mobile Number must contain only digits";
    } else if (formData.mobileNumber.length !== 10) {
      newErrors.mobileNumber = "Mobile Number must be exactly 10 digits";
    } else if (/^[012345]/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Mobile Number cannot start with 0, 1, 2, 3, 4, or 5";
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "You must accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      await axios.post('http://localhost:5000/sendmail-innovation-form', formData);
      await axios.post("http://localhost:5000/api/innovationform", formData);

      navigate("/submitted");

      // Reset form
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
        collegeName: "",
        department: "",
        yearofstudy: "",
        title: "",
        problem: "",
        solution: "",
        techUsed: "",
        uniqueness: "",
        impact: "",
        audience: "",
        termsAccepted: false,
      });
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='onboarding-form-container'>
      <div className='Onboarding-Main-Container'>
        <div className='onboarding-form-header'>
          <h1>Nurture your innovation with us.</h1>
          <h3>Join hands with Aakam to create a powerful ecosystem of knowledge exchange and educational advancement.</h3>
        </div>
        <div className='onboarding-form-image'>
          <img src={OnboardingMainImage2} alt="Institution Collaboration" className='OnboardingMainImages' />
        </div>
      </div>

      <div className="onboardingWrapper">
        <div className="onboardingform">
          <div className='borderLine'></div>
          <form onSubmit={handleSubmit}>
            <h1>Connect Your Innovative ideas With Aakam</h1>
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
                { name: "collegeName", label: "College Name" },
                { name: "department", label: "Department" },
                { name: "yearofstudy", label: "Year of Study" },
                { name: "title", label: "Title" },
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
                  {errors[field.name] && <p style={{ color: "red" }}>{errors[field.name]}</p>}
                </div>
              ))}

              {/* Textareas */}
              {[
                { name: "problem", label: "Problem" },
                { name: "solution", label: "Solution" },
                { name: "techUsed", label: "Technology Used" },
                { name: "uniqueness", label: "Uniqueness" },
                { name: "impact", label: "Impact" },
                { name: "audience", label: "Target Audience / Users" }
              ].map((field) => (
                <div className="inputBox" key={field.name}>
                  <textarea
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    className="textarea"
                  />
                  <span>{field.label}</span>
                  {errors[field.name] && <p style={{ color: "red" }}>{errors[field.name]}</p>}
                </div>
              ))}

              {/* Terms and Conditions */}
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
                <input type="submit" value="Submit" />
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InnovationForm;
