  import React from 'react'
  import { Link } from "react-router-dom";
  import "./Navigation.css"
  function Navigation() {
    return (

      <nav className="navbar">
        <Link to="/" className="logo">
          Lahore<span>360</span>
        </Link>

        <div className="nav-right">
          <Link to="/" className="page-name">
            Home
          </Link>

          <Link to="/cart" className="page-name">
           Cart 🛒
          </Link>

        
          <div className="nav-dropdown">
         <button className="nav-dropdown-btn">
             About Us ▾
             </button>

          <div className="nav-dropdown-menu">
             <Link to="/about">About Lahore360</Link>
             <Link to="/contact">Contact Us</Link>
             <Link to="/faq">FAQs</Link>
      </div>
</div>



          <Link to="/login" className="login-btn">
            Login
          </Link>
           <Link to="/sign" className="login-btn">
            SignUp
          </Link>
        </div>
      </nav>
    )
  }
  
  export default Navigation
