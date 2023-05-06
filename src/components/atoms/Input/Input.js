import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const classNames = `${props.className} ${classes["search-bar"]}`;
  return (
    <input
      className={classNames}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      type={props.type}
      required={props.required ? true : false}
    />
  );
};

export default Input;
