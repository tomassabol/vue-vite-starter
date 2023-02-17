<template>
  <section class="w-screen h-full">
    <Header />
    <div
      v-if="movies.length === 0"
      class="flex w-screen h-screen justify-center items-center pb-20"
    >
      <p>
        your favorite list is empty. select some movies as your favorite, in
        order to be displayed on tis page
      </p>
    </div>
    <div v-else></div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import MovieService from "../service/movieService";
import { Movie } from "../types";
import Header from "./Header.vue";

var movies = ref([] as Movie[]);

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
</script>

<style scoped></style>
