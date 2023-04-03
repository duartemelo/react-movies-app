import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

api.interceptors.request.use((config) => {
  config.params = {...config.params, api_key: process.env.REACT_APP_API_KEY}
  return config
})

export const getTrendingFilms = (page) => {
  return api.get('/trending/movie/week', { params: { page: page}  });
}

export const getPopularFilms = (page) => {
  return api.get('/movie/popular', { params: { page: page}  });
}

export const getTopRatedFilms = (page) => {
  return api.get('/movie/top_rated', {params: { page: page}});
}

export const getGenres = () => {
  return api.get('/genre/movie/list');
}

export const getFilm = (id) => { // not done
  return api.get('https://api.themoviedb.org/3/movie/76341');
}
