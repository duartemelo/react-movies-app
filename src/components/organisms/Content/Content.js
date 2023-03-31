import React, { useEffect, useState } from "react";
import ContentItem from "../ContentItem/ContentItem";
import classes from "./Content.module.css";
import { getTrendingFilms } from "../../../api/api";

const Content = () => {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);




  useEffect(() => {
    console.log("get film");
    getTrendingFilms(1).then((response) => {
      console.log(response.data);
      setFilms(response.data.results);
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      setLoading(false);
    })


    // getFilm().then((response) => {
    //   console.log(response.data);
    // })
  }, [])

  if (loading) {
    return <h1>Loading</h1>;
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
