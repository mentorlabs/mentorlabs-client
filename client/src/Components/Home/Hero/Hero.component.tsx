import React, { Component } from "react";

import "./Hero.scss";

export class Hero extends Component {
  public render() {
    return (
      <section className="hero hero-about has-text-left is-large is-marginless">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column">
                <h1 className="title has-text-black is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile ">
                  Mentor Labs!
                </h1>
                <h2 className="subtitle is-size-4-desktop has-text-black">
                  Let's us Help you take your skills to the next level.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
