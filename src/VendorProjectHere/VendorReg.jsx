
import React, { useState } from "react";
import "./VendorReg.css";
import { useNavigate } from "react-router-dom";
import { FaCamera, FaLocationDot, FaCloudArrowUp } from "react-icons/fa6";


const VendorRegistration = () => {
    const navigate = useNavigate();
  const [businessImage, setBusinessImage] = useState(null);
  const [businessImagePreview, setBusinessImagePreview] = useState("");
  const [verificationFile, setVerificationFile] = useState(null);
  const [location, setLocation] = useState("");
  const [businessCategory, setBusinessCategory] = useState("");
  const [specialProducts, setSpecialProducts] = useState("");

  
  const handleBusinessImage = (e) => {
  const file = e.target.files[0];

  if (file) {
    setBusinessImage(file);
    setBusinessImagePreview(URL.createObjectURL(file));
  }
};

  const handleVerificationFile = (e) => {
    const file = e.target.files[0];

    if (file) {
      setVerificationFile(file);
    }
  };

 

  const handleLocation = () => {
    if (!navigator.geolocation) {
      alert("Location is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {

         const { latitude, longitude } = position.coords;
          
          setLocation({ latitude, longitude });

       
      },
      () => {
        alert("Unable to get your location.");
      }
    );
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    if (!location) {
      alert("Please add your shop location.");
      return;
    }

    const formData = new FormData(e.currentTarget);

    // Actual image file, not its preview URL
    if (businessImage) {
      formData.set("businessImage", businessImage);
    }

    formData.set("latitude", String(location.latitude));
    formData.set("longitude", String(location.longitude));

    const response = await fetch(
      "http://localhost:5000/api/vendors/register",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Registration failed");
    }

    navigate("/application-submitted", {
      state: { vendorId: data.vendorId },
    });
  } catch (error) {
    console.error("Registration error:", error);
    alert(error.message || "Unable to submit registration.");
  }
};

  
  return (
    <div className="vendor-registration">

      {/* Header */}
      <div className="registration-header">
        <span className="registration-tag">
          LAHORE360 BUSINESS
        </span>

        <h1>Create Your Business on Lahore360</h1>

        <p>
          Bring your business online, connect with customers across Lahore,
          and grow your local presence.
        </p>
      </div>

      {/* Form Card */}
      <div className="registration-card">

       <form onSubmit={handleSubmit}>

          {/* Business Image */}
          <div className="image-upload-section">

            <div className="business-image">

             {businessImagePreview ? (
             <img src={businessImagePreview} alt="Business" />
            ) : (
                <FaCamera />
           )}

              <label htmlFor="businessImage">
                <FaCamera />
              </label>

            </div>

            <div>
              <h3>Business Image</h3>

              <p>
                Upload your business logo or shop image.
              </p>

              <input
                id="businessImage"
                type="file"
                accept="image/*"
                onChange={handleBusinessImage}
              />
            </div>

          </div>


          {/* Business Information */}
          <div className="form-section">

            <h2>Business Information</h2>

            <div className="form-grid">

              {/* Business Name */}
              <div className="form-group">
                <label>
                  Business Name <span>*</span>
                </label>

               <input
                    type="text"
                    name="businessName"
                    placeholder="Enter your business name"
                    required
                  />
              </div>


              {/* Owner Name */}
              <div className="form-group">
                <label>
                  Owner Name <span>*</span>
                </label>

               <input
                    type="text"
                    name="ownerName"
                    placeholder="Enter owner name"
                    required
                  />
              </div>

              
               {/* Business Category */}
              <div className="form-group">
                <label>
                  Business Category <span>*</span>
                </label>

                <select
                  name="businessCategory"
                  value={businessCategory}
                  onChange={(e) => setBusinessCategory(e.target.value)}
                  required >
               
                  <option value="">Select Business Category</option>
                  <option value="clothing">Clothing</option>
                  <option value="electronics">Electronics</option>
                  <option value="restaurant">Restaurant</option>
                </select>
              </div>


              {/* Special Products */}
              <div className="form-group full-width">
                <label>
                 Your Business Speciality
                </label>

                <textarea
                name="specialProducts"
                  placeholder="Write description for customers attraction......"
                  rows="4"
                  maxLength={70}
                  value={specialProducts}
                  onChange={(e) => setSpecialProducts(e.target.value)}
                ></textarea>
                <small>
                  {specialProducts.length}/70 characters
                </small>

                <small>
                  Example: Men clothing, ladies suits, electronics,
                  fast food, burgers, pizza etc.
                </small>
              </div>

            </div>

          </div>


          {/* Verification */}
          <div className="form-section">

            <h2>Business Verification</h2>

            <p className="section-description">
              Upload a government-issued permission, license,
              registration certificate, or other document that
              verifies your business.
            </p>

            <div className="verification-upload">

              <FaCloudArrowUp />

              <h3>
                Upload Verification Document
              </h3>

              <p>
                PDF, JPG or PNG
              </p>

              <label htmlFor="verificationFile">
                Choose Document
              </label>

              <input
              name="verificationFile"
                id="verificationFile"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleVerificationFile}
                required
              />

              {verificationFile && (
                <div className="file-name">
                  ✓ {verificationFile.name}
                </div>
              )}

            </div>

          </div>


          {/* Contact Information */}
          <div className="form-section">

            <h2>Contact Information</h2>

            <div className="form-grid">

              {/* Email */}
              <div className="form-group">
                <label>
                  Email Address <span>*</span>
                </label>

                <input
                name="email"
                  type="email"
                  placeholder="business@example.com"
                  required
                />
              </div>


              {/* CNIC */}
              <div className="form-group">
                <label>
                  CNIC / ID Card Number <span>*</span>
                </label>

                <input
                name="cnic"
                  type="text"
                  placeholder="XXXXX-XXXXXXX-X"
                  maxLength="15"
                  required
                />
              </div>


              {/* Phone */}
              <div className="form-group">
                <label>
                  Phone Number <span>*</span>
                </label>

                <input
                name="phone"
                  type="tel"
                  placeholder="03XX-XXXXXXX"
                  required
                />
              </div>


              {/* City */}
              <div className="form-group">
                <label>
                  City <span>*</span>
                </label>

                <input
                  type="text"
                  value="Lahore"
                  readOnly
                />
              </div>

            </div>

          </div>


          {/* Location */}
          <div className="form-section">

            <h2>Shop Location</h2>

            <p className="section-description">
              Add the exact location of your shop so customers
              can easily find your business.
            </p>

            <button
              type="button"
              className="location-button"
              onClick={handleLocation}
            >
              <FaLocationDot />

              {location
                ? "Location Added"
                : "Add Shop Location"}
            </button>

              {location && (
                <div className="location-result">
                  <FaLocationDot />
                  <span>
                    Latitude: {location.latitude},
                    Longitude: {location.longitude}
                  </span>
                </div>
              )}
          </div>


          {/* Submit */}
          <div className="submit-section">

            <button
              type="submit"
              className="submit-business"
            >
              Submit Business for Approval
            </button>

            <p>
              Your business will be reviewed by Lahore360
              administration before approval.
            </p>

          </div>

        </form>

      </div>

    </div>
  );
};

export default VendorRegistration;

