import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import "./ApplicationSubmitted.css";

const ApplicationSubmitted = () => {
  const navigate = useNavigate();

  return (
    <div className="application-page">

      <div className="application-card">

        {/* Success Icon */}
        <div className="success-icon">
          <FaCircleCheck />
        </div>

        {/* Heading */}
        <h1>Application Submitted Successfully</h1>

        {/* Message */}
        <p>
          Thank you for registering your business with Lahore360.
          Your application has been successfully submitted and is
          currently under review by our administration team. Once
          your business is approved, you will receive access to your
          dedicated vendor panel where you can manage your business,
          products, orders, inventory, and other activities.
        </p>

        {/* Status */}
        <div className="review-status">
          <span></span>
          Application Under Review
        </div>

        {/* Button */}
        <button
          className="back-home-btn"
          onClick={() => navigate("/vendor-panel")}
        >
          Back to Home
        </button>

      </div>

    </div>
  );
};

export default ApplicationSubmitted;