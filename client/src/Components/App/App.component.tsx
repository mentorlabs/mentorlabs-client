import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import { AppRouter } from "../../router";
import { store } from "../../Store/configureStore";

export class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}
