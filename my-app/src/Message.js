import React, { useState } from "react";

import "./styles.css";

const Message = () => {
  return (
    <div className="success-container">
        <div class="tick-container">
            <div class="tick-icon">✔</div>
</div>

      <h2 className="success-title">Form Submitted Successfully!</h2>
      <p className="success-message">
        Thank you for reaching out. We will get back to you soon.
      </p>
    </div>
  );
};

export default Message;
