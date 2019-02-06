import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MenuPage from './Menu';
import { foodItems } from '../../selectors/food';
import { getAllAvailableFood, addToCartAction } from '../../../actions';

const mapStateToProps = state => {
  return {
    foodItems: foodItems(state),
    Cart: state.cart
  };
};
export default withRouter(connect(
  mapStateToProps,
  { getAllAvailableFood, addToCartAction }
)(MenuPage));