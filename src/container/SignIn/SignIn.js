import React, { Component } from "react";
import SigninFormArea from "../../component/SignIn/Signin";
import NavigationBar from "../../component/SignIn/NavBar";
import "./SignIn.css";
class FormWrapper extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="signin-container">
        <div className="signin-overlay">
          <NavigationBar />
          <SigninFormArea />
        </div>
      </div>
    );
  }
}
export default FormWrapper;
