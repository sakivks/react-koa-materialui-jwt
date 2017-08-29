import React, { Component } from "react";
import PropTypes from "prop-types";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { deepOrange500 } from "material-ui/styles/colors";
import util from "./../util";

const styles = {
  errorMessageButton: {
    color: deepOrange500,
    marginLeft: "50%"
  }
};

export default class LoginDialog extends React.Component {
  static propTypes = {
    open: PropTypes.bool.isRequired
  };

  state = {
    open: true,
    username: "",
    password: "",
    errorMessage: "  "
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({
      open: false,
      errorMessage: false
    });
  };

  handleUsernameChange = e => {
    this.setState({
      username: e.target.value
    });
  };

  handlePasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  };

  componentWillReceiveProps = nextProps => {
    this.setState({
      open: nextProps.open
    });
  };

  login = () => {
    util
      .fetch({
        url: "/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          username: this.state.username,
          password: this.state.password
        }
      })
      .then(resp => {
        if (resp.data.success) {
          this.setState({
            open: false
          });
          window.location.replace("/home");
        } else {
          this.setState({
            errorMessage: resp.data.info
          });
        }
      });
  };

  render() {
    const actions = [
      // <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />,
      <FlatButton label={this.state.errorMessage} disabled style={styles.errorMessageButton} />,
      <FlatButton label="Login" primary onTouchTap={this.login} />
    ];

    return (
      <div>
        <Dialog title="Login" actions={actions} modal={true} open={this.state.open}>
          <TextField floatingLabelText="SID" value={this.state.username} onChange={this.handleUsernameChange} fullWidth />
          <br />
          <TextField
            floatingLabelText="Password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            type="password"
            fullWidth
          />
          <br />
        </Dialog>
      </div>
    );
  }
}
