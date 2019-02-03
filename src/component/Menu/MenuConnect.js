import { connect } from 'react-redux';
import MenuPage from './Menu';
import { foodItems } from '../../selectors/food';
import { getAllAvailableFood, addToCartAction } from '../../../actions';

const mapStateToProps = state => {
  return {
    foodItems: foodItems(state),
    Cart: state.cart
  };
};
export default connect(
  mapStateToProps,
  { getAllAvailableFood, addToCartAction }
)(MenuPage);