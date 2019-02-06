import React from "react";
import { connect } from 'react-redux';
import MenuPage from "../../component/Menu/MenuConnect";
import "./Menu.css";

const MenuPageContainer = ({ cart }) => {
  return (
    <div className="container">
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
