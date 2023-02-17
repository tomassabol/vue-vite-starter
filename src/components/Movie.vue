<template>
  <section class="w-screen h-screen">
    <Header />
    <div
      class="h-4/6 drop-shadow-2xl"
      :style="`background-image: url(${
        url + movie.backdrop_path
      }); background-size: cover; background-position: center;`"
    />
    <div id="heading-wrapper" class="flex items-center justify-around h-60">
      <div id="text-wrapper" class="flex flex-col p-10">
        <h1 class="font-bold">
          {{ movie.title }}
        </h1>
        <div class="ml-2">
          <p>{{ movie.release_date }}</p>
          <p>{{ movie.tagline }}</p>
        </div>
      </div>
      <div id="btn-wrapper">
        <button @click="favorite()" class="bg-red-100 h-full w-full">
          <font-awesome-icon
            v-if="isInSessionStorage()"
            icon="fa-solid fa-heart-circle-check"
            class="text-3xl"
          />
          <font-awesome-icon
            v-else
            icon="fa-solid fa-heart-circle-plus"
            class="text-3xl"
          />
        </button>
      </div>
    </div>
  </section>
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
  <br />
  <p>production companies:</p>
  <div v-for="company in movie.production_companies">
    <div id="company">
      {{ company.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Header from "../components/Header.vue";
import MovieService from "../service/movieService";
import { Movie } from "../types";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import router from "../router";

const movie = ref({} as Movie);
const url = import.meta.env.VITE_IMG_ENDPOINT;

onMounted(async () => {
  const id = Number(useRoute().params.id);
  const res = await MovieService.getMovie(id);
  const data = res.data as Movie;
  movie.value = data;
  console.log(movie.value);
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
  if (isInSessionStorage()) {
    return;
  }
  // add the movie id to the array
  array.push(movie.value.id);
  // save the array to session storage
  sessionStorage.setItem("favorite", JSON.stringify(array));
  window.location.reload();
  router.push(useRoute());
}

function isInSessionStorage(): boolean {
  const array: number[] = JSON.parse(
    sessionStorage.getItem("favorite") || "[]"
  );
  return array.includes(movie.value.id);
}
</script>

<style scoped></style>
