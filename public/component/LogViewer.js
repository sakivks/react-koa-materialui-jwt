import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import { Card, CardActions, CardHeader, CardTitle, CardText } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";

const style = {
  margin: "20px"
};

const LogViewer = () =>
  <Card style={style} >
  <CardTitle title="Log" actAsExpander  showExpandableButton={true}/>
  <CardText expandable={true}>
    James Wong Howe, A.S.C. (Chinese: 黃宗霑; pinyin: Huáng Zōngzhān; August 28, 1899 – July 12, 1976) was a Chinese American cinematographer who worked on over 130 films. He was a master at the use of shadow and was one of the first to use deep-focus cinematography, in which both foreground and distant planes remain in focus.

    During the 1930s and 1940s, Howe was one of the most sought after cinematographers in Hollywood. He was nominated for 10 Academy Awards for cinematography, winning twice for The Rose Tattoo (1955) and Hud (1963). Howe was judged to be one of the 10 most-influential cinematographers in a survey of the members of the International Cinematographers Guild in the United States.[1]
  </CardText>
  </Card>;

export default LogViewer;
