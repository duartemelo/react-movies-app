import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import classes from "./Person.module.css";

import useHttp from "../../hooks/use-http";

import Text from "../../components/atoms/Text/Text";
import Spinner from "../../components/atoms/Spinner/Spinner";

import Error from "../../components/molecules/Error/Error";
import Button from "../../components/molecules/Button/Button";
import Image from "../../components/molecules/Image/Image";

import { BiLeftArrowAlt } from "react-icons/bi";

const Person = () => {
  const navigate = useNavigate();
  const { sendRequest, error } = useHttp();

  const [loading, setLoading] = useState(true);
  const [personDetails, setPersonDetails] = useState({});

  const { id: personId } = useParams();

  useEffect(() => {
    sendRequest({ url: `/person/${personId}?language=en-US` }, (data) => {
      setPersonDetails(data);
      console.log(data);
      setLoading(false);
    });
  }, [sendRequest, personId]);

  if (error) {
    return (
      <div>
        <Error>There was an error gathering that person.</Error>
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
          alt={personDetails.name}
          imageSrc={
            "https://image.tmdb.org/t/p/w342" + personDetails.profile_path
          }
        />
        <div className={classes["right-side-wrapper"]}>
          <Text as="h1">{personDetails.name}</Text>
          <Text as="h2" color="var(--dark-gray)" fontWeight="600">
            {personDetails.place_of_birth}
          </Text>
          <Text
            as="h4"
            color="var(--dark-gray)"
            fontWeight="500"
            fontSize="14px"
          >
            {personDetails.birthday}{" "}
            {personDetails.deathday && `- ${personDetails.deathday}`}
          </Text>

          <Text
            as="h3"
            color="var(--dark-gray)"
            fontWeight="600"
            className={classes["section-title"]}
          >
            Biography
          </Text>
          <Text as="p" fontSize="16px" fontWeight="500">
            {personDetails.biography}
          </Text>
        </div>
      </div>
    </>
  );
};

export default Person;
