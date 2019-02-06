import React, { Component } from "react";
import { Link } from 'react-router-dom';
class SignUp extends Component {
  state = {
    fullname: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  handleInputChange = (event) =>{
    const {name, value} = event.target;
    this.setState({...this.state,[name]: value});
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    await this.props.signupUser(this.state);
    return this.props.isLoggedIn ? this.props.history.push('/menu'): null;
  }
  render() {
    return (
      <div className="row sub-container">
        <div className="col-10">
          <div className="row signup-form-container">
            <div className="col-4 signup-container">
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-12 signup-image-container">
                    <h2>Sign up</h2>
                  </div>
                </div>
                <div className="row">
                </div>
                <div className="row">
                  <div className="col-12 form-input">
                    <label htmlFor="fullname">
                      Full name
                    <input
                      type="text"
                      name="fullname"
                      id="fullname"
                      value={this.state.fullname}
                      placeholder="Enter full name"
                      required="required"
                      onChange={this.handleInputChange}
                    />
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 form-input">
                    <label htmlFor="email">
                      Email
                    <input
                      type="Email"
                      name="email"
                      id="email"
                      value={this.state.email}
                      placeholder="Enter Email"
                      required="required"
                      onChange={this.handleInputChange}
                    />
                    </label>
                  </div>
                </div>

                <div className="row password-input">
                  <div className="col-12 form-input">
                    <label htmlFor="password">
                      Password
                    <input
                      type="Password"
                      name="password"
                      id="password"
                      placeholder="Enter Password"
                      value={this.state.password}
                      required="required"
                      onChange={this.handleInputChange}
                    />
                    </label>
                  </div>
                </div>
                <div className="row password-input">
                  <div className="col-12 form-input">
                    <label htmlFor="confirmPassword">
                    Confirm Password
                    <input
                      type="Password"
                      name="confirmPassword"
                      id="confirmPassword"
                      value={this.state.confirmPassword}
                      placeholder="Enter Password again"
                      required="required"
                      onChange={this.handleInputChange}
                    />
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 form-input">
                    <button type="submit" id="signup-page-button">
                      Sign up
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 form-input" id="login-form-alt">
                    <p>
                      Alredy have an account?
                      <Link to='/login'>Log in</Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;
