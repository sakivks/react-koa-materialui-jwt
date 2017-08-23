import React from "react";
import ReactDOM from "react-dom";
import Main from "./component/Theme";
import App from "./component/App";
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

ReactDOM.render(
  <Main>
    <App title="EDA Real-time Monitoring Calibration Service"/>
  </Main>,
  document.getElementById("root")
);
