<template>
  <Header />
  <Favorite />
</template>

<script setup lang="ts">
import Favorite from "../components/Favorites.vue";
import Header from "../components/Header.vue";

// create a session storage if it doesn't exist
if (sessionStorage.getItem("favorite") === null) {
  var array: number[] = [];
  sessionStorage.setItem("favorite", JSON.stringify(array));
}
</script>

<style scoped></style>
