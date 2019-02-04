import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { ToastContainer } from 'react-toastify';
import LandingPage from "./container/Landing/LandingPage";
import Footer from "./container/Footer";
import SignInPage from "./container/SignIn/SignIn";
import SignUpPage from './container/SignUp/SignUp';
import MenuPage from './container/Menu/Menu';
import CartPage from './container/Cart/Cart';
import Checkout from './container/Cart/checkoutForm';
// import OrderHistory from './component/OrderHistory/OrderHistory';
import OrderHistory from './container/OrderHistory/OrderHistory';

const App = () => (
  <div>
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" component={SignInPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/menu" component={MenuPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/order-history" component={OrderHistory} />
        </Switch>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  </div>
);

export default App;
