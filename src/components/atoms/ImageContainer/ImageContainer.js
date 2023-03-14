import React from "react";
import classes from "./ImageContainer.module.css";

const ImageContainer = (props) => {
  const styleObj = {
    width: props.width,
    height: props.height,
    borderRadius: props.borderRadius,
    zIndex: props.zIndex
  };

  return (
    <img
      src={props.imageSrc}
      alt={props.alt}
      style={styleObj}
      className={`${props.className} ${classes["image-container"]}`}
    />
  );
};

export default ImageContainer;
