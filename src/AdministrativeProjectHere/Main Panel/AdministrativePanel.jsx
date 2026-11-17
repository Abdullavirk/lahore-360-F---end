
import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import './AdministrativePanel.css';
import {
  LayoutDashboard,
  ClipboardList,
  Store,
  Users,
  ShoppingBag,
  Tags,
  ChartNoAxesCombined,
  Settings,
  LogOut,
  Bell,
} from "lucide-react";



const menuItems = [
  {
    name: "Dashboard",
    path: "/administrative-panel/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Vendor Applications",
    path: "/administrative-panel/applications",
    icon: ClipboardList,
  },
  {
    name: "All Vendors",
    path: "/administrative-panel/vendors",
    icon: Store,
  },
  {
    name: "Customers",
    path: "/administrative-panel/customers",
    icon: Users,
  },
  {
    name: "Orders",
    path: "/administrative-panel/orders",
    icon: ShoppingBag,
  },
  {
    name: "Categories",
    path: "/administrative-panel/categories",
    icon: Tags,
  },
  {
    name: "Reports",
    path: "/administrative-panel/reports",
    icon: ChartNoAxesCombined,
  },
  {
    name: "Settings",
    path: "/administrative-panel/settings",
    icon: Settings,
  },
];

function AdministrativePanel({ adminName = "Super Admin", onLogout }) {
  const navigate = useNavigate();

  return (
    <div className="super-admin-layout">
      {/* Sidebar */}
      <aside className="super-admin-sidebar">
        <div className="super-admin-logo">
          <div className="admin-logo-icon">
            L
          </div>

          <div>
            <h2>Lahore360</h2>
            <span>Super Admin Portal</span>
          </div>
        </div>

        <p className="admin-menu-heading">MAIN MENU</p>

        <nav className="super-admin-nav">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end
                className={({ isActive }) =>
                  isActive
                    ? "admin-nav-link active"
                    : "admin-nav-link"
                }
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>

        <button
          className="admin-logout-btn"
          onClick={() => {
            if (onLogout) {
              onLogout();
            } else {
              navigate("/");
            }
          }}
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </aside>

      {/* Main content */}
      <main className="super-admin-main">
        <header className="super-admin-header">
          <div>
            <h3>Admin Panel</h3>
            <p>Manage your Lahore360 marketplace</p>
          </div>

          <div className="admin-header-right">
            <button
              className="admin-notification-btn"
              aria-label="Notifications"
            >
              <Bell size={20} />
            </button>

            <div className="admin-profile">
              <div className="admin-avatar">
                {adminName.charAt(0).toUpperCase()}
              </div>

              <div>
                <strong>{adminName}</strong>
                <span>Super Admin</span>
              </div>
            </div>
          </div>
        </header>

        <section className="super-admin-content">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default AdministrativePanel;
