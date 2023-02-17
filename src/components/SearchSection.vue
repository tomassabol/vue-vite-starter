<template>
  <section class="h-screen">
    <div id="form-container" class="flex justify-center items-center h-5/6">
      <div class="column">
        <h2 class="text-center">browse all the movies</h2>
        <br />
        <form class="">
          <input
            type="text"
            placeholder="Search for a movie"
            v-model="searchWord"
            class="w-full mb-3 drop-shadow-md border-2 border-violet-300 rounded-lg p-1"
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
  <section v-if="searchResult" class="md: flexbox lg: flex" id="result-section">
    <div
      v-for="movie in searchResult"
      :id="movie.id.toString()"
      class="flex w-screen h-80 items-end drop-shadow-2xl cursor-pointer justify-between m-4"
      :style="`background-image: url(${
        url + movie.backdrop_path
      }); background-size: cover; background-position: center;`"
      @click="router(movie.id)"
    >
      <div class="w-full text-black bg-white pl-4 pt-1 pb-1">
        <h3 class="drop-shadow">{{ movie.title }}</h3>
        <p>{{ movie.release_date.slice(0, 4) }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import router from "../router";
import MovieService from "../service/movieService";
import { MovieSearch } from "../types";

export default {
  mounted() {
    // onload
  },
  data() {
    return {
      searchWord: "",
      searchResult: null as MovieSearch[] | null,
      url: "https://image.tmdb.org/t/p/w500",
    };
  },
  methods: {
    async search() {
      const res = await MovieService.getMovies(this.searchWord);
      const data = res.data;
      // get first 3 results
      this.searchResult = data.results.slice(0, 3);
      this.scroll();
    },
    scroll() {
      const resultSecition = document.getElementById("result-section");
      resultSecition?.scrollIntoView({ behavior: "smooth" });
    },
    router(id: number) {
      router.push({
        name: "movie",
        params: { id: id },
      });
    },
  },
};
</script>

<style scoped></style>
