import React, { Component } from "react";
import CheckoutFormArea from "../../component/Cart/CheckoutFormConnect";
import NavigationBar from "../../component/Menu/NavBar";
class FormWrapper extends Component {
  render() {
    return (
      <div className="checkout-container">
          <NavigationBar />
          <CheckoutFormArea />
      </div>
    );
  }
}
export default FormWrapper;
