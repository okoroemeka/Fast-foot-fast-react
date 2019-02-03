import React, { Component } from 'react';

export class OrderForm extends Component {
  state = {
    city: '',
    street: '',
    telephone: '',
    product: (Object.values(this.props.cart)),
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ ...this.state, [name]: value });
  };

  handleSubmit = async (event) => {
    try {
      const { history, checkout } = this.props;
      event.preventDefault();
      await checkout(this.state);
      // window.localStorage.removeItem('meals');
      history.push('/menu');
    } catch (error) {
      return false;
    }
  };

  render() {
    return (
      <div className="row checkout-form">
        <div className="col-4 checkout-form-container">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-12 checkout-header">
                <h2>Complete Order</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-12 " id="response" />
            </div>
            <div className="row">
              <div className="col-12 checkout-form-input">
                <label htmlFor="city">
                    City
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={this.state.city}
                  placeholder="Enter City"
                  required="required"
                  onChange={this.handleInputChange}
                />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-12 checkout-form-input">
                <label html="address">
Address
<input
                  type="text"
                  name="street"
                  id="address"
                  value={this.state.address}
                  placeholder="Enter street address"
                  required="required"
                  onChange={this.handleInputChange}
                />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-12 checkout-form-input">
                <label htmlFor="telephone">
                  Telephone
                  <input
                  type="text"
                  id="telephone"
                  name="telephone"
                  value={this.state.telephone}
                  placeholder="Enter telepnone"
                  required="required"
                  onChange={this.handleInputChange}
                />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-12 form-input">
                <button type="submit" id="complete-order-button">
                  Complete
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default OrderForm;
