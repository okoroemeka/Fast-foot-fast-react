import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./container/Landing/LandingPage";
import Footer from "./container/Footer";
import SignInPage from "./container/SignIn/SignIn";
import SignUpPage from './container/SignUp/SignUp';

const App = () => (
  <div>
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" component={SignInPage} />
          <Route path="/signup" component={SignUpPage} />
        </Switch>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  </div>
);

export default App;
