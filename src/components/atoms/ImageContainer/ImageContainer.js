import React from "react";

const ImageContainer = (props) => {
  const styleObj = {
    width: props.width,
    height: props.height,
    borderRadius: props.borderRadius
  };

  return (
    <img
      src={props.imageSrc}
      alt={props.alt}
      style={styleObj}
      className={props.className}
    />
  );
};

export default ImageContainer;
