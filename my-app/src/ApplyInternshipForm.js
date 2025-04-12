import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import{ useRef } from "react";
import "./styles.css";
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
    startDate: "",
    endDate: "",
    resume: null,
    reason: "",
    termsAccepted: false,
  });
  const fileInputRef = useRef(null);

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (formData.startDate && formData.endDate) {
      setFormData((prev) => ({
        ...prev,
        availability: `${formData.startDate} to ${formData.endDate}`,
      }));
    }
  }, [formData.startDate, formData.endDate]);

  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email address";

    if (!formData.startDate || !formData.endDate) {
      newErrors.availability = "Availability period is required";
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Mobile Number is required";
    } else if (!/^\d+$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Mobile Number must contain only digits";
    } else if (formData.contactNumber.length !== 10) {
      newErrors.contactNumber = "Mobile Number must be exactly 10 digits";
    } else if (/^[012345]/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Mobile Number cannot start with 0, 1, 2, 3, 4, or 5";
    }

    if (!formData.college.trim()) newErrors.college = "College Name is required";
    if (!formData.degree.trim()) newErrors.degree = "Degree Program is required";

    if (!formData.graduationYear.trim()) {
      newErrors.graduationYear = "Year of Graduation is required";
    } else if (!/^\d{4}$/.test(formData.graduationYear)) {
      newErrors.graduationYear = "Invalid year format (YYYY)";
    }

    if (!formData.technicalSkills.trim()) newErrors.technicalSkills = "Technical Skills are required";
    if (!formData.availability.trim()) newErrors.availability = "Availability period is required";
    if (!formData.reason.trim()) newErrors.reason = "Reason for applying is required";
    if (!formData.internshipDomain) newErrors.internshipDomain = "Select an internship domain";
    if (!formData.resume) newErrors.resume = "Resume upload is required";
    if (!formData.termsAccepted) newErrors.termsAccepted = "You must accept the terms and conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
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
    if (validateForm()) {
      try {
        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
          formDataToSend.append(key, formData[key]);
        });

        await axios.post("http://localhost:5000/apply", formDataToSend, {
          headers: { "Content-Type": "multipart/form-data" },
        });

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
          startDate: "",
          endDate: "",
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
    <section className="onboarding-form-container">
      <div className="Onboarding-Main-Container">
        <div className="onboarding-form-header">
          <h1>Kickstart Your Career with Aakam</h1>
          <h3>Gain hands-on experience and work on real-world projects with industry experts.</h3>
        </div>
        <div className="onboarding-form-image">
          <img src={OnboardingMainImage5} alt="Internship Program" className="OnboardingMainImages" />
        </div>
      </div>

      <div className="onboardingWrapper">
        <div className="onboardingform" >
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
                
              ].map(({ label, name, type }) => (
                <div className="inputBox" key={name}>
                  <input type={type} name={name} value={formData[name]} onChange={handleChange} required />
                  <span>{label}</span>
                  {errors[name] && <p style={{ color: "red" }}>{errors[name]}</p>}
                </div>
              ))}

<div className="inputBox" style={{ display: "grid", gap: "10px" }}>
  <label style={{ color: "#ccc", marginBottom: "5px" }}>
    Availability Period (Start to End):
  </label>

  <div style={{ display: "flex", gap: "20px" }}>
    <label style={{ color: "#ccc", display: "flex", flexDirection: "column",}}>
      Start Date:
      <input
        style={{
          color: "#ccc",
          backgroundColor: "#222",
          borderBottom: "2px solid #01dbc2",
          padding: "5px"
        }}
        type="date"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
      />
    </label>

    <label style={{ color: "#ccc", display: "flex", flexDirection: "column" }}>
      End Date:
      <input
        style={{
          color: "#ccc",
          backgroundColor: "#222",
          borderBottom: "2px solid #01dbc2",
          padding: "5px"
        }}
        type="date"
        name="endDate"
        value={formData.endDate}
        onChange={handleChange}
      />
    </label>
  </div>

  {errors.availability && (
    <p style={{ color: "red", marginTop: "5px" }}>{errors.availability}</p>
  )}
</div>
<div className="inputBox">
                <select name="technicalSkills" value={formData.technicalSkills} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="Python">Python</option>
                  <option value="Java">Java</option>
                  <option value="Mysql or MongoDB">Mysql or MongoDB</option>
                  <option value="HTML,CSS,JS">HTML,CSS,JS</option>
                  <option value="Other">Other</option>
                </select>
                <span>Technical Skills</span>
                {errors.technicalSkills && <p style={{ color: "red" }}>{errors.technicalSkills}</p>}
              </div>


              <div className="inputBox">
                <textarea name="reason" onChange={handleChange} value={formData.reason} required />
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
                {errors.internshipDomain && <p style={{ color: "red" }}>{errors.internshipDomain}</p>}
              </div>

              <div className="inputBox">
                <input type="file" name="resume" accept=".pdf,.doc,.docx"  onChange={handleFileChange1}
    ref={fileInputRef} required />
                <span style={{ marginTop: "-15px" }}>Upload Resume</span>
                {errors.resume && <p style={{ color: "red" }}>{errors.resume}</p>}
              </div>

              <div className="checkBox">
                <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
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

export default ApplyInternshipForm;