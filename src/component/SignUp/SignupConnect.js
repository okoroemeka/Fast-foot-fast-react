import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SignUpFormArea from './SignUp';
import { signupUser } from '../../../actions';

const mapStateToProps = (state) =>{
  return {userToken: state.auth}
}
export default withRouter(connect(mapStateToProps, {signupUser})(SignUpFormArea));