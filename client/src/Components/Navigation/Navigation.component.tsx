import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Navigation.scss";

export class Navigation extends Component {
  public navToggle = () => {
    // ! is a typescript hack, need to revist implementation
    document.querySelector(".navbar-menu")!.classList.toggle("is-active");
  };

  public render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-start">
              <div className="navbar-item">
                <Link to="/">
                  {/* <img
                  src="https://bulma.io/images/bulma-logo.png"
                  alt="Bulma: a modern CSS framework based on Flexbox"
                  width="112"
                  height="28"
                /> */}
                  <h1 className="is-size-2">Mentor Labs!</h1>
                </Link>
              </div>
            </div>
            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navMenu"
              onClick={this.navToggle}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div className="navbar-menu" id="navMenu">
            <div className="navbar-end">
              <div className="navbar-item">
                <NavLink
                  to="/"
                  className="is-medium is-link"
                  activeClassName="is-active"
                  exact={true}
                >
                  <p>Home</p>
                </NavLink>
              </div>
              <div className="navbar-item">
                <NavLink
                  to="/join"
                  className="is-medium is-link"
                  activeClassName="is-active"
                  exact={true}
                >
                  <p>Join Now!</p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
