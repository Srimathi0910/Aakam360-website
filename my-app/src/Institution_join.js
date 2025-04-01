import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import OnboardingMainImage2 from "../src/img/Institution-Connect-Main.jpg";
import './styles.css'; 

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

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // ✅ Validation Function
  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.designation.trim()) newErrors.designation = "Designation is required";
    if (!formData.institutionName.trim()) newErrors.institutionName = "Institution Name is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.district.trim()) newErrors.district = "District is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.domains.trim()) newErrors.domains = "Domains are required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile Number is required";
    } else if (!/^\d+$/.test(formData.mobileNumber)) {
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
    
    // ✅ Validate form before submitting
    if (!validateForm()) {
      return; // ❌ Stop form submission if validation fails
    }

    try {
      const response = await axios.post('http://localhost:5000/sendmail-institution-join', formData);
            alert(response.data.message);
      await axios.post("http://localhost:5000/api/institution-join", formData);
      navigate("/submitted");

      // ✅ Reset form after successful submission
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

      setErrors({}); // Clear any errors
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
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
        <div className="onboardingform" style={{ height: "1000px" , minHeight: "400px"}}>
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
                  {errors[field.name] && <p style={{ color: "red" }}>{errors[field.name]}</p>}
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
                {errors.termsAccepted && <p style={{ color: "red" }}>{errors.termsAccepted}</p>}
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
