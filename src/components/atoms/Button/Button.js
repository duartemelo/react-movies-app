import React, { useState } from "react";
import classes from "./Button.module.css";

const Button = (props) => {

  const preStyleObj = {
    width: props.width,
    height: props.height,
    fontWeight: props.fontWeight,
    fontSize: props.fontSize,
  }

  const [styleObj, setStyleObj] = useState(preStyleObj);

  const getClasses = () => {
    let classNames = `${props.className} ${classes["default-button"]}`;
    if (props.className.includes('primary')){
      classNames += ` ${classes.primary}`
    }
    if (props.className.includes('no-animate')){
      classNames += ` ${classes['no-animate']}`
    }
    return classNames;
  }

  return (
    <button
      className={getClasses()}
      style={styleObj}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
