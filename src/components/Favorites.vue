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
    <div v-else class="flex flex-wrap justify-evenly">
      <div
        v-for="movie in movies"
        class="flex-1 flex w-full h-80 drop-shadow-2xl cursor-pointer m-4 items-end"
        :style="`background-image: url(${
          url + movie.backdrop_path
        }); background-size: cover; background-position: center;`"
        @click="redirect(movie.id)"
      >
        <div
          class="flex flex-col w-80 pl-4 pb-4 text-black drop-shadow-pb bg-white"
        >
          <h2 class="text-2xl font-semibold drop-shadow-xl">
            {{ movie.title }}
          </h2>
          <p class="drop-shadow-xl">{{ movie.release_date.substring(0, 4) }}</p>
        </div>
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
