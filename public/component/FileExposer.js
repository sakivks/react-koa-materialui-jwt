import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";

const style = {
  padding: "20px"
};

const FileExposer = props =>
  <Card>
    <CardHeader title={props.file} subtitle="Last Edited by Albert Einstein in 1905" />
  </Card>;

export default FileExposer;
