import React, { useState } from "react";
import classes from "./Image.module.css";
import nothingImage from "../../../assets/img/undraw_not_found_re_bh2e.svg";
import Lazy from "../../atoms/Lazy/Lazy";
import PropTypes from "prop-types";

const Image = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const styleObj = {
    width: props.width,
    height: props.height,
    borderRadius: props.borderRadius,
    zIndex: props.zIndex,
    display: loading ? "none" : "block",
    objectFit: error ? "contain" : "cover",
  };

  return (
    <div
      className={`${props.className} ${classes["image-container"]}`}
      style={{
        width: styleObj.width,
        height: styleObj.height,
        borderRadius: styleObj.borderRadius,
      }}
    >
      {loading && (
        <Lazy
          width={styleObj.width}
          height={styleObj.height}
          borderRadius={styleObj.borderRadius}
        />
      )}
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
        onLoad={() => setLoading(false)}
        className={classes["image"]}
      />
    </div>
  );
};

Image.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
  zIndex: PropTypes.number,
  className: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
