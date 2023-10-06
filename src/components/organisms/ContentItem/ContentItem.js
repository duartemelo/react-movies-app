import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";

import useHttp from "../../../hooks/use-http";

import Image from "../../molecules/Image/Image";

import classes from "./ContentItem.module.css";

// import { ratingDivide } from "../../../utils/rating";

const ContentItem = (props) => {
  const navigate = useNavigate();
  const { sendRequest } = useHttp();
  const [infoVisibility, setInfoVisibility] = useState(false);
  const [genreString, setGenreString] = useState("");

  const handleClickFilm = () => {
    navigate(`/film/${props.filmId}`);
  };

  useEffect(() => {
    sendRequest({ url: "genre/movie/list?language=en-US" }, (data) => {
      const selectedGenres = data.genres
        .filter((genre) => props.genres.includes(genre.id))
        .map((genre) => genre.name);

      const generatedGenresString = selectedGenres.join(", ");
      setGenreString(generatedGenresString);
    });
  }, [sendRequest, props.genres]);

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
            <h4>{genreString}</h4>
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
  genres: PropTypes.array.isRequired,
  rating: PropTypes.number.isRequired,
  vote_count: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default ContentItem;
