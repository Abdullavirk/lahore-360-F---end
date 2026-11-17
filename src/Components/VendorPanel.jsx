import React from "react";
import {
  LayoutDashboard,
  Store,
  Package,
  ChartNoAxesColumn,
  Ruler,
  Palette,
  ShoppingCart,
  CircleDollarSign,
  Star,
  Settings,
  LogOut,
  Bell,
  ChevronDown,
} from "lucide-react";

import "./VendorPanel.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";

// =====================================
// CATEGORY-WISE SIDEBAR FEATURES
// =====================================

const featuresByCategory = {
  
  Clothing: [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Business", icon: Store },
    { name: "Products", icon: Package },
    { name: "Inventory", icon: ChartNoAxesColumn },
    { name: "Sizes", icon: Ruler },
    { name: "Colors", icon: Palette },
    { name: "Orders", icon: ShoppingCart },
    { name: "Sales", icon: CircleDollarSign },
    { name: "Reviews", icon: Star },
    { name: "Settings", icon: Settings },
  ],

  Electronics: [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Business", icon: Store },
    { name: "Products", icon: Package },
    { name: "Inventory", icon: ChartNoAxesColumn },
    { name: "Specifications", icon: Settings },
    { name: "Warranty", icon: Star },
    { name: "Orders", icon: ShoppingCart },
    { name: "Sales", icon: CircleDollarSign },
    { name: "Reviews", icon: Star },
    { name: "Settings", icon: Settings },
  ],

  Restaurant: [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Business", icon: Store },
    { name: "Menu", icon: Package },
    { name: "Menu Categories", icon: ChartNoAxesColumn },
    { name: "Ingredients", icon: Package },
    { name: "Orders", icon: ShoppingCart },
    { name: "Sales", icon: CircleDollarSign },
    { name: "Reviews", icon: Star },
    { name: "Settings", icon: Settings },
  ],
};

// const menuItem[
//   {
//     name: Dashboard,
//     path: "/vendorpanel/dashboard",
//     icon: LayoutDashboard
//   }
// ];


// =====================================
// VENDOR PANEL
// =====================================

const VendorPanel = ({
  
  businessName = "Your Business",
  category = "Clothing",
  vendorName = "Vendor Name",
  location = "Lahore",
}) => {
  const features =
    featuresByCategory[category] || [];

const navigate = useNavigate();
const [activeFeature, setActiveFeature] = useState(null);
  return (
    <div className="vendor-panel">

      {/* SIDEBAR */}

      <aside className="vendor-sidebar">

        <div className="vendor-logo">
          <h2>
            Lahore<span>360</span>
          </h2>

          <p>Vendor Panel</p>
        </div>

        <nav className="vendor-menu">
        
            {features.map((feature) => {
              const Icon = feature.icon;

              const path = feature.name
                .toLowerCase()
                .replace(/\s+/g, "-");

              return (
                <NavLink
                  key={feature.name}
                  to={`/vendorpanel/${path}`}
                  className={({ isActive }) =>
                    `menu-item ${isActive ? "active" : ""}`
                  }
                >
                  <Icon className="menu-icon" strokeWidth={1} />
                  <span>{feature.name}</span>
                </NavLink>
              );
            })}

        </nav>

        <button className="logout-button" type="button">
              
          <LogOut className="logout-icon" strokeWidth={2} />
          <span>Logout</span>
        </button>
<button className="logout-button" type="button"  onClick={()=> navigate("/R-Panel")}>
  Next
</button>
      </aside>

      {/* MAIN AREA */}

      <div className="vendor-main">

        {/* TOP HEADER */}

        <header className="vendor-header">

          <div className="header-left">
            <h1>Dashboard</h1>
            <p>Welcome back to Lahore360</p>
          </div>

          <div className="vendor-user">

            <button
              type="button"
              className="notification"
              aria-label="Notifications"
            >
              <Bell size={27} strokeWidth={1.8} />

              <span className="notification-badge">3</span>
            </button>

            <div className="user-avatar">
              {vendorName.charAt(0).toUpperCase()}
            </div>

            <div className="user-info">
              <strong>{vendorName}</strong>
              {/* <small>Business Owner</small> */}
            </div>

           

          </div>

        </header>

        {/* DASHBOARD CONTENT */}

        <main className="vendor-content">
          <Outlet />

          <section className="page-heading">
            <h2>Dashboard Overview</h2>

            <p>
              Manage your{" "}
              <span className="category-highlight">
                {category.toLowerCase()}
              </span>{" "}
              business from here.
            </p>
          </section>

        </main>

      </div>

    </div>
  );
};

export default VendorPanel;