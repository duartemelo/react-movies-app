import React from "react";
import PropTypes from "prop-types";

const Text = (props) => {
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

  const Component = props.as || "p";

  return (
    <Component className={props.className} style={styleObj}>
      {props.children}
    </Component>
  );
};

Text.defaultProps = {
  className: "",
  as: "p",
  color: "var(--white)",
};

Text.propTypes = {
  as: PropTypes.string,
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

export default Text;
