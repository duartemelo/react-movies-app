import React, { useState } from "react";
import classes from "./Image.module.css";
import Spinner from "../Spinner/Spinner";

const Image = (props) => {
  const [loading, setLoading] = useState(false);

  const styleObj = {
    width: props.width,
    height: props.height,
    borderRadius: props.borderRadius,
    zIndex: props.zIndex,
    display: !loading ? "none" : "block",
  };

  return (
    <div
      className={`${props.className} ${classes["image-container"]}`}
      style={{ width: styleObj.width, height: styleObj.height }}
    >
      {!loading && <Spinner />}
      <img
        src={props.imageSrc}
        alt={props.alt}
        style={styleObj}
        onLoad={() => setLoading(true)}
        className={classes["image"]}
      />
    </div>
  );
};

export default Image;
