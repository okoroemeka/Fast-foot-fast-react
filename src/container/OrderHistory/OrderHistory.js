import React, { Fragment } from 'react';
import OrderHistory from '../../component/OrderHistory/OrderHistory';
import NavBar from '../../component/NavBar/NavigationLandingPage';

const orderHistory = () => {
  return ( 
    <Fragment>
      <NavBar />
      <OrderHistory />
    </Fragment>
   );
}
 
export default orderHistory;