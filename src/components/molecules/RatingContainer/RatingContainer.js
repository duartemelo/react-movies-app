import React, { useState } from "react";
import RatingText from "../../atoms/RatingText/RatingText";
import classes from "./RatingContainer.module.css";

const RatingContainer = (props) => {
  const [toolTipStatus, setToolTipStatus] = useState(true);
  return (
    <div
      className={`${props.className} ${classes.container}`}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <RatingText rating={props.rating} />
    </div>
  );
};

export default RatingContainer;
