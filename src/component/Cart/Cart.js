import React, { Component } from "react";
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteItem } from '../../../actions/index';
import "./Cart.css";
let orderedMeals;
class ShoppingCart extends Component {
  state = {
    itemQuantity: 1,
  }
  handleInputChange = (event) =>{
    const {name, value} = event.target;
    return this.setState({...this.state,[name]: value});
  }
  handleCheckout = () => {
    const logInStatus  = JSON.parse(window.localStorage.getItem('isLoggedIn'));
    return logInStatus ? this.props.history.push('/checkout') : this.props.history.push('/login');
  } 
  handleCancelOrder = () => {
    window.localStorage.removeItem('meals');
    return this.props.history.push('/menu');
  }
  handleRemoveFood = (id) => {
    return (event) => {
      const {deleteItem} = this.props;
      deleteItem(id);
      toast.success('Item removed');
      if (event.target.checked) {
        return this.removeFood
      }
    }
  }
  render() {
    const { cart } = this.props;
    let total = 0;
    orderedMeals = Object.values(cart).map(meal => {
        total += meal.price;
        return (
          <tr key={meal.id}>
            <td className="food-name">{meal.food}</td>
            <td>
              <input
                type="number"
                value={meal.quantity}
                className="quantity"
                name="itemQuantity"
                placeholder="1"
                min="1"
                onChange={this.handleInputChange}
              />
            </td>
            <td>
              &#8358; <span className="price">{meal.price}</span>
            </td>
            <td>
              <input type="checkbox" className="check" onChange={this.handleRemoveFood(meal.id)}/>
            </td>
          </tr>
        );
      });
    return (
      <div className="container">
        <div className="row" id="cart-table-container">
          <div className="col-12" id="cart-subcontainer">
            <div className="cart-card">
              <div className="row">
                <div className="col-12">
                  <div className="card-header">
                    <h3>Items Ordered</h3>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="cart-wrap">
                    <table
                      className="table table-responsive"
                      id="cart-table-body"
                    >
                      <thead>
                        <tr>
                          <th>item</th>
                          <th>quantity</th>
                          <th>price</th>
                          <th>
                          <i className="fa fa-trash" aria-hidden="true"></i>
                          </th>
                        </tr>
                        {orderedMeals}
                      </thead>
                    </table>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <div className="order-total">
                    <span id="cost" >Total:<span>&#8358;</span> {total}</span>
                  </div>
                </div>
                <div className="col-8">
                  <div className="row">
                    <div className="col-6">
                      <div className="cart-remove-Item-button">
                        <button
                          className="remove-item-button"
                          id="remove-item-button"
                          onClick={this.handleCancelOrder}
                        >
                          cancel
                        </button>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="cart-order-button">
                        <button
                          className="checkout-button"
                          id="checkout-button"
                          onClick={this.handleCheckout}
                        >
                          checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) =>
  ({
    cart: state.cart,
  })
export default withRouter(connect(mapStateToProps, {deleteItem})(ShoppingCart))
