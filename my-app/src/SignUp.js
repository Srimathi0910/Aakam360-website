import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './styles.css';
import SignUpMainImage from "../src/img/aakam-entrance-image.jpg"; // Add your image path
import Lottie from 'lottie-react';
import loadingAnimation from '../src/img/Loading.json'; // Adjust path based on your project

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    agreedToTerms: false,
  });
  
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

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

    // Password Validation
    if (formData.password && formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Confirm Password Validation
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
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
      // Send registration data to the backend
      await axios.post("http://localhost:5000/api/signup", formData);

      // Navigate to the login page
      navigate("/LoginPage");

      // Reset form data
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        password: "",
        confirmPassword: "",
        agreedToTerms: false,
      });

      // Clear errors after successful submission
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to sign up"); // Show alert if there's an error
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  return (
    <section className="onboarding-form-container">
      {/* Header Section */}
      <div className="Onboarding-Main-Container">
        <div className="onboarding-form-header">
          <h1>Sign Up with Aakam</h1>
          <h3>
            Join us and be part of a collaborative growth environment.
          </h3>
        </div>

        {/* Image Section */}
        <div className="onboarding-form-image">
          <img src={SignUpMainImage} alt="Sign Up" className="OnboardingMainImages" />
        </div>
      </div>

      {/* Form Section */}
      <div className="onboardingWrapper">
        <div className="onboardingform">
          <div className="borderLine"></div>

          <form onSubmit={handleSubmit}>
            <h1>Create Your Account</h1>
            <div className="formGrid">
              {[{ name: "firstName", type: "text", label: "First Name" },
                { name: "lastName", type: "text", label: "Last Name" },
                { name: "email", type: "email", label: "Email" },
                { name: "mobileNumber", type: "tel", label: "Mobile Number" },
                { name: "password", type: "password", label: "Password" },
                { name: "confirmPassword", type: "password", label: "Confirm Password" },
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
                <input type="submit" value="Sign Up" />
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
