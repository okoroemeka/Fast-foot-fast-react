import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../../actions/index';

class Logout extends Component {
  state = {  }
  handleClick = () => {
    const {logOut:signOut, history} = this.props;
    signOut();
    return history.push('/')
  }
  render() { 
    return ( 
      <Fragment>
        <Link to='/' className="nav-links" onClick={this.handleClick}>
          Logout
        </Link>
      </Fragment>
     );
  }
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  }
} 
export default withRouter(connect(mapStateToProps, { logOut })(Logout));