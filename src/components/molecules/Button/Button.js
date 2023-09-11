import React from "react";
import classes from "./Button.module.css";
import Spinner from "../../atoms/Spinner/Spinner";
import PropTypes from "prop-types";

const Button = (props) => {
  const preStyleObj = {
    width: props.width,
    height: props.height,
    fontWeight: props.fontWeight,
    fontSize: props.fontSize,
    paddingLeft: props.paddingLeft,
    color: props.color,
    backgroundColor: props.backgroundColor,
  };

  if (props.loading === true) {
    preStyleObj.paddingLeft = "0px";
  }

  const getClasses = () => {
    let classNames = `${props.className} ${classes["default-button"]}`;
    if (props.className.includes("active")) {
      classNames += ` ${classes.active}`;
    }
    if (props.className.includes("no-animate")) {
      classNames += ` ${classes["no-animate"]}`;
    }
    return classNames;
  };

  return (
    <button
      className={getClasses()}
      style={preStyleObj}
      onClick={props.onClick}
      type={props.type}
    >
      {props.loading === true ? (
        <Spinner
          width="15px"
          height="15px"
          border="2px solid #eee"
          borderTop="2px solid var(--blue)"
          className="centered block"
        />
      ) : (
        props.children
      )}
    </button>
  );
};

Button.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fontWeight: PropTypes.string,
  fontSize: PropTypes.string,
  paddingLeft: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  loading: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
