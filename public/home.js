import React from "react";
import ReactDOM from "react-dom";
import Theme from "./component/Theme";
import App from "./component/App";
import FileExposer from "./component/FileExposer";
import LogViewer from "./component/LogViewer";
import injectTapEventPlugin from "react-tap-event-plugin";
import util from "./util";

util.startUp();

injectTapEventPlugin();

ReactDOM.render(
  <Theme >
    <div>
      <App title="EDA Real-time Monitoring Calibration Service"  action="Logout" actionDisabled={false}/>
      {/*<FileExposer file="Market Cap Band" />*/}
      <FileExposer file="Market Cap Band"/>
      <FileExposer file="Tier thresholds"/>
      <FileExposer file="Overrides"/>
      <LogViewer />
    </div>
  </Theme>,
  document.getElementById("root")
);
