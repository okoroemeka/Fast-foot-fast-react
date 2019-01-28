import { connect } from 'react-redux';
import CardWrapper from './CardWrapper';
import { foodItems } from '../../selectors/food';
import { getAllAvailableFood } from '../../../actions';

const mapStateToProps = state => {
  return {
    meals: foodItems(state)
  }
}

export default connect(mapStateToProps, {getAllAvailableFood})(CardWrapper);