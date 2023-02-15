<template>
  <form>
    <input
      type="text"
      placeholder="Search for a movie"
      v-model="value"
      class="w-5/6 m-5"
    />
    <div class="flex justify-center items-center">
      <button @click="search" class="bg-violet-300 text-slate-100">
        Search
      </button>
    </div>
  </form>
</template>

<script lang="ts">
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    search() {
      alert("searching " + this.value);
    },
  },
};
</script>
