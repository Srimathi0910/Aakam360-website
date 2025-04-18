// VisitorCount.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

const VisitorCount = () => {
  const [counts, setCounts] = useState({
    students: 0,
    industry: 0,
    internship: 0,
    others: 0,
  });

  // Fetch the visitor counts when the component mounts
  useEffect(() => {
    fetchVisitorCounts();
  }, []);

  // Function to fetch visitor counts from the backend
  const fetchVisitorCounts = () => {
    axios.get("http://localhost:5000/api/visitors")
      .then((res) => {
        setCounts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching visitor counts", err);
      });
  };

  return (
    <div className="visitor-count-container">
      <h2>Live Visitor Count</h2>
      <div className="visitor-count-row">
        <div className="visitor-box">
          <strong>🎓 Students</strong>
          <p>{counts.students}</p>
        </div>
        <div className="visitor-box">
          <strong>🏭 Industry Professional</strong>
          <p>{counts.industry}</p>
        </div>
        <div className="visitor-box">
          <strong>💼 Internship Seekers</strong>
          <p>{counts.internship}</p>
        </div>
        <div className="visitor-box">
          <strong>👥 Others</strong>
          <p>{counts.others}</p>
        </div>
      </div>
    </div>
  );
};

export default VisitorCount;
