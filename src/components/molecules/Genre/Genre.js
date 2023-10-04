import React from "react";
import PropTypes from "prop-types";

import { BiHash } from "react-icons/bi";

import classes from "./Genre.module.css";

const Genre = (props) => {
  return (
    <span
      className={`${classes[props.theme]} ${props.className} ${
        classes["genre-wrapper"]
      }`}
    >
      <BiHash />
      {props.children}
    </span>
  );
};

Genre.defaultProps = {
  theme: "primary",
  className: "",
};

Genre.propTypes = {
  children: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(["primary", "danger"]),
  className: PropTypes.string,
};

export default Genre;
