import React from "react";
import classes from "./Spinner.module.css";

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

export default Spinner;
