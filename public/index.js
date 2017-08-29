import React from "react";
import ReactDOM from "react-dom";
import Main from "./component/Theme";
import App from "./component/App";
import LoginDialog from "./component/LoginDialog";
import util from "./util";
import injectTapEventPlugin from "react-tap-event-plugin";

util.startUp();

injectTapEventPlugin();

ReactDOM.render(
  <Main darkTheme={true}>
    <div>
      <App title="XYZ" action=" " actionDisabled />
      <LoginDialog open />
    </div>
  </Main>,
  document.getElementById("root")
);
