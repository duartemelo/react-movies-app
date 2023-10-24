import React from "react";
import PropTypes from "prop-types";

import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import { ratingDivide } from "../../../utils/rating";

const myStyles = {
  itemShapes: RoundedStar,
  activeFillColor: "var(--blue-400)",
  itemStrokeWidth: 2,
  activeStrokeColor: "var(--blue-400)",
  inactiveStrokeColor: "var(--blue-400)",
};

const RatingText = (props) => {
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
  rating: PropTypes.number.isRequired,
};

export default RatingText;
