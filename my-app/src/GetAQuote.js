import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./styles.css";
import OnboardingMainImage3 from "../src/img/Training-Partner-Main.jpg";

const GetAQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    country: "",
    state: "",
    city: "",
    purposeofEnquiry: "",
    message: "",
    requirements: null, // Store file object
    termsAccepted: false, // Checkbox for terms
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    const { name, type, checked, files, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : files ? files[0] : value,
    }));
  };

  // Validate Form
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Mobile number validation
   if (!formData.mobileNumber.trim()) {
    newErrors.mobileNumber = "Mobile Number is required";
  } else if (!/^\d+$/.test(formData.mobileNumber)) {
    newErrors.mobileNumber = "Mobile Number must contain only digits";
  } else if (formData.mobileNumber.length !== 10) {
    newErrors.mobileNumber = "Mobile Number must be exactly 10 digits";
  } else if (/^[012345]/.test(formData.mobileNumber)) {
    newErrors.mobileNumber = "Mobile Number cannot start with 0, 1, 2, 3, 4, or 5";
  }

    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.purposeofEnquiry.trim()) newErrors.purposeofEnquiry = "Purpose of enquiry is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    // File Validation
    if (!formData.requirements) {
      newErrors.requirements = "File is required";
    } else if (!/\.(pdf|doc|docx)$/i.test(formData.requirements.name)) {
      newErrors.requirements = "File must be a PDF, DOC, or DOCX";
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "You must accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
  
    try {
      const submissionData = new FormData();
      submissionData.append("name", formData.name);
      submissionData.append("email", formData.email);
      submissionData.append("mobileNumber", formData.mobileNumber);
      submissionData.append("country", formData.country);
      submissionData.append("state", formData.state);
      submissionData.append("city", formData.city);
      submissionData.append("purposeofEnquiry", formData.purposeofEnquiry);
      submissionData.append("message", formData.message);
      submissionData.append("requirements", formData.requirements); 
      submissionData.append("termsAccepted", formData.termsAccepted.toString()); // Convert boolean to string
  
      // Send email
      const emailResponse = await axios.post(
        "http://localhost:5000/sendmail-get-a-quote",
        submissionData, // Use submissionData
        { headers: { "Content-Type": "multipart/form-data" } }
      );
  
      // alert(emailResponse.data.message);
  
      // Store data in MongoDB
      await axios.post(
        "http://localhost:5000/api/get-a-quote",
        submissionData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
  
      navigate("/submitted");
  
      // Reset form
      setFormData({
        name: "",
        email: "",
        mobileNumber: "",
        country: "",
        state: "",
        city: "",
        purposeofEnquiry: "",
        message: "",
        requirements: null,
        termsAccepted: false,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };
  

  return (
    <section className="onboarding-form-container">
      <div className="Onboarding-Main-Container">
        <div className="onboarding-form-header">
          <h1>Nurture your innovation with us.</h1>
          <h3>Join hands with Aakam to create a powerful ecosystem of knowledge exchange and educational advancement.</h3>
        </div>
        <div className="onboarding-form-image">
          <img src={OnboardingMainImage3} alt="Training Collaboration" className="OnboardingMainImages" />
        </div>
      </div>

      <div className="onboardingWrapper">
        <div className="onboardingform" style={{ height: "1000px" , minHeight: "300px"}}>
          <div className="borderLine"></div>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div style={{ width: "10%", textAlign: "center" }}>
                <FontAwesomeIcon icon={faFileAlt} style={{ fontSize: "50px", color: "white", borderRadius: "10px", border: "2px solid white", padding: "10px" }} />
              </div>
              <div style={{ width: "100%" }}>
                <h1 style={{ margin: 0 }}>Get a Quote</h1>
                <h3 style={{ textAlign: "center", margin: "5px 0" }}>Leave your message and we'll get back to you shortly.</h3>
              </div>
            </div>

            <div className="formGrid">
              {[
                { name: "name", label: "Name", type: "text" },
                { name: "email", label: "Email", type: "email" },
                { name: "mobileNumber", label: "Mobile Number", type: "tel" },
                { name: "country", label: "Country", type: "text" },
                { name: "state", label: "State", type: "text" },
                { name: "city", label: "City", type: "text" },
                { name: "purposeofEnquiry", label: "Purpose of Enquiry", type: "text" },
              ].map((field) => (
                <div className="inputBox" key={field.name}>
                  <input type={field.type} name={field.name} value={formData[field.name]} onChange={handleChange} required />
                  <span>{field.label}</span>
                  {errors[field.name] && <p style={{ color: "red" }}>{errors[field.name]}</p>}
                </div>
              ))}

              <div className="inputBox">
                <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
                <span>Message:</span>
              </div>

              <div className="inputBox">
                <input type="file" name="requirements" onChange={handleChange} accept=".pdf,.doc,.docx" required />
                <span>Requirements</span>
              </div>
            </div>

            <div className="checkBox">
              <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
              <span>I agree to the terms and conditions</span>
            </div>

            <div className="inputBox">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetAQuote;
