import React, { Component } from "react";
import SignUpFormArea from "../../component/SignUp/SignupConnect";
import "../SignIn/SignIn.css";
class FormWrapper extends Component {
  render() {
    return (
      <div className="signupForm-container">
        <div className="signup-overlay">
          <SignUpFormArea />
        </div>
      </div>
    );
  }
}
export default FormWrapper;
