import React from "react";
import classes from "./Input.module.css";
import PropTypes from "prop-types";

import { BiSearch } from "react-icons/bi";

const Input = (props) => {
  const classNames = `${props.className} ${classes["input-container"]}`;
  return (
    <div className={classNames}>
      <input
        className={classes['input']}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        type={props.type}
        required={props.required ? true : false}
      />
      <BiSearch />
      
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  type: PropTypes.string,
  required: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default Input;
