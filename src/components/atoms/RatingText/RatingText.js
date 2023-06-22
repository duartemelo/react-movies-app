import React from "react";
import PropTypes from "prop-types";

import { Rating, RoundedStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const myStyles = {
  itemShapes: RoundedStar,
  activeFillColor: '#ebc500',
  itemStrokeWidth: 2,
  activeStrokeColor: '#ebc500',
  inactiveStrokeColor: '#ebc500'
}

const RatingText = (props) => {
  return (
    <React.Fragment>
      <Rating style={{ maxWidth: 80 }} value={props.rating} readOnly="true" itemStyles={myStyles} />
    </React.Fragment>
  )
}

RatingText.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default RatingText;