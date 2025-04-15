import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faClock, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import ContactImage from "../src/img/Contact-Image.jpg";
import Lottie from 'lottie-react';
import loadingAnimation from '../src/img/Loading.json'; 

import "./styles.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);


  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};

    if (!formData.fullName.trim()) tempErrors.fullName = "Full Name is required.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Invalid email format.";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required.";
    if (!formData.message.trim()) tempErrors.message = "Message is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
  
    try {
      await axios.post("http://localhost:5000/send-contact", formData);
      await axios.post("http://localhost:5000/api/forms", formData);
      setFormData({ fullName: "", email: "", subject: "", message: "" });
      navigate("/submitted");
    } catch (error) {
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="contactContainer">
      <div className="contactHeader">
        <h2>Connecting to the right people</h2>
        <p>Get in touch with us today and take the first step towards unlocking your full potential.</p>
      </div>

      <div className="contactContent">
        <div className="contactimage">
          <img src={ContactImage} alt="Contact" className="ContactImage" />
        </div>

        <div className="contactFormWrapper">
          <div className="contactForm">
            <form onSubmit={handleSubmit}>
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
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
                <span>Subject</span>
                {errors.subject && <p style={{ color: "red" }}>{errors.subject}</p>}
              </div>
              <div className="inputBox">
                <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
                <span>Type your Message...</span>
                {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
              </div>
              <div className="inputBox">
  {loading ? (
    <div className="lottie-loader">
      <Lottie animationData={loadingAnimation} loop={true} style={{ width: 60, height: 60 }} />
    </div>
  ) : (
    <input type="submit" value="Send" />
  )}
</div>



            </form>
          </div>
        </div>

        <div className="contactInfo">
          <ul>
            <li>
              <FontAwesomeIcon icon={faLocationDot} className="customIcon" />
              <div>
                <h4>Location:</h4>
                <p> <span style={{textAlign:"center"}}>Aakam360<br /> </span>Sankari-Tiruchengode main road,Block B, Pullipalayam, Sankari, Salem, Tamil Nadu, India - 637304.</p>
              </div>
            </li>
            <br />
            <li>
              <FontAwesomeIcon icon={faClock} className="customIcon" />
              <div>
                <h4>Open Hours:</h4>
                <p>Monday - Saturday:<br />09:00 AM - 06:00 PM.</p>
              </div>
            </li>
            <br />
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="customIcon" />
              <div>
                <h4>Email</h4>
                <p>info@aakam360.com</p>
              </div>
            </li>
            <br />
            <li>
              <FontAwesomeIcon icon={faPhone} className="customIcon" />
              <div>
                <h4>Phone</h4>
                <p>+91 843 843 5777<br />+91 843 843 5999</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_ouhe2zk', 'service_ouhe2zk', form.current, {
//         publicKey: '"ME5NYkDJS9Ci7a8gP',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };
//  export default Contact;