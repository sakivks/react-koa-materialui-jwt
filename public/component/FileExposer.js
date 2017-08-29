import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import { Card, CardActions, CardHeader, CardTitle } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";

const style = {
  margin: "20px"
};

const FileExposer = props =>
  <Card style={style}>
  <CardTitle title={props.file} subtitle="last Edited by Albert Einstein in 1905" />    
  <CardActions>
      <RaisedButton label="Download" secondary/>
      <RaisedButton label="Upload" primary/>
    </CardActions>
  </Card>;

export default FileExposer;
