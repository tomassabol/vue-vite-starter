<template>
  <section class="h-screen">
    <Header />

    <div id="form-container" class="flex justify-center items-center h-5/6">
      <div class="block">
        <h2 class="text-center">browse all the movies</h2>
        <Form />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Header from "../components/Header.vue";
import Form from "../components/Form.vue";
</script>

<style scoped></style>
