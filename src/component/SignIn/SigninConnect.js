import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SignInFormArea from './Signin';
import { logInUser } from '../../../actions';
const mapStateToProps = (state) => {
  return{userToken: state.auth}
}
export default withRouter(connect(mapStateToProps, {logInUser})(SignInFormArea));