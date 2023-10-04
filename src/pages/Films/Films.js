import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import classes from "./Films.module.css";

import useHttp from "../../hooks/use-http";

import Nav from "../../components/atoms/Nav/Nav";
import SpinnerContainer from "../../components/molecules/SpinnerContainer/SpinnerContainer";
import Input from "../../components/molecules/Input/Input";
import Button from "../../components/molecules/Button/Button";
import Error from "../../components/molecules/Error/Error";
import ContentItem from "../../components/organisms/ContentItem/ContentItem";

const Films = (props) => {
  const { isLoading, error, sendRequest: fetchFilms } = useHttp();
  const [searchParams, setSearchParams] = useSearchParams();

  const [films, setFilms] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(null);

  const [searchTimer, setSearchTimer] = useState(null);

  const { apiUrl } = props;
  const { genreId } = props;

  const getFilms = useCallback(
    (searchValue, page) => {
      if (searchValue !== "") {
        fetchFilms(
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
          fetchFilms({ url: apiUrl, params: { page: page } }, (data) => {
            setFilms(data.results);
            setMaxPage(data.total_pages);
          });
        } else if (genreId) {
          fetchFilms(
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
    [apiUrl, fetchFilms, genreId]
  );

  useEffect(() => {
    const search = searchParams.get("search") ?? "";
    const page = searchParams.get("page") ?? 1;

    setSearchQuery(search);
    setPage(page);
    getFilms(search, page);
  }, [searchParams, getFilms, setSearchParams]);

  const handlePreviousPageClick = () => {
    setSearchParams({
      page: Number(page) - 1,
      ...(searchQuery && { search: searchQuery }),
    });
  };

  const handleNextPageClick = () => {
    setSearchParams({
      page: Number(page) + 1,
      ...(searchQuery && { search: searchQuery }),
    });
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);

    if (searchTimer) {
      clearTimeout(searchTimer);
    }
    const newTimer = setTimeout(() => {
      setSearchParams({
        page: 1,
        ...(event.target.value && { search: event.target.value }),
      });
    }, 500);

    setSearchTimer(newTimer);
  };

  const renderedFilms = films.map((film) => (
    <ContentItem
      key={film.id}
      filmId={film.id}
      title={film.title}
      rating={film.vote_average}
      vote_count={film.vote_count}
      imageSource={"https://image.tmdb.org/t/p/w342" + film.poster_path}
    />
  ));

  return (
    <React.Fragment>
      <Nav>
        <Input
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </Nav>
      {isLoading && <SpinnerContainer />}
      {error !== null && <Error>There was an error gathering films.</Error>}
      {films.length === 0 && (
        <Error>There are no films based on your search.</Error>
      )}
      {!isLoading && error === null && films.length > 0 && (
        <div className={`${classes["content-container"]} mt-4`}>
          {renderedFilms}
          <div
            className={`${classes["paginate-buttons-container"]} ${
              page > 1
                ? classes["justify-space-between"]
                : classes["justify-end"]
            } mt-4`}
          >
            {page > 1 && (
              <Button
                className="default-button"
                onClick={handlePreviousPageClick}
              >
                Previous page
              </Button>
            )}
            {page < 500 && page < maxPage && (
              <Button className="default-button" onClick={handleNextPageClick}>
                Next page
              </Button>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Films;
