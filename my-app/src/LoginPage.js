import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles.css'; 
import Lottie from 'lottie-react';
import loadingAnimation from '../src/img/Loading.json'; // Adjust path based on your project

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    agreedToTerms: false,
  });
  
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    let newErrors = {};

    // Email Validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Password Validation
    if (!formData.password) {
      newErrors.password = "Password is required";
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
      // Send email or authentication logic here
      await axios.post('http://localhost:5000/api/login', formData);

      // Navigate to the dashboard or user page
      navigate("/UserDashboard");

      // Reset form data after successful submission
      setFormData({
        email: "",
        password: "",
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
      <div className='Onboarding-Main-Container'>
        <div className='onboarding-form-header'>
          <h1>Welcome Back!</h1>
          <h3>Login to your account</h3>
        </div>

        {/* Image Section */}
        <div className='onboarding-form-image'>
          <img src='../src/img/Industry-Connect-Main.jpg' alt="Login Image" className='OnboardingMainImages'/>
        </div>
      </div>

      {/* Form Section */}
      <div className="onboardingWrapper">
        <div className="onboardingform" style={{display:"flex",flexDirection:"column"}}>
          <div className='borderLine'></div>

          <form onSubmit={handleSubmit}>
            <h1>Login to Aakam</h1>
            <div className="formGrid">
              {[ 
                { name: "email", type: "email", label: "Email" },
                { name: "password", type: "password", label: "Password" },
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
                <input type="submit" value="Login" />
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
