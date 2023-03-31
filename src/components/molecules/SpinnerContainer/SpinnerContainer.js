import React from "react";
import classes from "./SpinnerContainer.module.css";
import Spinner from "../../atoms/Spinner/Spinner";

const SpinnerContainer = () => {
  return (
    <div className={classes.container}>
      <Spinner />
    </div>
  )
}

export default SpinnerContainer;