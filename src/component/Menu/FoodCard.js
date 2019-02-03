import React from "react";
const FoodCard = props => {
  return (
    <div className="col-3 food-card">
      <div className="food-card-child">
        <img
          src={props.food_image}
          alt={props.food}
          className="menu-food-image"
        />
        <div className="col-12 food-details">
          <ul>
            <li>
              <span className="facts">Name:</span>
              <span className="food">{props.food}</span>
            </li>
            <li>
              <span className="facts">Price:</span>
              <span className="Price"> &#8358; {props.price}</span>
            </li>
          </ul>
          <div className="row">
            <div className="col-6 order-button">
              <button className="order-now" type="submit" onClick={()=>props.onClickHandleOrderNow(props.meal)}>
                Order now
              </button>
            </div>
            <div className="col-6 add-to-cart-button">
              <button className="add-to-cart" onClick={()=>props.onClickAddToCart(props.meal)} type="submit">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
