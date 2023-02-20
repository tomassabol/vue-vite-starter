import axios from "axios";
import { Movie } from "../types";

const api = import.meta.env.VITE_API_ENDPOINT;
const key = import.meta.env.VITE_API_KEY;

const getMovie = (movieID: number) =>
  axios.get<Movie>(`${api}/movie/${movieID}?api_key=${key}`);

const getMovies = (searchWord: string) =>
  axios.get(
    `${api}/search/movie?api_key=${key}&language=en-US&query=${searchWord}&page=1&include_adult=false`
  );

const MovieService = {
  getMovie,
  getMovies,
};

export default MovieService;
