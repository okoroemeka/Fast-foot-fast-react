import React, { Component } from "react";
import SignUpFormArea from "../../component/SignUp/SignUp";
import NavigationBar from "../../component/SignUp/NavBar";
import "../SignIn/SignIn.css";
class FormWrapper extends Component {
  // componentDidMount() {}
  render() {
    return (
      <div className="signupForm-container">
        <div className="signup-overlay">
          <NavigationBar />
          <SignUpFormArea />
        </div>
      </div>
    );
  }
}
export default FormWrapper;
