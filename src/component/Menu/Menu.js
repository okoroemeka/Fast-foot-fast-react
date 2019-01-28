import React, { Component, Fragment } from "react";
import FoodCard from "./FoodCard";

class MenuPage extends Component {

  handleAddToCart = (mealClicked) => {
    this.props.addToCartAction(mealClicked);
  }
  componentDidMount() {
    this.props.getAllAvailableFood();
  }
  render() {
    const foodItems = !this.props.foodItems[0] ? (
      <div />
    ) : (
      this.props.foodItems[0].map(foodItem => {
        return (
          <FoodCard
            meal={foodItem}
            key={foodItem.id}
            food={foodItem.food}
            food_image={foodItem.food_image}
            price={foodItem.price}
            onClickAddToCart={this.handleAddToCart}
            onClickHandleOrderNow={this.handleOrderNow}
          />
        );
      })
    );
    return (
      <Fragment>
        <div className="row menu-container">
          <div className="col-12" id="menu-banner">
            <div id="banner-caption-container">
              <div id="banner-caption">
                Don't ever go hungry, we are here to serve you.
              </div>
            </div>
          </div>
        </div>
        <div className="row food-cards-container">
          <div className="col-10">
            <div
              className="row food-cards-sub-container"
              id="food-cards-sub-container"
            >
              {foodItems}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default MenuPage;
