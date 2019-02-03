import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import OrderForm from './checkoutForm';
import { checkout } from '../../../actions';
import './Checkout.css';
const mapStateToProps = state => {
  return { checkout: state.checkout, cart:state.cart };
};
export default withRouter(
  connect(
    mapStateToProps,
    { checkout }
  )(OrderForm)
);