<template>
  <Header />
  <div>{{ movie.id }}</div>
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
</script>

<style scoped></style>
