import React, { Component } from "react";
import PropTypes from "prop-types";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";
import util from './../util';

class App extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    actionDisabled: PropTypes.bool.isRequired
  };

  logout = () => {
    util.clearSession();
    window.location.replace("/");
  };

  render() {
    return (
      <div>
        <AppBar
          title={this.props.title}
          iconElementRight={<FlatButton label={this.props.action} disabled={this.props.actionDisabled} onTouchTap={this.logout} />}
        />
      </div>
    );
  }
}
          // iconElementRight={<FlatButton label={this.getUsername()} disabled={false} onTouchTap={this.logout} />}
// iconElementRight={<FlatButton label={this.props.action} disabled={this.props.actionDisabled} onTouchTap={this.logout} />}

export default App;
