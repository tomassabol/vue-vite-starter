<template>
  <div class="flex items-center justify-around h-20 bg-violet-100">
    <h1 class="text-4xl font-bold">movieApp</h1>

    <nav>
      <ul class="flex">
        <li class="mx-5 font-semibold">
          <router-link to="/">Home</router-link>
        </li>
        <li class="mx-5 font-semibold">
          <router-link to="/favorites">My Favorites</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
