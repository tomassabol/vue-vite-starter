import axios from "axios";
import dotenv from "dotenv";
import { Movie } from "../types";

const api = "https://api.themoviedb.org/3";
const key = import.meta.env.VITE_API_KEY;

const getMovie = (movieID: string) =>
  axios.get(`${api}/movie/${movieID}?api_key=${key}`);

const getMovies = (searchWord: string) =>
  axios.get(
    `${api}/search/movie?api_key=${key}&language=en-US&query=${searchWord}&page=1&include_adult=false`
  );

const MovieService = {
  getMovie,
  getMovies,
};

export default MovieService;
