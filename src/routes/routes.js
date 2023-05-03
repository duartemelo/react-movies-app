import React, { useEffect, useState } from "react";

import ContentLayout from "../layouts/ContentLayout/ContentLayout";
import Films from "../pages/Films/Films";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import useHttp from "../hooks/use-http";

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
              path={`${button.link}/:page`}
              element={<Films apiUrl={button.apiUrl} pageUrl={button.link} />}
            />
          ))}
          {genreButtons.map((genre) => (
            <Route
              key={genre.link}
              path={`${genre.link}/:page`}
              element={<Films genreId={genre.id} pageUrl={genre.link} />}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
