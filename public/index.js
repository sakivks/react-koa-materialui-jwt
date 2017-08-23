import React from "react";
import ReactDOM from "react-dom";
import Main from "./component/Theme";
import App from "./component/App";
import LoginDialog from "./component/LoginDialog";

import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

ReactDOM.render(
  <Main>
    <div>
      <App title="EDA Real-time Monitoring Calibration Service" />
      <LoginDialog open />
    </div>
  </Main>,
  document.getElementById("root")
);
