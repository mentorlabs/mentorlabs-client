import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navigation, Footer, Home, Signup, Login } from './Components';

export const AppRouter = () => (
  <Router>
    <React.Fragment>
      <Navigation />
      <div>
        <Route path="/" exact={true} component={Home} />
        <Route path="/signup/" exact={true} component={Signup} />
        <Route path="/login/" exact={true} component={Login} />
      </div>
      <Footer />
    </React.Fragment>
  </Router>
);
