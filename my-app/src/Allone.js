// src/Allone.js
import React, { useState, useEffect } from "react";
import RoleSelector from "./RoleSelector";
import Hero_section from "./Hero_section";
import Our_5i from "./Our_5i";
import Career from "./Career";
import Technology from "./Technology";
import ApplyInternship from "./ApplyInternship";
import Initiatives from "./Initiatives";
import Information from "./Information";
import Onboarding from "./Onboarding";
import WhyChooseUs from "./WhyChooseUs";
import VisitorCount from "./VisitorCount";
import Lottie from 'lottie-react';
import loadingAnimation from '../src/img/Loading.json'; 

const Allone = () => {
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Load from sessionStorage (clears after refresh)
  useEffect(() => {
    const storedRole = sessionStorage.getItem("userRole");
    if (storedRole) {
      setUserRole(storedRole);
    }
    setLoading(false);
  }, []);

  const handleRoleSelection = (role) => {
    setUserRole(role);
  };

  if (loading) {
    return <Lottie animationData={loadingAnimation} loop={true} style={{ width: 60, height: 60 }} />;
  }

  return (
    <div>
      {!userRole ? (
        <RoleSelector onSelectRole={handleRoleSelection} />
      ) : (
        <div className="page-content">
          <Hero_section userRole={userRole} />
          <Our_5i />
          <Career />
          <Technology />
          <ApplyInternship />
          <Initiatives />
          <Information />
          <Onboarding />
          <WhyChooseUs />
          <VisitorCount trigger={userRole} />

          {/* Optional "Change Role" button for dev/debug */}
          {/* <button onClick={() => {
            sessionStorage.removeItem("userRole");
            window.location.reload();
          }}>Change Role</button> */}
        </div>
      )}
    </div>
  );
};

export default Allone;
