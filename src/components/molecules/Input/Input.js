import React, { useState } from "react";

import useFocus from "../../../hooks/use-focus";

import PropTypes from "prop-types";

import classes from "./Input.module.css";

import { BiSearch } from "react-icons/bi";



const Input = (props) => {
  const [inputRef, setInputFocus] = useFocus();
  const [expanded, setExpanded] = useState(
    props.defaultExpanded ? props.defaultExpanded : false
  );
  const classNames = `${classes["input-container"]} ${
    expanded ? classes["expanded"] : ""
  } ${props.className}`;

  const handleOnExpand = () => {
    setExpanded(true);
    setTimeout(() => {
      setInputFocus();
    }, 300);
  };

  return (
    <div className={classNames}>
      {expanded && (
        <input
          className={classes["input"]}
          ref={inputRef}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          type={props.type}
          required={props.required ? true : false}
        />
      )}

      <BiSearch onClick={handleOnExpand} />
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
  defaultExpanded: PropTypes.bool,
  required: PropTypes.bool,
};

export default Input;
