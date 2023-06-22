import React from "react";
import IsolatedText from "../../atoms/IsolatedText/IsolatedText";
import classes from "./Error.module.css";
import PropTypes from "prop-types";

const Error = (props) => {
  return (
    <div className={classes["error-container"]}>
      <IsolatedText fontWeight="500">
        {props.children}
      </IsolatedText>
    </div>
  );
};

Error.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Error;
