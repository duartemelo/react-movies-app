import React, { useEffect, useState } from "react";
import ContentItem from "../../components/organisms/ContentItem/ContentItem";
import classes from "./Films.module.css";
import { useNavigate, useParams } from "react-router-dom";
import SpinnerContainer from "../../components/molecules/SpinnerContainer/SpinnerContainer";
import Nav from "../../components/molecules/Nav/Nav";
import Input from "../../components/atoms/Input/Input";
import ReactPaginate from "react-paginate";
import Error from "../../components/molecules/Error/Error";
import useHttp from "../../hooks/use-http";

const Films = (props) => {
  const { isLoading, error, sendRequest: fetchFilms } = useHttp();
  const [films, setFilms] = useState([]);
  let { page } = useParams();

  const navigate = useNavigate();

  const { apiUrl } = props;
  const { genreId } = props;

  useEffect(() => {
    if (apiUrl) {
      fetchFilms({ url: apiUrl, params: { page: page } }, (data) => {
        setFilms(data.results);
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
        }
      );
    }
  }, [apiUrl, genreId, page, fetchFilms]);

  const handlePageClick = (event) => {
    navigate(`${props.pageUrl}/${event.selected + 1}`);
  };

  if (isLoading) {
    return <SpinnerContainer />;
  }

  if (error !== null) {
    return <Error>There was an error gathering films.</Error>;
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
      <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={500}
        previousLabel="<<"
        renderOnZeroPageCount={null}
        containerClassName={classes.pagination}
        pageLinkClassName={classes["page-num"]}
        previousLinkClassName={classes["page-num"]}
        nextLinkClassName={classes["page-num"]}
        activeLinkClassName={classes.active}
        forcePage={page - 1}
      />
    </React.Fragment>
  );
};

export default Films;
