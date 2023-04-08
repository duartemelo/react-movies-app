import React, { useEffect, useState } from "react";

import ContentLayout from "../layouts/ContentLayout/ContentLayout";
import Content from "../components/organisms/Content/Content";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { getGenres } from "../api/api";

const AppRoutes = () => {
  const [genreButtons, setGenreButtons] = useState([]);

  const discoverButtons = [
    {
      section: "popular",
      link: "/popular",
      text: "Popular",
      apiUrl: "/movie/popular"
    },
    {
      section: "trending",
      link: "/trending",
      text: "Trending",
      apiUrl: "/trending/movie/week"
    },
    {
      section: "top-rated",
      link: "/top-rated",
      text: "Top Rated",
      apiUrl: "/movie/top_rated"
    },
  ];

  useEffect(() => {
    getGenres().then((response) => {
      setGenreButtons(response.data.genres.map(genre => ({
        id: genre.id,
        section: genre.name.toLowerCase(),
        link: `/genre-${genre.name.toLowerCase()}`,
        text: genre.name
      })))
    });
  }, []);



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
            <Route key={button.link} path={`${button.link}/:page`} element={<Content url={button.apiUrl}/>} />
          ))}
          {genreButtons.map((button) => (
            <Route key={button.link} path={`${button.link}/:page`} element={<Content genreId={button.id}/>} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
