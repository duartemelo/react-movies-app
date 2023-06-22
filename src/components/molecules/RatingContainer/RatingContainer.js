import React from "react";
import RatingText from "../../atoms/RatingText/RatingText";
import classes from "./RatingContainer.module.css";
import PropTypes from "prop-types";

const RatingContainer = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}
      className={`${props.className} ${classes.container}`}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <RatingText rating={props.rating} />
    </div>
  );
});

RatingContainer.propTypes = {
  className: PropTypes.string,
  rating: PropTypes.number,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default RatingContainer;
