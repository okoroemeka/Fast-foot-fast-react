import React from "react";
import { Link } from "react-router-dom";
const NavigationBar = () => {
  return (
    <header>
      <nav className="navbar">
        <div id="navbar-toggle">
          <i className="fas fa-bars" />
        </div>
        <Link to="/" id="logo">
          fast-food-fast
        </Link>
        <ul id="main-nav">
          <li>
            <Link to="/signup" className="nav-links">
              signup
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;