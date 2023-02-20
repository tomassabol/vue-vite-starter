<template>
  <div class="flex h-36 justify-center items-center">
    <h2 class="font-bold text-5xl">my favorites</h2>
  </div>
  <section v-if="movies.length">
    <div
      v-if="movies.length === 0"
      class="flex w-screen h-screen justify-center items-center pb-20"
    >
      <p>
        your favorite list is empty. select some movies as your favorite, in
        order to be displayed on tis page
      </p>
    </div>
    <div v-else class="flex flex-wrap justify-center drop-shadow-lg">
      <div
        v-for="movie in movies"
        :key="movie.id"
        class="flex flex-col items-center m-5"
      >
        <router-link :to="'/movie/' + movie.id">
          <div>
            <img
              :src="url + movie.poster_path"
              class="w-60 h-80 drop-shadow-md"
            />
            <h2 class="w-60 text-2xl font-bold text-left">
              {{ movie.title }}
            </h2>
            <p>{{ movie.release_date.slice(0, 4) }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import MovieService from "../service/movieService";
import { Movie } from "../types";

let movies = ref([] as Movie[]);
const url = import.meta.env.VITE_IMG_ENDPOINT;
const router = useRouter();

onMounted(() => {
  getMovies();
});

function fetch() {
  const array: number[] = JSON.parse(
    sessionStorage.getItem("favorite") || "[]"
  );
  return array;
}

async function getMovies() {
  // fetch the array of movie IDs from session storage
  const favorites: number[] = fetch();
  // create an array of movies
  var movieArray: Movie[] = [];
  // loop through the array of movie IDs
  for (let i = 0; i < favorites.length; i++) {
    const movieID = favorites[i];
    const res = await MovieService.getMovie(movieID);
    const data = res.data as Movie;
    // add the movie to the array
    movieArray.push(data);
  }
  movies.value = movieArray;
}

function redirect(id: number) {
  router.push({
    name: "movie",
    params: { id: id },
  });
}
</script>

<style scoped></style>
