import React, { useEffect, useState } from "react";
import ContentItem from "../ContentItem/ContentItem";
import classes from "./Content.module.css";
import { getPopularFilms, getTrendingFilms } from "../../../api/api";
import { useLocation } from "react-router-dom";
import SpinnerContainer from "../../molecules/SpinnerContainer/SpinnerContainer";
import Nav from "../../molecules/Nav/Nav";
import Input from "../../atoms/Input/Input";

const Content = () => {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);
  const [error, setError] = useState("");

  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
    console.log("get film");
    if (location.pathname === "/popular") {
      handleGetPopularFilms();
    } else if (location.pathname === "/trending") {
      handleGetTrendingFilms();
    }
  }, [location]);

  const handleGetPopularFilms = () => {
    getPopularFilms(1)
      .then((response) => {
        setError("");
        console.log(response.data);
        setFilms(response.data.results);
      })
      .catch((err) => {
        setError("There was an error gathering information.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGetTrendingFilms = () => {
    getTrendingFilms(1)
      .then((response) => {
        setError("");
        console.log(response.data);
        setFilms(response.data.results);
      })
      .catch((err) => {
        setError("There was an error gathering information.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    // TODO: fix on styling and margin bug
    return <SpinnerContainer />;
  }

  if (error !== "") {
    // TODO: make error component
    return <h1>Error</h1>;
  }

  const renderedFilms = films.map((film) => (
    <ContentItem
      key={film.id}
      text={film.original_title}
      imageSource={"https://image.tmdb.org/t/p/w342" + film.poster_path}
    />
  ));

  return (
    <React.Fragment>
      <Nav>
        <Input placeholder="Search for a movie..." />
      </Nav>
      <div className={`${classes["content-container"]} mt-4`}>
        {renderedFilms}
      </div>
    </React.Fragment>
  );
};

export default Content;
