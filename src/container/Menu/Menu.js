import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MenuPage from "../../component/Menu/MenuConnect";
import NavBar from "../../component/Menu/NavBar";
import "./Menu.css";

const MenuPageContainer = ({ cart }) => {
  return (
    <div className="container">
      <NavBar>
        <li>
          <Link className="nav-links" to="/profile">
            Profile
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/cart">
            <i className="fa fa-shopping-cart" id="shoppingcart-icon">
              <div id="item-count">
                <span id="count">{cart ? Object.keys(cart).length : 0}</span>
              </div>
            </i>
          </Link>
        </li>
      </NavBar>
      <MenuPage />
    </div>
  );
};
const mapStateToProps = (state) => {
  window.localStorage.setItem('meals', JSON.stringify(state.cart))
  return {
    cart: state.cart,
  }
} 
export default connect(mapStateToProps, null)(MenuPageContainer);
