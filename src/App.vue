<template>
  <!-- USING THE VUE ROUTER NAVIGATION - RouterLink -->

  <!-- The RouterView component is place in which all your routes will be rendered -->
  <RouterView></RouterView>
</template>

<script setup lang="ts">
// TODO: Switch to composition API
// SCRIPT 'SETUP' MEANS YOU WILL BE USING THE 'COMPOSITION API' WHICH IS NEW IN VUE 3, INSTEAD OF THE OLD 'OPTIONS API'.
// It is also the most TypeScript-friendly way to write Vue components
// https://vuejs.org/api/sfc-script-setup.html
import HomeView from "./views/HomeView.vue";
</script>
<style scoped></style>
