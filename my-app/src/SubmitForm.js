import React, { useState } from "react";
import axios from "axios";

function SubmitForm() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show spinner
    setMessage("");

    try {
      const response = await axios.post("/api/forms", formData);
      setMessage(response.data.message);
    } catch (err) {
      setMessage("Error submitting form");
    } finally {
      setLoading(false); // Hide spinner
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields here */}
      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>

      {loading && <div className="spinner">⏳ Loading...</div>}

      {message && <p>{message}</p>}
    </form>
  );
}
export default SubmitForm;
