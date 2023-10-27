import React from "react";
import classes from "./Button.module.css";
import Spinner from "../../atoms/Spinner/Spinner";
import PropTypes from "prop-types";

const Button = (props) => {
  let classNames = `${classes[props.theme]} ${classes[props.size]} ${
    props.disabled ? classes.disabled : ""
  } ${props.className}`;

  return (
    <button className={classNames} onClick={props.onClick} type={props.type}>
      {props.loading === true ? (
        <Spinner
          width="15px"
          height="15px"
          border="2px solid var(--white)"
          borderTop="2px solid var(--blue-400)"
          className="centered block"
        />
      ) : (
        props.children
      )}
    </button>
  );
};

Button.defaultProps = {
  theme: 'primary',
  size: 'md',
  disabled: false,
  className: "",
};

Button.propTypes = {
  theme: PropTypes.oneOf(["primary", "secondary", "tertiary", "no-background"]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
