import React,{ Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import Logout from '../Logout/Logout';

const NavigationBar = ({cart, isLoggedIn}) =>  {
  
  const menuItemToDisplay = isLoggedIn ? (
    <Fragment>
      <li>
        <Link to="/menu" className="nav-links">
          menu
        </Link>
      </li>
      <li>
        <Link to="/order-history" className="nav-links">
          orders
        </Link>
      </li>
      <li>
        <Logout />
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
    </Fragment>
    ) : (
      <Fragment>
        <li>
          <Link to="/login" className="nav-links">
            login
          </Link>
        </li>
        <li>
          <Link to="/signUp" className="nav-links">
            signup
          </Link>
        </li>
      </Fragment>
    );
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
            {menuItemToDisplay}
          </ul>
        </nav>
      </header>
    );
  };
const mapStateToProps = (state) => {
  window.localStorage.setItem('meals', JSON.stringify(state.cart))
  return {
    cart: state.cart,
    isLoggedIn: state.auth.isLoggedIn,
  }
} 
export default connect(mapStateToProps, null)(NavigationBar);
