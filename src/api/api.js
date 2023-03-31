import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export const getTrendingFilms = (page) => {
  return api.get('/trending/movie/week', { params: { api_key: process.env.REACT_APP_API_KEY, page: page}  });
}

export const getFilm = (id) => {
  return api.get('https://api.themoviedb.org/3/movie/76341', { params: { api_key: process.env.REACT_APP_API_KEY}  });
}
