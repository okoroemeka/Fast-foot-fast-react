import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CardWrapper from './CardWrapper';
import { foodItems } from '../../selectors/food';
import { getAllAvailableFood } from '../../../actions';

const mapStateToProps = state => {
  return {
    meals: foodItems(state)
  }
}

export default withRouter(connect(mapStateToProps, {getAllAvailableFood})(CardWrapper));