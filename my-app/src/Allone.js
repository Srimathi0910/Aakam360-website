// my-app/src/Allone.js
import React, { useState } from "react";
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
import LoginPage from "./LoginPage";

const Allone = () => {
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRoleSelection = (role) => {
    setLoading(true); // Start loading
    setUserRole(role);
    setLoading(false); // Stop loading after role is set
  };

  return (
    <div>
      {!userRole ? (
        <RoleSelector onSelectRole={handleRoleSelection} />
      ) : loading ? (
        <div className="loading">Loading...</div> // Loading state
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
          <VisitorCount trigger={userRole} /> {/* Pass trigger for live updates */}
          <LoginPage />
          
        </div>
      )}
    </div>
  );
};

export default Allone;
