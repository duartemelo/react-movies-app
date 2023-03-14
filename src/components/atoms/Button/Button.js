import React, { useState } from "react";
import classes from "./Button.module.css";

const Button = (props) => {

  const preStyleObj = {
    backgroundColor: props.backgroundColor,
    color: props.color,
    width: props.width,
    height: props.height,
    fontWeight: props.fontWeight,
    fontSize: props.fontSize,
  }

  const [styleObj, setStyleObj] = useState(preStyleObj);

  const handleMouseEnter = () => {
    setStyleObj((prevState) => {
      return {...prevState, backgroundColor: props.color, color: props.backgroundColor}
    })
  };

  const handleMouseLeave = () => {
    setStyleObj(preStyleObj);
  };

  return (
    <button
      className={`${props.className} ${classes["default-button"]}`}
      style={styleObj}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.children}
    </button>
  );
};

export default Button;
