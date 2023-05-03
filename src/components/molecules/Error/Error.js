import React from "react";
import IsolatedText from "../../atoms/IsolatedText/IsolatedText";
import classes from "./Error.module.css";

const Error = (props) => {
  return (
    <div className={classes["error-container"]}>
      <IsolatedText fontWeight="500">
        {props.children}
      </IsolatedText>
    </div>
  );
};

export default Error;
