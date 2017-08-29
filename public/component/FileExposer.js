import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardActions, CardHeader, CardTitle } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";

const style = {
  margin: "20px"
};

export default class LoginDialog extends React.Component {
  static propTypes = {
    file: PropTypes.string.isRequired
  };

  render() {
    return (
      <Card style={style}>
        <CardTitle title={this.props.file} subtitle="last Edited by Albert Einstein in 1905" />
        <CardActions>
          <RaisedButton label="Download" secondary />
          <RaisedButton label="Upload" primary />
        </CardActions>
      </Card>
    );
  }
}
