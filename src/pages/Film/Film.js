import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import classes from "./Film.module.css";

import useHttp from "../../hooks/use-http";

import Text from "../../components/atoms/Text/Text";
import Spinner from "../../components/atoms/Spinner/Spinner";

import Image from "../../components/molecules/Image/Image";
import Genre from "../../components/molecules/Genre/Genre";
import Button from "../../components/molecules/Button/Button";
import Error from "../../components/molecules/Error/Error";
import RatingContainer from "../../components/molecules/RatingContainer/RatingContainer";

import CastItem from "../../components/organisms/CastItem/CastItem";

import { BiLeftArrowAlt } from "react-icons/bi";

const Film = () => {
  const navigate = useNavigate();
  const { sendRequest, error } = useHttp();

  const [loading, setLoading] = useState(true);
  const [filmDetails, setFilmDetails] = useState({});
  const [cast, setCast] = useState([]);

  const { id: filmId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await sendRequest({ url: `movie/${filmId}?language=en-US` }, (data) => {
        setFilmDetails(data);        
      });
      await sendRequest(
        { url: `movie/${filmId}/credits?language=en-US` },
        (data) => {
          setCast(data.cast);
        }
      );
      setLoading(false);
    };
    fetchData();
  }, [filmId, sendRequest]);

  if (error) {
    return (
      <div>
        <Error>There was an error gathering that film.</Error>
      </div>
    );
  }
  if (loading) {
    return (
      <div className={classes["spinner-container"]}>
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className={classes["back-button-wrapper"]}>
        <Button
          className={`${classes["back-button"]} active centered-text no-animate`}
          width="40px"
          height="40px"
          paddingLeft="0"
          backgroundColor={"var(--gray)"}
          color="var(--dark-text)"
          fontSize="25px"
          onClick={() => navigate(-1)}
        >
          <BiLeftArrowAlt />
        </Button>
      </div>
      <div className={classes.wrapper}>
        <Image
          width="300px"
          height="450px"
          borderRadius="5px"
          alt={filmDetails.title}
          imageSrc={"https://image.tmdb.org/t/p/w342" + filmDetails.poster_path}
        />
        <div className={classes["right-side-wrapper"]}>
          <Text as="h1">{filmDetails.title}</Text>
          <Text as="h2" color="var(--dark-gray)" fontWeight="600">
            {filmDetails.tagline}
          </Text>
          <Text
            as="h4"
            color="var(--dark-gray)"
            fontWeight="500"
            fontSize="14px"
          >
            {filmDetails.release_date.split("-")[0]}
          </Text>
          <div className={classes["genres-wrapper"]}>
            {filmDetails.adult && (
              <Genre className={classes["adult-genre"]}>Adult</Genre>
            )}
            {filmDetails.genres.map((genre) => (
              <Genre key={genre.id}>{genre.name}</Genre>
            ))}
          </div>

          <div className={classes["rating-wrapper"]}>
            <RatingContainer
              rating={filmDetails.vote_average}
              className={classes.rating}
            />
            <Text as="p" fontSize="12px" color="var(--dark-gray)">
              {filmDetails.vote_average} out of {filmDetails.vote_count} votes
            </Text>
          </div>

          <Text
            as="h3"
            color="var(--dark-gray)"
            fontWeight="600"
            className={classes["section-title"]}
          >
            Synopsis
          </Text>
          <Text as="p" fontSize="16px" fontWeight="500">
            {filmDetails.overview}
          </Text>
          <Text
            as="h3"
            color="var(--dark-gray)"
            fontWeight="600"
            className={classes["section-title"]}
          >
            Cast
          </Text>
          <div className={classes["cast-wrapper"]}>
            {cast.map(
              (person) =>
                person.profile_path !== null && (
                  <CastItem
                    key={person.id}
                    personId={person.id}
                    personName={person.name}
                    imagePath={person.profile_path}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Film;
