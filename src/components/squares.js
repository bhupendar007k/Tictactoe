import React from "react";
import { GridItems } from "../style/boardstyle";

function Squares(props) {
  const classes = props.className;
  return (
    <GridItems
      className={classes + (props.state === "X")}
      onClick={() => props.onClick(props.index)}
    >
      {props.state}
    </GridItems>
  );
}
export default Squares;
