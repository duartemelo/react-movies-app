import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

api.interceptors.request.use((config) => {
  config.params = { ...config.params, api_key: process.env.REACT_APP_API_KEY };
  return config;
});

export const getFilms = (url, page) => {
  return api.get(url, { params: { page: page } });
};

export const getGenres = () => {
  return api.get("/genre/movie/list");
};

export const getFilmsByGenre = (genre_id, page) => {
  return api.get("/discover/movie", {params: {page: page, with_genres: genre_id, sort_by: 'popularity.desc'}})
}

export const getFilm = (id) => {
  // not done
  return api.get("https://api.themoviedb.org/3/movie/76341");
};
