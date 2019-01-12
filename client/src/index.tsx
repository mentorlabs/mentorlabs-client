import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./Components/App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
