import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Navigation,
  Footer,
  Home,
  Signup,
  Login,
  Ideas,
  NewIdeaForm
} from './Components';

export const AppRouter = () => (
  <Router>
    <React.Fragment>
      <Navigation />
      <div>
        <Route path="/" exact={true} component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Switch>
          <Route path="/ideas/new" component={NewIdeaForm} />
          <Route path="/ideas" component={Ideas} />
        </Switch>
      </div>
      <Footer />
    </React.Fragment>
  </Router>
);
