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
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import PrivateLayout from "../layouts/PrivateLayout/PrivateLayout";

import Films from "../pages/Films/Films";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import image from "../assets/img/auth-background.jpg";

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
        <Route path="/" element={<Navigate to="/login" />}></Route>
        <Route
          element={
            <PrivateLayout>
              <ContentLayout>
                <Outlet />
              </ContentLayout>
            </PrivateLayout>
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
        <Route
          element={
            <AuthLayout backgroundImage={image}>
              <Outlet />
            </AuthLayout>
          }
        >
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
