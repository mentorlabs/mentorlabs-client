import React from 'react';
import { IdeasCard } from './IdeasCard/IdeasCard.component';

import './Ideas.scss';
import { Link } from 'react-router-dom';

export const Ideas = () => (
  <React.Fragment>
    <section className="hero is-info is-bold is-medium">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-size-1">Project Ideas</h1>
          <h2 className="subtitle">Some compelling description.</h2>
          <div>
            <Link to="/idea">
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
