import React, { useCallback, useEffect, useState } from "react";
import {
  Store,
  RefreshCw,
  CheckCircle2,
  XCircle,
  Mail,
  Phone,
  MapPin,
  Clock3,
  AlertCircle,
  FileText,
} from "lucide-react";

import "./VendorApplication.css";

const API_URL = "http://localhost:5000/api/vendors";
const UPLOADS_URL = "http://localhost:5000/uploads";

function VendorApplications() {
  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const fetchApplication = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/pending/next`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to load application");
      }

      setApplication(data.application || null);
    } catch (err) {
      setError(err.message || "Backend se connection nahi ho saka.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchApplication();
  }, [fetchApplication]);

  // Image ka complete URL banane ke liye
  const getFileUrl = (filename) => {
    if (!filename) return "";

    // Agar backend sirf filename bheje ya relative path bheje
    const cleanFilename = String(filename).replace(/\\/g, "/");

    if (/^https?:\/\//i.test(cleanFilename)) {
      return cleanFilename;
    }

    const finalFilename = cleanFilename
      .replace(/^\/+/, "")
      .replace(/^uploads\//i, "");

    return `${UPLOADS_URL}/${finalFilename
      .split("/")
      .map((part) => encodeURIComponent(part))
      .join("/")}`;
  };

  const handleDecision = async (status) => {
    if (!application?._id || processing) return;

    setProcessing(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch(
        `${API_URL}/${application._id}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to update application");
      }

      setMessage(
        status === "Approved"
          ? "Vendor successfully approved."
          : "Vendor application rejected."
      );

      await fetchApplication();
    } catch (err) {
      setError(err.message || "Status update nahi ho saka.");
    } finally {
      setProcessing(false);
    }
  };

  const formatDate = (value) => {
    if (!value) return "—";

    const date = new Date(value);

    return Number.isNaN(date.getTime())
      ? "—"
      : date.toLocaleString("en-PK", {
          dateStyle: "medium",
          timeStyle: "short",
        });
  };

  const locationText =
    typeof application?.location === "string"
      ? application.location
      : application?.location?.address ||
        application?.city ||
        "Not provided";

  const businessImageUrl = getFileUrl(application?.businessImage);
  const verificationFileUrl = getFileUrl(application?.verificationFile);

  // Browser Console mein actual values check karne ke liye
  useEffect(() => {
    if (application) {
      console.log("Business image filename:", application.businessImage);
      console.log("Business image URL:", businessImageUrl);
      console.log("Verification file:", application.verificationFile);
      console.log("Verification URL:", verificationFileUrl);
    }
  }, [application, businessImageUrl, verificationFileUrl]);

  return (
    <div className="vendor-applications-page">
      <div className="application-page-header">
        <div>
          <span className="application-eyebrow">
            MARKETPLACE MANAGEMENT
          </span>
          <h1>Vendor Applications</h1>
          <p>Review vendor details before approving their businesses.</p>
        </div>

        <button
          type="button"
          className="application-refresh-btn"
          onClick={fetchApplication}
          disabled={loading || processing}
        >
          <RefreshCw size={17} />
          Refresh
        </button>
      </div>

      <div className="application-info-banner">
        <Clock3 size={20} />
        <div>
          <strong>Pending application review</strong>
          <p>
            One application is displayed at a time. After a decision,
            the next pending application will be loaded.
          </p>
        </div>
      </div>

      {message && (
        <div className="application-success-message" role="status">
          <CheckCircle2 size={19} />
          {message}
        </div>
      )}

      {error && (
        <div className="application-error-message" role="alert">
          <AlertCircle size={19} />
          <span>{error}</span>
          <button
            type="button"
            onClick={fetchApplication}
            disabled={loading || processing}
          >
            Retry
          </button>
        </div>
      )}

      {loading ? (
        <div className="application-empty-state">
          <RefreshCw size={30} className="application-spin" />
          <h2>Loading application...</h2>
          <p>Please wait while we retrieve vendor details.</p>
        </div>
      ) : !error && !application ? (
        <div className="application-empty-state">
          <FileText size={42} />
          <h2>No pending applications</h2>
          <p>
            All caught up! New vendor applications will appear here
            after they are saved to the database.
          </p>
          <button type="button" onClick={fetchApplication}>
            Check Again
          </button>
        </div>
      ) : !error && application ? (
        <section className="application-review-card">
          <div className="application-card-header">
            <div>
              <span className="application-pending-badge">
                <span />
                Pending Review
              </span>
              <h2>{application.businessName || "Unnamed Business"}</h2>
              <p>Submitted {formatDate(application.createdAt)}</p>
            </div>

            <div className="application-business-icon">
              <Store size={27} />
            </div>
          </div>

          {businessImageUrl && (
            <img
              className="application-business-image"
              src={businessImageUrl}
              alt={application.businessName || "Vendor business"}
              onError={(event) => {
                console.error(
                  "Business image failed to load:",
                  event.currentTarget.src
                );
              }}
            />
          )}

          <div className="application-details-grid">
            <div className="application-detail">
              <span>Business Name</span>
              <strong>{application.businessName || "Not provided"}</strong>
            </div>

            <div className="application-detail">
              <span>Owner Name</span>
              <strong>{application.ownerName || "Not provided"}</strong>
            </div>

            <div className="application-detail">
              <span>Business Category</span>
              <strong>{application.businessCategory || "Not provided"}</strong>
            </div>

            <div className="application-detail">
              <span>Special Products</span>
              <strong>{application.specialProducts || "Not provided"}</strong>
            </div>

            <div className="application-detail">
              <span>Email Address</span>
              <strong>
                <Mail size={15} />
                {application.email || "Not provided"}
              </strong>
            </div>

            <div className="application-detail">
              <span>Phone Number</span>
              <strong>
                <Phone size={15} />
                {application.phone || "Not provided"}
              </strong>
            </div>

            <div className="application-detail full-width">
              <span>Business Location</span>
              <strong>
                <MapPin size={16} />
                {locationText}
              </strong>
            </div>

            <div className="application-detail full-width">
              <span>Application ID</span>
              <strong className="application-id">
                {application._id}
              </strong>
            </div>
          </div>

          {verificationFileUrl && (
            <div className="application-document-note">
              <FileText size={18} />
              <div>
                <strong>Verification document uploaded</strong>
                <p>Check the submitted document before making a decision.</p>
                <a
                  href={verificationFileUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Verification Document
                </a>
              </div>
            </div>
          )}

          <div className="application-actions">
            <button
              type="button"
              className="application-reject-btn"
              onClick={() => handleDecision("Rejected")}
              disabled={processing}
            >
              <XCircle size={18} />
              {processing ? "Processing..." : "Reject Application"}
            </button>

            <button
              type="button"
              className="application-approve-btn"
              onClick={() => handleDecision("Approved")}
              disabled={processing}
            >
              <CheckCircle2 size={18} />
              {processing ? "Processing..." : "Approve Vendor"}
            </button>
          </div>
        </section>
      ) : null}
    </div>
  );
}

export default VendorApplications;
