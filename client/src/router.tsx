import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navigation, Footer, Home, Signup, Login, Ideas } from './Components';
import { directive } from 'babel-types';

export const AppRouter = () => (
  <Router>
    <React.Fragment>
      <Navigation />
      <div>
        <Route path="/" exact={true} component={Home} />
        <Route path="/signup/" exact={true} component={Signup} />
        <Route path="/login/" exact={true} component={Login} />
        <Route path="/ideas/" exact={true} component={Ideas} />
        <Route
          path="/idea/"
          exact={true}
          component={() => <div>idea submit</div>}
        />
      </div>
      <Footer />
    </React.Fragment>
  </Router>
);
