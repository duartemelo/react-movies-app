import React from "react";
import classes from "./Tooltip.module.css";
import PropTypes from "prop-types";

const Tooltip = (props) => {
  return (
    <span className={classes.tooltip} style={props.style}>{props.text}</span>
  )
}

Tooltip.propTypes = {
  style: PropTypes.object,
  text: PropTypes.string.isRequired,
};

export default Tooltip;