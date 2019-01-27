import React, { Component } from "react";
import { About } from "./About/About.component";
import { Hero } from "./Hero/Hero.component";

import "./Home.scss";

export class Home extends Component {
  public render() {
    return (
      <div>
        <Hero />
        <About />
      </div>
    );
  }
}
