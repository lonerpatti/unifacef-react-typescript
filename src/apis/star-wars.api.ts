import axios from 'axios';

const baseURL = process.env.REACT_APP_STAR_WARS_BASE_URL;

export const getFilms = () => {
  return axios.request({ baseURL, url: 'films' })
}

export const getFilmById = (id: number) => {
  return axios.request({ baseURL, url: `films/${id}` })
}