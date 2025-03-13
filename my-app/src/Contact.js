import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faClock, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import ContactImage from "../src/img/Contact-Image.jpg";


import "./styles.css";

// const Contact = () => {
//   return (
//     <div className="contactContainer">
//       <div className="contactHeader">
//         <h2>Connecting to the right peoples</h2>
//         <p>
//           Get in touch with us today and take the first step towards unlocking your full potential.
//         </p>
//       </div>
      
//       <div className="contactContent">
//       <div className="contactimage">
//           <img src={ContactImage} alt="" className="ContactImage" />
//         </div>
//       <div className="contactFormWrapper">
       
//           <div className="contactForm">
//             <form>
//               <div className="inputBox">
//                 <input type="text" required />
//                 <span>Full Name</span>
//               </div>
//               <div className="inputBox">
//                 <input type="email" required />
//                 <span>Email</span>
//               </div>
//               <div className="inputBox">
//                 <input type="text" required />
//                 <span>Subject</span>
//               </div>
//               <div className="inputBox">
//                 <textarea required></textarea>
//                 <span>Type your Message...</span>
//               </div>
//               <div className="inputBox">
//                 <input type="submit" value="Send" />
//               </div>
//             </form>
//           </div>
//         </div>
//         <div className="contactInfo">
//           <ul>
//             <li>
//             <FontAwesomeIcon icon={faLocationDot} className="customIcon" />

//               <div>
//                 <h4>Location:</h4>
//                 <p>
//                   Pullipalayam, Sankari, Salem,Tamilnadu, India - 637304.
//                 </p>
//               </div>
//             </li>
//             <br />
//             <li>
//               <FontAwesomeIcon icon={faClock}  className="customIcon"/>
//               <div>
//                 <h4>Open Hours:</h4>
//                 <p>
//                   Monday - Saturday:<br />
//                   09:00 AM - 06:00 PM.
//                 </p>
//               </div>
//             </li>
//             <br />
//             <li>
//               <FontAwesomeIcon icon={faEnvelope}  className="customIcon"/>
//               <div>
//                 <h4>Email</h4>
//                 <p>info@aakam360.com</p>
//               </div>
//             </li>
//             <br />
//             <li>
//               <FontAwesomeIcon icon={faPhone}  className="customIcon"/>
//               <div>
//                 <h4>Phone</h4>
//                 <p>
//                   +91 843 843 5777<br />
//                   +91 843 843 5999
//                 </p>
//               </div>
//             </li>
//           </ul>
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default Contact;
const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/forms", formData); // ✅ Use the correct backend route
      setFormData({ fullName: "", email: "", subject: "", message: "" }); // Reset form
      navigate("/submitted"); // ✅ Redirect to SuccessPage after submission
    } 
       catch (error) {
      alert("Error submitting form!");
    }
  };
  

  return (
    <div className="contactContainer">
      <div className="contactHeader">
        <h2>Connecting to the right peoples</h2>
        <p>Get in touch with us today and take the first step towards unlocking your full potential.</p>
      </div>

      <div className="contactContent">
        <div className="contactimage">
          <img src={ContactImage} alt="" className="ContactImage" />
        </div>

        <div className="contactFormWrapper">
          <div className="contactForm">
            <form onSubmit={handleSubmit}>
              <div className="inputBox">
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
                <span>Subject</span>
              </div>
              <div className="inputBox">
                <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
                <span>Type your Message...</span>
              </div>
              <div className="inputBox">
                <input type="submit" value="Send" />
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
                 <p>
                   Pullipalayam, Sankari, Salem,Tamilnadu, India - 637304.
                 </p>
               </div>
             </li>
             <br />
             <li>
               <FontAwesomeIcon icon={faClock}  className="customIcon"/>
               <div>
                 <h4>Open Hours:</h4>
                 <p>
                   Monday - Saturday:<br />
                   09:00 AM - 06:00 PM.
                 </p>
               </div>
             </li>
             <br />
             <li>
               <FontAwesomeIcon icon={faEnvelope}  className="customIcon"/>
               <div>
                 <h4>Email</h4>
                 <p>info@aakam360.com</p>
               </div>
             </li>
             <br />
             <li>
               <FontAwesomeIcon icon={faPhone}  className="customIcon"/>
              <div>
                 <h4>Phone</h4>
                 <p>
                   +91 843 843 5777<br />
                  +91 843 843 5999
                 </p>
               </div>
            </li>
          </ul>
         </div>
      </div>
    </div>
  );
};

export default Contact;