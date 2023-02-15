<template>
  <div class="flex items-center justify-around h-20 bg-violet-100">
    <h1>movies</h1>

    <nav>
      <ul class="flex">
        <li class="mx-5"><router-link to="/">Home</router-link></li>
        <li class="mx-5"><router-link to="/">Movies</router-link></li>
        <li class="mx-5"><router-link to="/">About</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
</script>

<style scoped></style>
