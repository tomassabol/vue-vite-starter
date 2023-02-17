<template>
  <Header />
  <h1>
    {{ movie.title }}
  </h1>
  <p>{{ movie.release_date }}</p>
  <button @click="favorite()" class="bg-white">Add to favorite</button>
  <p>{{ movie.tagline }}</p>
  <p>{{ movie.homepage }}</p>
  <br />
  <p>genres:</p>
  <div v-for="genre in movie.genres">
    <p>{{ genre.name }}</p>
  </div>
  <br />
  <p>{{ movie.overview }}</p>
  <p>adult: {{ movie.adult }}</p>
  <p>time: {{ movie.runtime }}min</p>
  <p>budget: {{ movie.budget }}$</p>
  <p>revenue: {{ movie.revenue }}$</p>
  <p>vote: {{ movie.vote_average }}/10</p>
  <div v-for="company in movie.production_companies">
    <div id="company">
      <br />
      {{ company.name }}
      <br />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Header from "../components/Header.vue";
import MovieService from "../service/movieService";
import { Movie } from "../types";

const movie = ref({} as Movie);

onMounted(async () => {
  const id = Number(useRoute().params.id);
  const res = await MovieService.getMovie(id);
  const data = res.data as Movie;
  movie.value = data;
  console.log(data);
});

/**
 * add movie to favorite
 */
function favorite() {
  // fetch the array from session storage
  const array: number[] = JSON.parse(
    sessionStorage.getItem("favorite") || "[]"
  );
  // check if the movie is already in the array
  if (array.includes(movie.value.id)) {
    return;
  }
  // add the movie id to the array
  array.push(movie.value.id);
  // save the array to session storage
  sessionStorage.setItem("favorite", JSON.stringify(array));
}
</script>

<style scoped></style>
