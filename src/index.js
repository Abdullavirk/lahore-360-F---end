import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Customer Pages
import UserLogin from "./CommonLogin";
import UserSign from "./CommonSignup";
import Home from "./NavPages/Home";
import ClothShops from "./AllShopsPages/ClothShops";
import ElectronicShops from "./AllShopsPages/ElectronicShops";
import AllRestaurants from "./AllShopsPages/AllRestaurants";

// Vendor Pages
import VendorReg from "./VendorProjectHere/VendorReg";
import ApplicationSubmitted from "./VendorProjectHere/ApplicationSubmitted";
// import VendorSignUp from "./VendorAuthPages/SignUp";
import ClothingPanel from "./VendorProjectHere/AllVendoringPanels/Clothing Panel/C-Panel";
import ElectronicsPanel from "./VendorProjectHere/AllVendoringPanels/Tech Electronics/E-Panel";
import RestaurantPanel from "./VendorProjectHere/AllVendoringPanels/Restaurants Panel/R-Panel";

// Vendor Shared Component
import VendorPanel from "./Components/VendorPanel";

// Admin Pages
// import AdminSignIn from "./Pages/AdminSignIn";
// import AdminSignUp from "./Pages/AdminSignUp";
import AdministrativePanel from "./AdministrativeProjectHere/Main Panel/AdministrativePanel";
import VendorApplication from "./AdministrativeProjectHere/Pages/VendorApplication";
import AllVendors from "./AdministrativeProjectHere/Pages/AllVendors";

const wholeRoutes = createBrowserRouter([
  // =========================
  // CUSTOMER ROUTES
  // =========================

  {
    path: "/user/login",
    element: <UserLogin />,
   },
   {
    path: "/",
    element: <UserSign />,
   },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/clothing",
    element: <ClothShops />,
  },
  {
    path: "/electronic",
    element: <ElectronicShops />,
  },
  {
    path: "/restaurants",
    element: <AllRestaurants />,
  },

  // =========================
  // VENDOR ROUTES
  // =========================
  {
    path: "/vendor/register",
    element: <VendorReg />,
  },
  {
    path: "/application-submitted",
    element: <ApplicationSubmitted />,
  },
  // {
  //   path: "/vendor/login",
  //   element: <VendorLogin />,
  // },
  // {
  //   path: "/vendor/signup",
  //   element: <VendorSignUp />,
  // },

  // Vendor Shared Panel
  {
    path: "/vendor/panel",
    element: <VendorPanel />,
  },

  // Category-specific Vendor Panels
  {
    path: "/vendor/clothing",
    element: <ClothingPanel />,
  },
  {
    path: "/vendor/electronics",
    element: <ElectronicShops />,
  },
  {
    path: "/vendor/restaurant",
    element: <RestaurantPanel />,
  },

  
  // =========================
  // ADMIN ROUTES
  // =========================
  // ADMIN AUTHENTICATION ROUTES
// {
//   path: "/administrative-panel/signin",
//   element: <AdminSignIn />,
// },
// {
//   path: "/administrative-panel/signup",
//   element: <AdminSignUp />,
// },
// ADMIN AUTHENTICATION ROUTES End
  {
    path: "/administrative-panel",
    element: <AdministrativePanel />,
    children: [
      {
        path: "applications",
        element: <VendorApplication />,
      },
      {
        path: "vendors",
        element: <AllVendors />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>
    <RouterProvider router={wholeRoutes} />
  </React.StrictMode>
);

reportWebVitals();
