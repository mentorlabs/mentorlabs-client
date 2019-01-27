import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navigation, Footer, Home, Signup } from "./Components";

export const AppRouter = () => (
  <Router>
    <React.Fragment>
      <Navigation />
      <div>
        <Route path="/" exact={true} component={Home} />
        <Route path="/signup/" exact={true} component={Signup} />
      </div>
      <Footer />
    </React.Fragment>
  </Router>
);
