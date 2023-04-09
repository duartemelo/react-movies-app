import React, { useEffect, useState } from "react";
import ContentItem from "../ContentItem/ContentItem";
import classes from "./Content.module.css";
import { getFilms, getFilmsByGenre } from "../../../api/api";
import {useNavigate, useParams } from "react-router-dom";
import SpinnerContainer from "../../molecules/SpinnerContainer/SpinnerContainer";
import Nav from "../../molecules/Nav/Nav";
import Input from "../../atoms/Input/Input";
import ReactPaginate from "react-paginate";

const Content = (props) => {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);
  const [error, setError] = useState("");
  let {page} = useParams();

  const navigate = useNavigate();

  const {apiUrl} = props;
  const {genreId} = props;

  useEffect(() => {
    if (apiUrl){
      handleGetFilms(apiUrl, page);
    } else if (genreId){
      handleGetFilmsByGenre(genreId, page);
    }
    
  }, [apiUrl, genreId, page]);

  const handleGetFilms = (url, page) => {
    setLoading(true);
    getFilms(url, page)
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
  }

  const handleGetFilmsByGenre = (genreId, page) => {
    setLoading(true);
    getFilmsByGenre(genreId, page)
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
  }

  const handlePageClick = (event) => {
    navigate(`${props.pageUrl}/${event.selected+1}`);
  }

  if (loading) {
    return <SpinnerContainer />;
  }

  if (error !== "") {
    // TODO: make error component
    return <h1>Error</h1>;
  }

  const renderedFilms = films.map((film) => (
    /*     TODO: fix films that dont have image, check genre_fantasy/499 -> poster_path: null   */
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
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={500}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={classes.pagination}
        pageLinkClassName={classes['page-num']}
        previousLinkClassName={classes['page-num']}
        nextLinkClassName={classes['page-num']}
        activeLinkClassName={classes.active}
        forcePage={page-1}
      />
    </React.Fragment>
  );
};

export default Content;
