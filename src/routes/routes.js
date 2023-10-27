import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import useHttp from "../hooks/use-http";

import ContentLayout from "../layouts/ContentLayout/ContentLayout";

import Films from "../pages/Films/Films";
import Person from "../pages/Person/Person";
import Film from "../pages/Film/Film";
import Playground from "../pages/Playground/Playground";
import NotFound from "../pages/NotFound/NotFound";

const AppRoutes = () => {
  const [genreButtons, setGenreButtons] = useState([]);
  const { sendRequest: fetchFilms } = useHttp();

  const discoverButtons = [
    {
      section: "popular",
      link: "/popular",
      text: "Popular",
      apiUrl: "/movie/popular",
    },
    {
      section: "trending",
      link: "/trending",
      text: "Trending",
      apiUrl: "/trending/movie/week",
    },
    {
      section: "top-rated",
      link: "/top-rated",
      text: "Top Rated",
      apiUrl: "/movie/top_rated",
    },
  ];

  useEffect(() => {
    fetchFilms({ url: "genre/movie/list" }, (data) => {
      setGenreButtons(
        data.genres.map((genre) => ({
          id: genre.id,
          section: genre.name.toLowerCase(),
          link: `/genre-${genre.name.toLowerCase()}`,
          text: genre.name,
        }))
      );
    });
  }, [fetchFilms]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/popular" />}></Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/playground/" element={<Playground />} />
        <Route
          element={
            <ContentLayout>
              <Outlet />
            </ContentLayout>
          }
        >
          {discoverButtons.map((button) => (
            <Route
              key={button.link}
              path={`${button.link}/`}
              element={<Films apiUrl={button.apiUrl} pageUrl={button.link} />}
            />
          ))}
          {genreButtons.map((genre) => (
            <Route
              key={genre.link}
              path={`${genre.link}/`}
              element={<Films genreId={genre.id} pageUrl={genre.link} />}
            />
          ))}
          <Route path={"/film/:id"} element={<Film />} />
          <Route path={"/person/:id"} element={<Person />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
