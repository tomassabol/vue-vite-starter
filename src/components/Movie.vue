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
      <div id="text-wrapper" class="flex flex-col p-10 w-1/2">
        <h1 class="font-bold">
          {{ movie.title }}
        </h1>
        <div class="ml-1">
          <p>{{ release_year }}</p>
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
  <section class="mx-40 h-full mb-40">
    <a :href="movie.homepage" target="_blank"> {{ movie.homepage }}</a>
    <br />
    <br />
    <p>lenth: {{ movie.runtime }} min</p>
    <br />
    <p>reviews: {{ reviews }}/10</p>
    <br />
    <div id="genre-wrapper" class="flex items-center">
      <p>genres:</p>
      <div v-for="genre in movie.genres" class="flex mx-10">
        <p class="font-semibold">{{ genre.name }}</p>
      </div>
    </div>
    <br />
    <p class="font-semibold text-2xl">Overview</p>
    <p class="w-5/6">{{ movie.overview }}</p>
    <br />
    <div id="prod-companies" class="flex">
      <p>production companies:</p>
      <div>
        <li v-for="company in movie.production_companies" class="ml-5">
          {{ company.name }}
        </li>
      </div>
    </div>
    <br />
    <p>budget: {{ movie.budget }}$</p>
    <p>revenue: {{ movie.revenue }}$</p>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Header from "../components/Header.vue";
import MovieService from "../service/movieService";
import { Movie } from "../types";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "../router";

const movie = ref({} as Movie);
const url = import.meta.env.VITE_IMG_ENDPOINT;

// was getting an error when using substring in the template
// so that's why I'm using these vars
var reviews = "";
var release_year = "";

onMounted(async () => {
  const id = Number(useRoute().params.id);
  const res = await MovieService.getMovie(id);
  const data = res.data as Movie;
  movie.value = data;

  // bind vars
  reviews = movie.value.vote_average.toString().substring(0, 3);
  release_year = movie.value.release_date.substring(0, 4);
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
