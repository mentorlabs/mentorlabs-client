import React, { Component } from "react";
import monitors from "../../../images/monitors.svg";
import launch from "../../../images/launch.svg";

import "./About.scss";

export class About extends Component {
  public render() {
    return (
      <div>
        <section className="section has-text-centered has-background-info about-section">
          <div className="container">
            <div className="columns">
              <div className="column is-vh-centered">
                <h1 className="title is-spaced is-size-desktop is-size-4-mobile has-text-white">
                  What we've built
                </h1>
                <h2 className="subtitle is-size-5-desktop has-text-white has-text-justified">
                  Here at Mentor Labs we pride ourselves in being the best we
                  can possibly be. In order to live up to those expectations we
                  have put in all of our efforts in making Mentor Labs our
                  life's work.
                  <br />
                  <br />
                  We have crafted a beautiful platform to help young developers
                  hone their skills and get them job ready as fast as possible.
                </h2>
              </div>
              <div className="column ">
                <figure className="image is-4by5">
                  <img src={monitors} alt="Gears" />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className="section has-text-centered has-background-white">
          <div className="container">
            <div className="columns">
              <div className="column ">
                <figure className="image is-square">
                  <img src={launch} alt="Rocket" />
                </figure>
              </div>
              <div className="column is-vh-centered">
                <h1 className="title is-spaced is-size-desktop is-size-4-mobile has-text-black">
                  Our Vision
                </h1>
                <h2 className="subtitle is-size-5-desktop has-text-black has-text-justified">
                  As engineers we know how hard it can be to land your first
                  job. Here at Mentor labs we envision giving you the upperhand
                  in a highly competitive market.
                  <br />
                  <br />
                  Let us help you launch you career!
                </h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
