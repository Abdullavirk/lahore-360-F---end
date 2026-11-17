import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Navigation from "../Components/Navigation";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CardStyle from "../Components/HomeBusines-Card";
import ClothShops from "../AllShopsPages/ClothShops";
import ElectronicShops from "../AllShopsPages/ElectronicShops";
import AllRestaurants from "../AllShopsPages/AllRestaurants";



function Home() {
  return (
    <div className="home">

    <Navigation />
    <Header />

      <marquee  className="marquee" behavior="scroll" direction="left" scrollAmount="10">
        💻 <strong>Premium Electronics</strong>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        💰 <strong>Best Prices</strong>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        🚚 <strong>Fast Delivery</strong>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        ⭐ <strong>100% Genuine Products</strong>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        🔒 <strong>Secure Payments</strong>
      </marquee>

      {/* Categories Section */}
      <section className="categories-section">

        <h2>What are you looking for?</h2>

        <div className="category-container">

          {/* Clothing */}
          <Link to="/clothing" className="category-card">
            <div className="category-icon">👕</div>

            <h3>Clothing</h3>

            <p>
              Fashion &amp; Accessories
            </p>
          </Link>

          {/* Electronics */}
          <Link to="/electronics" className="category-card">
            <div className="category-icon">📱</div>

            <h3>Electronics</h3>

            <p>
              Mobiles &amp; Gadgets
            </p>
          </Link>

          {/* Restaurants */}
          <Link to="/restaurants" className="category-card">
            <div className="category-icon">🍔</div>

            <h3>Restaurants</h3>

            <p>
              Food &amp; Dining
            </p>
          </Link>

        </div>

        <p className="category-description">
          Find what you need, right here in Lahore.
        </p>

      </section>
<CardStyle />

     

    <Footer />

    </div>
  );
}

export default Home;