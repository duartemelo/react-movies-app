import React from "react";
import classes from "./TextContainer.module.css";

const TextContainer = (props) => {
  return <div className={classes["text-container"]}>{props.children}</div>;
};

export default TextContainer;
