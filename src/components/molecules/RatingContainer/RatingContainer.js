import React from "react";
import RatingText from "../../atoms/RatingText/RatingText";
import classes from "./RatingContainer.module.css";
import PropTypes from "prop-types";

const RatingContainer = (props) => {
  return (
    <div className={`${props.className} ${classes.container}`}>
      <RatingText rating={props.rating} />
    </div>
  );
};

RatingContainer.propTypes = {
  className: PropTypes.string,
  rating: PropTypes.number,
};

export default RatingContainer;
