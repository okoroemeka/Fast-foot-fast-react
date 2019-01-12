import React , {Component} from 'react';
import { getAllAvailableFood } from '../../../actions/index';
import {connect} from 'react-redux'
import FoodCard from '../../component/PopularFood/FoodCard';

class cardWrapper extends Component {
  componentDidMount() {
    this.props.getAllAvailableFood();
  }
  render() { 
    const bestMeals = !this.props.meals[0] ? <div></div> : this.props.meals[0].map((meal, index) => {
      if (index >= 4) {
        return;
      }
      return (
        <FoodCard key={meal.id} mealImage={meal.food_image} foodName={meal.food} price={meal.price}/>
    )});
    return ( 
      <div className='row card-container'>
        {bestMeals}
      </div>
     );
  }
}

const mapStateToProps = state => {
  return {
    meals: state.foods
  }
}

export default connect(mapStateToProps, {getAllAvailableFood})(cardWrapper);