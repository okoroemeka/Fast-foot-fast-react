import React, { Component } from "react";
import CheckoutFormArea from "../../component/Cart/CheckoutFormConnect";
class FormWrapper extends Component {
  render() {
    return (
      <div className="checkout-container">
          <CheckoutFormArea />
      </div>
    );
  }
}
export default FormWrapper;
