import React from "react";
import {Star, StarFill} from "react-bootstrap-icons";

import { Rating, RoundedStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const myStyles = {
  itemShapes: RoundedStar,
  activeFillColor: '#ebc500',
  itemStrokeWidth: 2,
  inactiveStrokeColor: '#ebc500'

}

const RatingText = (props) => {
  return (
    <React.Fragment>
      <Rating style={{ maxWidth: 80 }} value={props.rating} readOnly="true" itemStyles={myStyles} />
    </React.Fragment>
  )
}

export default RatingText;