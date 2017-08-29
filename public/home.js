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
      <App title="XYZ"  action="Logout" actionDisabled={false}/>
      {/*<FileExposer file="Market Cap Band" />*/}
      <FileExposer file="ABC"/>
      <FileExposer file="MNO"/>
      <FileExposer file="PQR"/>
      <LogViewer />
    </div>
  </Theme>,
  document.getElementById("root")
);
