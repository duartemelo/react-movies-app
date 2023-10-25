import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";

import Text from "../../atoms/Text/Text";

import Image from "../../molecules/Image/Image";

import classes from "./ContentItem.module.css";
import RatingText from "../../atoms/RatingText/RatingText";

const ContentItem = (props) => {
  const navigate = useNavigate();
  const [infoVisibility, setInfoVisibility] = useState(false);

  const handleClickFilm = () => {
    navigate(`/film/${props.filmId}`);
  };

  return (
    <>
      <div
        className={`${props.className} ${classes["content-item"]} mt-3`}
        onClick={handleClickFilm}
        onMouseEnter={() => setInfoVisibility(true)}
        onMouseLeave={() => setInfoVisibility(false)}
      >
        {infoVisibility && (
          <div className={classes["info-wrapper"]}>
            <Text as="h3">{props.title}</Text>
            <Text as="h4">{props.genres}</Text>
            <div>
              <RatingText rating={props.rating}/>
              <Text as="h4">{props.year}</Text>
            </div>
          </div>
        )}
        <Image
          imageSrc={props.imageSource}
          alt="Content Image"
          className="pos-relative"
          width="200px"
          height="300px"
        />
      </div>
    </>
  );
};

ContentItem.defaultProps = {
  className: "",
};

ContentItem.propTypes = {
  filmId: PropTypes.number.isRequired,
  imageSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default ContentItem;
