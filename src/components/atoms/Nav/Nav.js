import React from "react";
import classes from "./Nav.module.css";
import PropTypes from "prop-types";

const Nav = (props) => {
  return <nav className={classes["nav-container"]}>{props.children}</nav>;
};

Nav.propTypes = {
  children: PropTypes.node,
};

export default Nav;
