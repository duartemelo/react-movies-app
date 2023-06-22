import React from "react";
import classes from "./Nav.module.css";

const Nav = (props) => {
  return(
    <div className={classes['nav-container']}>{props.children}</div>
  )
}

export default Nav;