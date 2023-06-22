import React from "react";
import classes from "./Nav.module.css";
import PropTypes from "prop-types";

const Nav = (props) => {
  return <div className={classes["nav-container"]}>{props.children}</div>;
};

Nav.propTypes = {
  children: PropTypes.node,
};

export default Nav;
