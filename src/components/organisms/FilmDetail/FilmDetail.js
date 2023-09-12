import React, { useEffect, useState } from "react";

import Text from "../../atoms/Text/Text";
import Spinner from "../../atoms/Spinner/Spinner";
import Image from "../../molecules/Image/Image";
import Genre from "../../molecules/Genre/Genre";

import classes from "./FilmDetail.module.css";

import PropTypes from "prop-types";
import useHttp from "../../../hooks/use-http";

const FilmDetail = (props) => {
  const [loading, setLoading] = useState(true);
  const { sendRequest: fetchFilm } = useHttp(); // TODO: error handling, isLoading
  const [filmDetails, setFilmDetails] = useState({});

  const { filmId } = props;

  useEffect(() => {
    // console.log(filmId);
    fetchFilm({ url: `movie/${filmId}?language=en-US` }, (data) => {
      setFilmDetails(data);
      setLoading(false);
    });
  }, [filmId, fetchFilm]);

  if (loading) {
    return (
      <div className={classes["spinner-container"]}>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={classes.wrapper}>
      <Image
        width={"200px"}
        height={"300px"}
        alt={filmDetails.title}
        imageSrc={"https://image.tmdb.org/t/p/w342" + filmDetails.poster_path}
      />
      <div className={classes["right-side-wrapper"]}>
        <Text as="h2">{filmDetails.title}</Text>
        <Text as="p">{filmDetails.overview}</Text>
        <div className={classes["genres-wrapper"]}>
          {filmDetails.genres.map((genre) => (
            <Genre key={genre.id}>{genre.name}</Genre>
          ))}
        </div>
      </div>
    </div>
  );
};

FilmDetail.propTypes = {
  filmId: PropTypes.number.isRequired,
};

export default FilmDetail;
