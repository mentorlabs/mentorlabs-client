import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navigation, Footer, Home } from "./Components";

const Join = () => <h2>Join Now!</h2>;

export const AppRouter = () => (
  <Router>
    <React.Fragment>
      <Navigation />
      <div>
        <Route path="/" exact={true} component={Home} />
        <Route path="/join/" component={Join} />
      </div>
      <Footer />
    </React.Fragment>
  </Router>
);
