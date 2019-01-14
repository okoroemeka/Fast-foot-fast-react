import React, {Component} from "react";
import { withRouter } from 'react-router-dom';
import { logInUser } from '../../../actions/index';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class SignInFormArea extends Component {
  state = {
    email: '',
    password: ''
  }
  handleInputChange = (event) =>{
    const {name, value} = event.target;
    this.setState({...this.state,[name]: value})
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    await this.props.logInUser(this.state);
    this.props.history.push('/menu');
  }
  render(){
  return (
    <div className="row sub-container">
      <div className="col-10">
        <div className="row login-form-container">
          <div className="col-4 login-container">
            <form  onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-12 login-image-container">
                  <h2>Log in</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-12 " id="response" />
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
                    value={this.state.password}
                    placeholder="Enter Password"
                    required="required"
                    onBlur={this.handleBlur}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 form-input">
                  <button type="submit" id="logIn-page-button">
                    Log in
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-12 form-input" id="login-form-alt">
                  <p>
                    Don't have an account?
                    <Link to="signup">sign up</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
}
const mapStateToProps = (state) => {
  return{userToken: state.auth}
}
export default withRouter(connect(mapStateToProps, {logInUser})(SignInFormArea));
