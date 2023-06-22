import React from "react";
import PropTypes from "prop-types";

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
      {props.children}
    </p>
  );
};

IsolatedText.propTypes = {
  color: PropTypes.string,
  fontWeight: PropTypes.string,
  fontSize: PropTypes.string,
  width: PropTypes.string,
  display: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingRight: PropTypes.string,
  letterSpacing: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default IsolatedText;
