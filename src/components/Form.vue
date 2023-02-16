<template>
  <form>
    <input
      type="text"
      placeholder="Search for a movie"
      v-model="value"
      class="w-5/6 m-5"
    />
    <div class="flex justify-center items-center">
      <button
        @click="search"
        name="data"
        type="button"
        class="bg-violet-300 text-slate-100"
      >
        Search
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import MovieService from "../service/movieService";

export default {
  mounted() {
    const res = MovieService.getMovies(this.value);
    console.log(res);
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    search() {
      const res = MovieService.getMovies(this.value);
      console.log(res);
    },
  },
};
</script>
