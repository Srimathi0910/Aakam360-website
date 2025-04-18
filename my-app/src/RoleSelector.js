// RoleSelector.js
import React from 'react';
import axios from 'axios'; // Import axios
import './styles.css';

const RoleSelector = ({ onSelectRole }) => {

  const handleRoleSelect = (role) => {
    // Call the backend to increment the selected role count
    axios.post(`http://localhost:5000/api/visitors/increment/${role}`)
      .then(() => {
        onSelectRole(role); // Update the parent component's state
      })
      .catch((err) => {
        console.error("Error incrementing count", err);
      });
  };

  return (
    <div className="role-selector-overlay">
      <div className="role-selector-box">
        <h2>Welcome to Aakam360! <br/>Please choose your role:</h2>
        <button onClick={() => handleRoleSelect('students')}>Student</button>
        <button onClick={() => handleRoleSelect('industry')}>Industry Professional</button>
        <button onClick={() => handleRoleSelect('internship')}>Internship Seeker</button>
        <button onClick={() => handleRoleSelect('others')}>Other</button>
      </div>
    </div>
  );
};

export default RoleSelector;
