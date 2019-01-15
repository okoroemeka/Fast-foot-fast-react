import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signupUser } from '../../../actions/index';
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
    const response = await this.props.signupUser(this.state);
    this.props.history.push('/menu');
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
                    <p>Full name</p>
                    <input
                      type="text"
                      name="fullname"
                      value={this.state.fullname}
                      placeholder="Enter full name"
                      required="required"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 form-input">
                    <p>Email</p>
                    <input
                      type="Email"
                      name="email"
                      value={this.state.email}
                      placeholder="Enter Email"
                      required="required"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>

                <div className="row password-input">
                  <div className="col-12 form-input">
                    <p>Password</p>
                    <input
                      type="Password"
                      name="password"
                      placeholder="Enter Password"
                      value={this.state.password}
                      required="required"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                <div className="row password-input">
                  <div className="col-12 form-input">
                    <p>Confirm Password</p>
                    <input
                      type="Password"
                      name="confirmPassword"
                      value={this.state.confirmPassword}
                      placeholder="Enter Password again"
                      required="required"
                      onChange={this.handleInputChange}
                    />
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
const mapStateToProps = (state) =>{
  return {userToken: state.auth}
}
export default withRouter(connect(mapStateToProps, {signupUser})(SignUp));
