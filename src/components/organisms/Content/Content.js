import React, { useEffect, useState } from "react";
import ContentItem from "../ContentItem/ContentItem";
import classes from "./Content.module.css";
import { getTrendingFilms } from "../../../api/api";
import { useLocation } from "react-router-dom";

const Content = () => {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);
  const [error, setError] = useState('');

  const location = useLocation();


  useEffect(() => {
    console.log(location.pathname);
    console.log("get film");
    getTrendingFilms(1).then((response) => {
      setError('');
      console.log(response.data);
      setFilms(response.data.results);
    }).catch((err) => {
      setError("There was an error gathering information.")
    }).finally(() => {
      setLoading(false);
    });
  }, [location])

  if (loading) {
    // TODO: make loadingPage component
    return <h1>Loading</h1>;
  }

  if (error !== ''){
    // TODO: make error component
    return <h1>Error</h1>;
  }

  const renderedFilms = films.map((film) => 
    <ContentItem key={film.id} text={film.original_title} imageSource={"https://image.tmdb.org/t/p/w342" + film.poster_path}/>
  )
 

  return (
    <div className={`${classes["content-container"]} mt-4`}>
      {renderedFilms}
    </div>
  );
};

export default Content;
