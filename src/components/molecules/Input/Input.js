import React, { useState } from "react";
import classes from "./Input.module.css";
import PropTypes from "prop-types";

import { BiSearch } from "react-icons/bi";

const Input = (props) => {
  const [expanded, setExpanded] = useState(props.defaultExpanded ? props.defaultExpanded : false);
  const classNames = `${classes["input-container"]} ${expanded ? classes["expanded"] : ''} ${props.className}`;
  return (
    <div className={classNames}>
      {expanded && (
        <input
          className={classes["input"]}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          type={props.type}
          required={props.required ? true : false}
        />
      )}

      <BiSearch onClick={() => setExpanded(true)}/>
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
