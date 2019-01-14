import React from "react";
import { Link } from 'react-router-dom';
// import "./Banner.css";

const Banner = () => (
  <div className="row hero-container">
    <div className="col-12 hero" id="hero">
      <div className="row overlay-container">
        <div className="col-12" id="hero-overlay">
          <div className="row caption-container">
            <div className="col-10 caption">
              <div className="row">
                <div className="col-12">
                  <p id="home-page-text">
                    Home of beautiful Intercontinental cuisins and fast
                    delivery.
                  </p>
                  <p id="home-page-signup-text">Sign up and lets feed you</p>
                </div>
              </div>
              <div className="row landing-page-button-container">
                <div className="col-12 home-buttons">
                  <Link to="signup" id="landingPage-sign-up">
                    Sign up
                  </Link>
                  <Link to="login" id="landingPage-logIn-button">
                    Log In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
