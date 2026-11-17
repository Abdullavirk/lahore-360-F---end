import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-design">

      {/* Hero Section */}
      <section className="hero">
        <h1>Discover Lahore. Shop Local.</h1>

        <p>
          Everything you need, from Lahore.
        </p>
      </section>

      {/* Explore Lahore */}
      <section className="explore-section">
        <h2>Explore Lahore</h2>

        <p className="explore-text">
          Find shops and buy products in your area
        </p>

        <div className="area-select-wrapper">
          <span className="location-icon">📍</span>

          <select className="area-select">
            <option value="">Select your area</option>
            <option value="gulberg">Gulberg</option>
            <option value="dha">DHA</option>
            <option value="johar-town">Johar Town</option>
            <option value="model-town">Model Town</option>
            <option value="wapda-town">Wapda Town</option>
            <option value="garden-town">Garden Town</option>
            <option value="township">Township</option>
            <option value="bahria-town">Bahria Town</option>
            <option value="anarkali">Anarkali</option>
            <option value="all-lahore">All Lahore</option>
          </select>
        </div>
      </section>

    </div>
  );
}

export default Header;