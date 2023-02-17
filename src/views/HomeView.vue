<template>
  <Home />
</template>
<script setup lang="ts">
import Home from "../components/Home.vue";

// create a session storage if it doesn't exist
if (sessionStorage.getItem("favorite") === null) {
  var array: number[] = [];
  sessionStorage.setItem("favorite", JSON.stringify(array));
}
</script>
