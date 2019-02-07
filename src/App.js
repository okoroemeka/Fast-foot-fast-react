import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import NavBar from './component/NavBar/NavigationLandingPage';
import LandingPage from "./container/Landing/LandingPage";
import Footer from "./container/Footer";
import SignInPage from "./container/SignIn/SignIn";
import SignUpPage from './container/SignUp/SignUp';
import MenuPage from './container/Menu/Menu';
import CartPage from './container/Cart/Cart';
import Checkout from './container/Cart/checkoutForm';
import OrderHistory from './container/OrderHistory/OrderHistory';
import NopageFound from './component/404/404Page';

const App = () => (
  <div>
    <BrowserRouter>
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" component={SignInPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/menu" component={MenuPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/order-history" component={OrderHistory} />
          <Route component={NopageFound} />
        </Switch>
        <Footer />
        <ToastContainer transition={Flip} position="bottom-right" autoClose={3000}/>
      </React.Fragment>
    </BrowserRouter>
  </div>
);

export default App;
