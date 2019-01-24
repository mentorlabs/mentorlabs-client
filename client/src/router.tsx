import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navigation, Footer } from "./Components";

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

export const AppRouter = () => (
  <Router>
    <React.Fragment>
      <Navigation />
      <div>
        <Route path="/" exact={true} component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
      <Footer />
    </React.Fragment>
  </Router>
);
