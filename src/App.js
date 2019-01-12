import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./container/Landing/LandingPage";

const App = () => (
  <div>
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/menu" component={LandingPage} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  </div>
);

export default App;
