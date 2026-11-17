import React from 'react'
import "./HomeBusines-Card.css";
import { Link } from "react-router-dom";
function Cardstyle() {
  return (
    <>
   <section className="business-card">

  <div className="business-card-image">
    <img
      src="/Clothing  business.avif"
      alt="Clothing Store"
    />
  </div>

  <div className="business-card-content">

    <h2>Clothing & Fashion</h2>

    <p>
      Discover local clothing and fashion businesses across Lahore. 
      Customers can explore and purchase clothing, footwear, accessories, and other fashion products. 
      Business owners can also create their own shop on Lahore360, showcase their products, and reach customers across the city.
    </p>
 
  </div>

</section> 

 {/* 2nd Card */}
<section className="business-card02">

  <div className="business-card-image02">
    <img
      src="/Electronics business.jpg"
      alt="Electronics Store"
    />
  </div>

  <div className="business-card-content02">

    <h2>Electronics & IT Devices</h2>

    <p>
      Explore a wide range of electronics and IT-related products from local businesses in Lahore. 
      Customers can discover and purchase laptops, computers, smartphones, accessories, headphones, keyboards, and other technology devices. 
      Electronics retailers can create their own shop, list their products, and connect with local customers.
    </p>

     </div>

</section> 

 {/* 3rd Card */}
<section className="business-card">

  <div className="business-card-image">
    <img
      src="/Food business.jpg"
      alt="Restaurants"
    />
  </div>

  <div className="business-card-content">

    <h2>Restaurants & Food</h2>

    <p>
     Discover restaurants and food businesses across Lahore and explore a variety of menus and dining options. 
     Customers can browse restaurants, explore food items, and place orders conveniently. 
     Restaurant owners can create their own business profile, showcase their menu, and reach more local customers through Lahore360.
    </p>

  </div>

</section> 
</>
  )
}

export default Cardstyle