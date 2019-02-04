import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getOrderHistory, deleteOrder } from '../../../actions';

class OrderHistory extends Component {
  async componentDidMount() {
    const { getOrderHistory } = this.props;
    await getOrderHistory();
  }

  handleDelete = async(orderId) => {
    try {
      const { deleteOrder } = this.props;
      await deleteOrder(orderId);
    } catch (error) {
      return null;
    }
  }
  render() {
    const { orderHistory } = this.props;
    console.log('orderHistory', orderHistory);
    const history =
    orderHistory && orderHistory.length && !orderHistory[0].error
        ? (orderHistory.map((order, index) => (
            <tr key={order.id}>
              <td>{order.product.map((item, index) =>{
                return (
                  <tr key={index}>
                    <td>{item.food}</td>
                    <td>{item.quantity}</td>
                    <td>&#8358;{item.price}</td>
                  </tr>
                );
              })}</td>
              <td>{order.id}</td>
              <td>{order.createdat.split("T")[0]}</td>
              <td>{order.order_status}</td>
              <td><button className='delete-button' onClick={()=>{this.handleDelete(order.id)}}>Delete</button></td>
            </tr>
          )))
        : null;
    return (
      <Fragment>
        <div className="container">
          <div className="row profile-container">
            <div className="col-12">
              <div className="row">
                <div className="col-12 upper-rule" />
              </div>
              <div className="row">
                <div className="col-12 order-history-box">
                  <div className="order-card">
                    <div className="order-header">
                      <h2>ORDER HISTORY</h2>
                    </div>
                    <div className="order-body">
                      <table id="order-history-table">
                        <thead>
                          <tr>
                            <th>Order</th>
                            <th>Id</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          {history}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 down-rule" />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ orderHistory, deleteOrder: deleteOrderResponse }) => ({
    orderHistory,
    deleteOrderResponse,
  });

export default withRouter(connect(
  mapStateToProps,
  { getOrderHistory, deleteOrder }
)(OrderHistory));
