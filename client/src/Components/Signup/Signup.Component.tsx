import React, { Component } from "react";
// import { Link, NavLink } from "react-router-dom";

import "./Signup.scss";

export const Signup: React.FunctionComponent<any> = () => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <h3 className="title has-text-grey">Signup</h3>
            <p className="subtitle has-text-grey">Please signup to proceed.</p>
            <div className="box">
              <figure className="avatar">
                <img src="https://placehold.it/128x128" />
              </figure>
              <form>
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="password"
                      placeholder="Your Password"
                    />
                  </div>
                </div>
                <button className="button is-block is-link is-medium is-fullwidth">
                  Signup
                </button>
              </form>
            </div>
            <p className="has-text-grey">
              <a href="../">Sign Up</a> &nbsp;·&nbsp;
              <a href="../">Forgot Password</a> &nbsp;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
