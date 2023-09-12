import React from "react";
import Text from "../../atoms/Text/Text";
import classes from "./Error.module.css";
import PropTypes from "prop-types";

const Error = (props) => {
  return (
    <div className={classes["error-container"]}>
      <Text fontWeight="500">
        {props.children}
      </Text>
    </div>
  );
};

Error.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Error;
