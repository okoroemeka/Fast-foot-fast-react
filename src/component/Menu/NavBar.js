import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ children }) => {
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
          {children ? children.map(element => element) : ""}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
