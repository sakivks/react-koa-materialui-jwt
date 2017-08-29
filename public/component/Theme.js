import React from "react";
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const styles = { container: {} };

// const muiTheme = getMuiTheme({ palette: { accent1Color: amber900 } });

const Theme = props =>
  <MuiThemeProvider muiTheme={props.darkTheme ? getMuiTheme(darkBaseTheme):null}>
    <div style={styles.container}>
      <div>
        {props.children}
      </div>
    </div>
  </MuiThemeProvider>;

Theme.propTypes = { children: PropTypes.element };

export default Theme;
