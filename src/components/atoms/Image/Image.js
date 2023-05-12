import React, { useState } from "react";
import classes from "./Image.module.css";
import Spinner from "../Spinner/Spinner";
import nothingImage from "../../../assets/img/undraw_not_found_re_bh2e.svg";

const Image = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const styleObj = {
    width: props.width,
    height: props.height,
    borderRadius: props.borderRadius,
    zIndex: props.zIndex,
    display: !loading ? "none" : "block",
    objectFit: error ? "contain" : "cover",
  };

  return (
    <div
      className={`${props.className} ${classes["image-container"]}`}
      style={{ width: styleObj.width, height: styleObj.height }}
    >
      {!loading && <Spinner />}
      <img
        error={error ? 1 : 0}
        src={props.imageSrc}
        onError={(e) => {
          setError(true);
          if (e.target.src !== `${nothingImage}`) {
            e.target.src = `${nothingImage}`;
          }
        }}
        alt={props.alt}
        style={styleObj}
        onLoad={() => setLoading(true)}
        className={classes["image"]}
      />
    </div>
  );
};

export default Image;
