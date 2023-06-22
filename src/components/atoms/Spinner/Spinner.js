import React from "react";
import classes from "./Spinner.module.css";
import PropTypes from "prop-types";

const Spinner = (props) => {
  const preStyleObj = {
    width: props.width,
    height: props.height,
    border: props.border,
    borderTop: props.borderTop,
  };
  return (
    <div
      className={`${props.className} ${classes.spinner}`}
      style={preStyleObj}
    ></div>
  );
};

Spinner.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  border: PropTypes.string,
  borderTop: PropTypes.string,
  className: PropTypes.string,
};

export default Spinner;
