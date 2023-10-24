import React from "react";
import PropTypes from "prop-types";

import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import { ratingDivide } from "../../../utils/rating";

const RatingText = (props) => {
  const myStyles = {
    itemShapes: RoundedStar,
    activeFillColor: props.color ? props.color : "var(--blue-400)",
    itemStrokeWidth: 2,
    activeStrokeColor: props.color ? props.color : "var(--blue-400)",
    inactiveStrokeColor: props.color ? props.color : "var(--blue-400)",
  };

  return (
    <React.Fragment>
      <Rating
        style={{ maxWidth: 80 }}
        value={ratingDivide(props.rating)}
        readOnly="true"
        itemStyles={myStyles}
      />
    </React.Fragment>
  );
};

RatingText.propTypes = {
  color: PropTypes.string,
  rating: PropTypes.number.isRequired,
};

export default RatingText;
