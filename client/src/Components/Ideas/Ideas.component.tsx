import React from 'react';

import { IdeasCard } from './IdeasCard/IdeasCard.component';
import { Link, Route } from 'react-router-dom';
import { WrapWithRouterProps } from '../../types';

import './Ideas.scss';
export const Ideas: React.SFC<WrapWithRouterProps<{}>> = ({ match }) => {
  // tslint:disable:no-console
  console.log(match);
  return (
    <React.Fragment>
      <section className="hero is-info is-bold is-medium">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-size-1">Project Ideas</h1>
            <h2 className="subtitle">Some compelling description.</h2>
            <div>
              <Link to={`${match.url}/new`}>
                <button className="button is-link">Submit Idea</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="columns is-multiline ideas-wrapper">
          <IdeasCard />
          <IdeasCard />
          <IdeasCard />
          <IdeasCard />
          <IdeasCard />
          <IdeasCard />
        </div>
      </div>
    </React.Fragment>
  );
};
