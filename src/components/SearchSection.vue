<template>
  <section class="h-screen w-screen">
    <div id="form-container" class="flex justify-center items-center h-5/6">
      <div class="column w-3/6">
        <h2 class="text-center text-3xl">
          dive into the cinematic universe: discover every detail about any
          movie you can imagine.
        </h2>
        <br />
        <form class="">
          <input
            type="text"
            placeholder="Search for a movie"
            v-model="searchWord"
            class="w-full mb-3 drop-shadow-md border-2 border-violet-300 rounded-lg p-1 text-center"
          />
          <div class="flex justify-center items-center">
            <button
              @click="search"
              name="data"
              type="button"
              class="bg-violet-300 text-slate-100 drop-shadow-md"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  <section id="result-section">
    <div class="flex flex-wrap justify-center">
      <div
        v-for="movie in movies"
        :key="movie.id"
        class="flex flex-col items-center m-5 drop-shadow-lg"
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
import { ref } from "vue";
import MovieService from "../service/movieService";
import { MovieSearch } from "../types";

const searchWord = ref("");
let movies = ref([] as MovieSearch[]);
const url = import.meta.env.VITE_IMG_ENDPOINT;

async function search() {
  const res = await MovieService.getMovies(searchWord.value);
  const data = res.data;
  movies.value = data.results.slice(0, 3);
  scroll();
}

function scroll() {
  const resultSecition = document.getElementById("result-section");
  resultSecition?.scrollIntoView({ behavior: "smooth" });
}
</script>

<style scoped></style>
