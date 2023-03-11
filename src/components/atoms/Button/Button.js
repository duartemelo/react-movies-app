import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const styleObj = {
    backgroundColor: props.backgroundColor,
    color: props.color,
    width: props.width,
    height: props.height,
    fontWeight: props.fontWeight,
    fontSize: props.fontSize
  };
  return(
    <button className={`${props.className} ${classes["default-button"]}`} style={styleObj}>{props.children}</button>
  )
}

export default Button;