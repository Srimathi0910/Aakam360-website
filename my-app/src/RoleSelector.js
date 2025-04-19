import React from 'react';
import axios from 'axios';
import './styles.css'; // Background image and other styles
import Aakamlogo from '../src/img/aakam360-mainlogo.png';

const RoleSelector = ({ onSelectRole }) => {
  const handleRoleSelect = (e, role) => {
    e.preventDefault(); // Prevent page reload

    axios.post(`http://localhost:5000/api/visitors/increment/${role}`)
      .then(() => {
        onSelectRole(role); // Navigate or update state
      })
      .catch((err) => {
        console.error("Error incrementing count", err);
      });
  };

  return (
    <div className="role-selector-overlay">
      <div className="role-selector-box">
        <div>

          <div className="role-container">
            {/* Left - Logo */}
            <div className="logo-section1">
              <img
                src={Aakamlogo}
                alt="Aakam Logo"
                className="logo-img1"
              />
            </div>

            {/* Right - Form */}
            <form className="role-form" style={{zIndex:"20000000"}}>
              <h2>Welcome to Aakam360! <br />Please choose your role:</h2>
              <button onClick={(e) => handleRoleSelect(e, 'students')}>Student</button>
              <button onClick={(e) => handleRoleSelect(e, 'industry')}>Industry Professional</button>
              <button onClick={(e) => handleRoleSelect(e, 'internship')}>Internship Seeker</button>
              <button onClick={(e) => handleRoleSelect(e, 'others')}>Other</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelector;
