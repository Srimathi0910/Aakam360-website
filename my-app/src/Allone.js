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
  const [pageReady, setPageReady] = useState(false); // Prevent premature rendering

  // Load role from sessionStorage on initial render
  useEffect(() => {
    const storedRole = sessionStorage.getItem("userRole");
    if (storedRole) {
      setUserRole(storedRole);
    }
    setLoading(false);
  }, []);

  // Scroll to top AFTER userRole is set
  useEffect(() => {
    if (userRole) {
      setTimeout(() => {
        window.scrollTo(0, 0);
        setPageReady(true); // Delay rendering
      }, 100); // slight delay to let layout settle
    }
  }, [userRole]);

  const handleRoleSelection = (role) => {
    setUserRole(role);
    sessionStorage.setItem("userRole", role);
  };

  if (loading || (userRole && !pageReady)) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
      }}>
        <Lottie
          animationData={loadingAnimation}
          loop
          autoplay
          style={{ width: 100, height: 100 }}
        />
      </div>
    );
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
        </div>
      )}
    </div>
  );
};

export default Allone;
