import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./container/Landing/LandingPage";
import Footer from "./container/Footer";
import SignInPage from "./container/SignIn/SignIn";
import SignUpPage from './container/SignUp/SignUp';
import MenuPage from './container/Menu/Menu';
import CartPage from './container/Cart/Cart';
import Checkout from './container/Cart/checkoutForm';

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
        </Switch>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  </div>
);

export default App;
