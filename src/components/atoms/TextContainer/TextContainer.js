import React from "react";
import classes from "./TextContainer.module.css";
import PropTypes from "prop-types";

const TextContainer = (props) => {
  return <div className={classes["text-container"]}>{props.children}</div>;
};

TextContainer.propTypes = {
  children: PropTypes.node,
};

export default TextContainer;
