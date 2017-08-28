import React from "react";
import ReactDOM from "react-dom";
import Main from "./component/Theme";
import App from "./component/App";
import FileExposer from "./component/FileExposer";
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

ReactDOM.render(
  <Main>
    <div>
      <App title="EDA Real-time Monitoring Calibration Service" />
      {/*<FileExposer file="Market Cap Band" />*/}
      <FileExposer file="Market Cap Band"/>
    </div>
  </Main>,
  document.getElementById("root")
);
