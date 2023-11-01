import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { searchActions } from "../../store/slices/search-slice";

import classes from "./Films.module.css";

import useHttp from "../../hooks/use-http";

import SpinnerContainer from "../../components/molecules/SpinnerContainer/SpinnerContainer";
import Button from "../../components/molecules/Button/Button";
import Error from "../../components/molecules/Error/Error";
import ContentItem from "../../components/organisms/ContentItem/ContentItem";

let availableGenres = [];

const Films = (props) => {
  const dispatch = useDispatch();
  const { isLoading, error, sendRequest } = useHttp();
  const [searchParams, setSearchParams] = useSearchParams();

  const [films, setFilms] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(null);

  const { apiUrl } = props;
  const { genreId } = props;

  const getFilms = useCallback(
    async (searchValue, page) => {
      await sendRequest({ url: "genre/movie/list?language=en-US" }, (data) => {
        availableGenres = data.genres;
      });
      if (searchValue !== "") {
        sendRequest(
          {
            url: "/search/movie",
            params: {
              query: searchValue,
              page: page,
            },
          },
          (data) => {
            setFilms(data.results);
            setMaxPage(data.total_pages);
          }
        );
      } else {
        if (apiUrl) {
          sendRequest({ url: apiUrl, params: { page: page } }, (data) => {
            setFilms(data.results);
            setMaxPage(data.total_pages);
          });
        } else if (genreId) {
          sendRequest(
            {
              url: "/discover/movie",
              params: {
                page: page,
                with_genres: genreId,
                sort_by: "popularity.desc",
              },
            },
            (data) => {
              setFilms(data.results);
              setMaxPage(data.total_pages);
            }
          );
        }
      }
    },
    [apiUrl, sendRequest, genreId]
  );

  const handlePreviousPageClick = () => {
    // when changing between pages, set isDirty to false again
    dispatch(searchActions.setDirty(false));
    setSearchParams({
      page: Number(page) - 1,
      ...(searchQuery && { search: searchQuery }),
    });
  };

  const handleNextPageClick = () => {
    // when changing between pages, set isDirty to false again
    dispatch(searchActions.setDirty(false));
    setSearchParams({
      page: Number(page) + 1,
      ...(searchQuery && { search: searchQuery }),
    });
  };

  useEffect(() => {
    const search = searchParams.get("search") ?? "";
    const page = searchParams.get("page") ?? 1;

    setSearchQuery(search);
    setPage(page);
    getFilms(search, page);
  }, [searchParams, getFilms, setSearchParams]);

  const generateFilmGenresString = (genre_ids) => {
    const selectedGenres = availableGenres
      .filter((genre) => genre_ids.includes(genre.id))
      .map((genre) => genre.name);

    return selectedGenres.join(", ");
  };

  const renderedFilms = films.map((film) => (
    <ContentItem
      key={film.id}
      filmId={film.id}
      title={film.title}
      genres={generateFilmGenresString(film.genre_ids)}
      year={film.release_date.split("-")[0]}
      rating={film.vote_average}
      vote_count={film.vote_count}
      imageSource={"https://image.tmdb.org/t/p/w342" + film.poster_path}
    />
  ));

  return (
    <React.Fragment>
      {/* <Nav>
        <Input
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </Nav> */}
      {isLoading && <SpinnerContainer />}
      {error !== null && <Error>There was an error gathering films.</Error>}
      {films.length === 0 && (
        <Error>There are no films based on your search.</Error>
      )}
      {!isLoading && error === null && films.length > 0 && (
        <div className={`${classes["content-container"]}`}>
          <div className={`${classes["paginate-buttons-container"]}`}>
            {page > 1 && (
              <Button
                size="sm"
                theme="primary"
                onClick={handlePreviousPageClick}
              >
                Previous page
              </Button>
            )}
            {page < 500 && page < maxPage && (
              <Button size="sm" theme="primary" onClick={handleNextPageClick}>
                Next page
              </Button>
            )}
          </div>
          <div className={classes["films-container"]}>{renderedFilms}</div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Films;
