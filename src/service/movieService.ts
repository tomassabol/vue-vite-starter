import axios from "axios";
import dotenv from "dotenv";

const api = "https://api.themoviedb.org/3";
const key = "d83203734d061b0f64469720c31cfcfe";

const getMovie = (movieID: string) =>
  axios.get(`${api}/movie/${movieID}?api_key=${key}`);

const getMovies = async (searchWord: string) =>
  await axios
    .get(
      `${api}/search/movie?api_key=${key}&language=en-US&query=${searchWord}&page=1&include_adult=false`
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });

const MovieService = {
  getMovie,
  getMovies,
};

export default MovieService;
