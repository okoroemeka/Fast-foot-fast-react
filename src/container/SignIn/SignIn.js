import React, { Component } from "react";
import SigninFormArea from "../../component/SignIn/SigninConnect";
import "./SignIn.css";
class FormWrapper extends Component {
  render() {
    return (
      <div className="signin-container">
        <div className="signin-overlay">
          <SigninFormArea />
        </div>
      </div>
    );
  }
}
export default FormWrapper;
