import React from "react";
import Spinner from "../Spinner/Spinner";

const IsolatedText = (props) => {
  const styleObj = {
    color: props.color,
    fontWeight: props.fontWeight,
    fontSize: props.fontSize,
    width: props.width,
    display: props.display,
    paddingLeft: props.paddingLeft,
    paddingRight: props.paddingRight,
    letterSpacing: props.letterSpacing,
  };

  return (
    <p className={props.className} style={styleObj}>
      {props.checkForLoading && props.children === null ? (
        <Spinner
          width="10px"
          height="10px"
          border="5px solid #eee"
          borderTop="5px solid var(--blue)"
          className="centered block"
        />
      ) : (
        props.children
      )}
    </p>
  );
};

export default IsolatedText;
