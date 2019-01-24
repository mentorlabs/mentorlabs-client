import React, { Component } from "react";
// import { Route } from 'react-router-dom';

import "./Footer.scss";

export class Footer extends Component {
  public render() {
    return (
      <div className="footer has-background-white-ter">
        <div className="container">
          <div className="has-text-centered">
            <div className="nav-center">
              <a className="nav-item">
                <span className="icon is-large">
                  <i className="fab fa-twitter fa-2x" />
                </span>
              </a>
              <a className="nav-item">
                <span className="icon is-large">
                  <i className="fab fa-facebook fa-2x" />
                </span>
              </a>
              <a className="nav-item">
                <span className="icon is-large">
                  <i className="fab fa-github fa-2x" />
                </span>
              </a>
            </div>
            <p>
              &copy; {new Date().getFullYear()} Mentor Labs! | All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
      // <footer className="footer has-background-primary has-text-centered">
      //   <div className="container">
      //     <a href="#">
      //       <span className="icon fa-lg is-large social-icon">
      //         <span className="fa-stack">
      //           <i className="fas fa-circle fa-stack-2x" />
      //           <i className="fab fa-linkedin-in fa-stack-1x fa-inverse" />
      //         </span>
      //       </span>
      //     </a>
      //     <a href="#">
      //       <span className="icon fa-lg is-large">
      //         <span className="fa-stack">
      //           <i className="fas fa-circle fa-stack-2x" />
      //           <i className="fab fa-github fa-stack-1x fa-inverse" />
      //         </span>
      //       </span>
      //     </a>
      //     <a href="#">
      //       <span className="icon fa-lg is-large">
      //         <span className="fa-stack">
      //           <i className="fas fa-circle fa-stack-2x" />
      //           <i className="fas fa-envelope fa-stack-1x fa-inverse" />
      //         </span>
      //       </span>
      //     </a>
      //     <div>
      //       <p>{new Date().getFullYear()} Jobbie</p>
      //     </div>
      //   </div>
      // </footer>
    );
  }
}
