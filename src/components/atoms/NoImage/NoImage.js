import React from "react";
import classes from "./NoImage.module.css";

const NoImage = (props) => {
  const styleObj = {
    width: props.width,
    height: props.height,
    borderRadius: props.borderRadius,
    zIndex: props.zIndex,
    backgroundColor: props.backgroundColor
  };

  return (
    <div
      style={styleObj}
      className={`${props.className} ${classes["no-image-container"]}`}
    ></div>
  );
};

export default NoImage;
