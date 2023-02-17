<template>
  <Movie />
</template>

<script setup lang="ts">
import Movie from "../components/Movie.vue";

// create a session storage if it doesn't exist
if (sessionStorage.getItem("favorite") === null) {
  var array: number[] = [];
  sessionStorage.setItem("favorite", JSON.stringify(array));
}
</script>

<style scoped></style>
