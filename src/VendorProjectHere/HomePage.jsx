import React from 'react'
import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
    <header className="header-part">

  <div className="header-content">

    <span className="header-badge">
      Lahore360 for Business
    </span>

    <h1>Create Your Business on Lahore360</h1>

    <p>
      Bring your business online and connect with customers across Lahore.
      Whether you own a clothing store, electronics business, restaurant,
      or another local business, Lahore360 gives you a platform to showcase
      your products and services, manage your business, and grow your
      customer reach.
    </p>

    <p className="header-subtext">
      Register your business today and take the next step toward building
      your presence in Lahore’s digital marketplace.
    </p>

  </div>

</header>
    <section className="categories-section">

        <h2>Choose Your Business & Get Started </h2>
<p>Select your business category, provide your details, and register your business on Lahore360.</p>
        <div className="category-container">

          {/* Clothing */}
          <Link to="/VendorReg" className="category-card">
            <div className="category-icon">👕</div>

            <h3>Clothing</h3>

            <p>
              Fashion &amp; Accessories
            </p>
          </Link>

          {/* Electronics */}
          <Link to="/VendorReg" className="category-card">
            <div className="category-icon">📱</div>

            <h3>Electronics</h3>

            <p>
              Mobiles &amp; Gadgets
            </p>
          </Link>

          {/* Restaurants */}
          <Link to="/VendorReg" className="category-card">
            <div className="category-icon">🍔</div>

            <h3>Restaurants</h3>

            <p>
              Food &amp; Dining
            </p>
          </Link>

        </div>
       </section>
       </>
  )
}

export default HomePage