import React, { useEffect, useState } from "react";
import ContentItem from "../ContentItem/ContentItem";
import classes from "./Content.module.css";
import { getPopularFilms, getTopRatedFilms, getTrendingFilms } from "../../../api/api";
import { useLocation } from "react-router-dom";
import SpinnerContainer from "../../molecules/SpinnerContainer/SpinnerContainer";
import Nav from "../../molecules/Nav/Nav";
import Input from "../../atoms/Input/Input";

const Content = () => {
  // TODO: REFACTOR: handle lots of genres + discover section
  // make something like a container 

  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);
  const [error, setError] = useState("");

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/popular") {
      handleGetPopularFilms();
    } else if (location.pathname === "/trending") {
      handleGetTrendingFilms();
    } else if (location.pathname ==="/top-rated"){
      handleGetTopRatedFilms();
    }
  }, [location]);

  const handleGetPopularFilms = () => {
    setLoading(true);
    getPopularFilms(1)
      .then((response) => {
        setError("");
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
    setLoading(true);
    getTrendingFilms(1)
      .then((response) => {
        setError("");
        setFilms(response.data.results);
      })
      .catch(() => {
        setError("There was an error gathering information.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGetTopRatedFilms = () => {
    setLoading(true);
    getTopRatedFilms(1).then((response) => {
      setError("");
      setFilms(response.data.results);
    }).catch(() => {
      setError("There was an error gathering information.")
    }).finally(() => {
      setLoading(false);
    })
  }

  if (loading) {
    return <SpinnerContainer />;
  }

  if (error !== "") {
    // TODO: make error component
    return <h1>Error</h1>;
  }

  const renderedFilms = films.map((film) => (
    <ContentItem
      key={film.id}
      title={film.title}
      rating={film.vote_average}
      vote_count={film.vote_count}
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
