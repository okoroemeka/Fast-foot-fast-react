import React from "react";
const foodCard = props => (
  <div className="card">
    {/* <img src={props.mealImage} className='foodImage' alt={props.foodName}/> */}
    <div className="col-12">
      <a href="menu.html">
        <img
          src={props.mealImage}
          className="food-image"
          alt={props.foodName}
        />
      </a>
      <div className="row food-descrition-container">
        <div className="col-7 food-descrition">
          <ul className="food-name-ul">
            <li>
              <span className="food-name">{props.foodName}</span>
            </li>
          </ul>
        </div>
        <div className="col-5 food-descrition">
          <ul>
            <li>
              <span className="Price"> &#8358;{props.price}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default foodCard;
