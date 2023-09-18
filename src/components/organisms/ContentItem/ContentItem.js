import React from "react";
import { useNavigate } from "react-router-dom";

import TextContainer from "../../atoms/TextContainer/TextContainer";
import Text from "../../atoms/Text/Text";
import Tooltip from "../../atoms/Tooltip/Tooltip";

import Image from "../../molecules/Image/Image";
import RatingContainer from "../../molecules/RatingContainer/RatingContainer";

import classes from "./ContentItem.module.css";

import PropTypes from "prop-types";

const ContentItem = (props) => {
  const navigate = useNavigate();

  const ratingDivide = () => {
    let rating = props.rating;
    rating = Math.round(rating) / 2;
    return rating;
  };

  const handleClickFilm = () => {
    navigate(`/film/${props.filmId}`);
  };

  return (
    <>
      <div
        className={`${classes["content-item"]} mt-3`}
        onClick={handleClickFilm}
      >
        <Image
          imageSrc={props.imageSource}
          alt="Content Image"
          borderRadius="5px"
          className="box-shadow pos-relative"
          width="200px"
          height="300px"
        />

        <TextContainer>
          <Text
            className="centered-text mt-1"
            fontSize="12px"
            fontWeight="600"
            paddingLeft="15px"
            paddingRight="15px"
          >
            {props.title}
          </Text>
          <Tooltip
            toolTipId={props.filmId}
            toolTipText={`${props.rating} out of ${props.vote_count} votes`}
          >
            <RatingContainer rating={ratingDivide()} className="mt-05" />
          </Tooltip>
        </TextContainer>
      </div>
    </>
  );
};

ContentItem.propTypes = {
  filmId: PropTypes.number.isRequired,
  imageSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  vote_count: PropTypes.number.isRequired,
};

export default ContentItem;
