import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return(
    <input className={classes["search-bar"]} placeholder={props.placeholder}/>
  )
}

export default Input;