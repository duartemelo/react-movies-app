import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {

  const preStyleObj = {
    width: props.width,
    height: props.height,
    fontWeight: props.fontWeight,
    fontSize: props.fontSize,
  }

  const getClasses = () => {
    let classNames = `${props.className} ${classes["default-button"]}`;
    if (props.className.includes('active')){
      classNames += ` ${classes.active}`
    }
    if (props.className.includes('no-animate')){
      classNames += ` ${classes['no-animate']}`
    }
    return classNames;
  }

  return (
    <button
      className={getClasses()}
      style={preStyleObj}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;
