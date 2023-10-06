import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Image from "../../molecules/Image/Image";

import classes from "./ContentItem.module.css";

import PropTypes from "prop-types";

// import { ratingDivide } from "../../../utils/rating";

const ContentItem = (props) => {
  const navigate = useNavigate();
  const [infoVisibility, setInfoVisibility] = useState(false);

  const handleClickFilm = () => {
    navigate(`/film/${props.filmId}`);
  };

  // TODO: receive genre ids, get their names with endpoint
  // TODO: restyle RatingText

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
            <h3>{props.title}</h3>
            <h4>Action, Fiction, Adventure, Test</h4>
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
  rating: PropTypes.number.isRequired,
  vote_count: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default ContentItem;