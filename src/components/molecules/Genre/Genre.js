import React from "react";
import PropTypes from "prop-types";

import Text from "../../atoms/Text/Text";

import classes from "./Genre.module.css";

const Genre = (props) => {
  return (
    <div
      className={`${props.className ? props.className : ""} ${
        classes["genre-wrapper"]
      }`}
    >
      <Text as="p" color="var(--blue)" fontSize={14} fontWeight={500}>
        {props.children}
      </Text>
    </div>
  );
};

Genre.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Genre;
