import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";  // ✅ ADD
import "../styles/Navbar.css";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ GET AUTH STATE
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* LOGO */}
        <div className="nav-logo">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        {/* HAMBURGER BUTTON */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={menuOpen ? "bar open" : "bar"}></span>
          <span className={menuOpen ? "bar open" : "bar"}></span>
          <span className={menuOpen ? "bar open" : "bar"}></span>
        </div>

        {/* MENU */}
        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>

          <li><NavLink to="/" end 
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={() => setMenuOpen(false)}>
            Home
          </NavLink></li>

          <li><NavLink to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={() => setMenuOpen(false)}>
            About Me
          </NavLink></li>

          <li><NavLink to="/projects"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={() => setMenuOpen(false)}>
            Projects
          </NavLink></li>

          <li><NavLink to="/education"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={() => setMenuOpen(false)}>
            Education
          </NavLink></li>

          <li><NavLink to="/services"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={() => setMenuOpen(false)}>
            Services
          </NavLink></li>

          <li><NavLink to="/contact"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink></li>

          {/* ================================================== */}
          {/* IF USER LOGGED IN → SHOW ADMIN + SIGNOUT          */}
          {/* ================================================== */}
          {user ? (
            <>
              <li className="welcome-text">
                Welcome, {user.fullName.split(" ")[0]}
              </li>

              <li>
                <NavLink to="/admin/dashboard"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  onClick={() => setMenuOpen(false)}>
                  Dashboard
                </NavLink>
              </li>

              <li>
                <button className="logout-btn"
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}>
                  Sign Out
                </button>
              </li>
            </>
          ) : (
            /* ================================================== */
            /* USER LOGGED OUT → SHOW SIGNIN + SIGNUP             */
            /* ================================================== */
            <>
              <li>
                <NavLink to="/signin"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  onClick={() => setMenuOpen(false)}>
                  Sign In
                </NavLink>
              </li>

              <li>
                <NavLink to="/signup"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  onClick={() => setMenuOpen(false)}>
                  Sign Up
                </NavLink>
              </li>
            </>
          )}

        </ul>
      </div>
    </nav>
  );
}
