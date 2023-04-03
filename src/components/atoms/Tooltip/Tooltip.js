import React from "react";
import classes from "./Tooltip.module.css";

const Tooltip = (props) => {
  return (
    <span className={classes.tooltip} style={props.style}>{props.text}</span>
  )
}

export default Tooltip;