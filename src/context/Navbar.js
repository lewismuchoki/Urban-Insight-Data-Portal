import React from "react";
import { Link } from "react-router-dom";
import "../context/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Urban Insight <i class="fa-solid fa-house"></i>
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/data" className="nav-links">
              Data
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/events" className="nav-links">
              Events
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-links">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}