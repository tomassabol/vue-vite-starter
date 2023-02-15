<template>
    <p>movies</p>
</template>

<script setup lang="ts">
// https://vuejs.org/api/sfc-script-setup.html#reactivity
// ref helps you define a reactive component property
import { ref } from "vue";

// IMPORT GLOBAL STATE STORE
import { useDemoStore } from "../store/DemoStore";

// Receiving the props passed to the HelloWorld component in HomeView.vue
// https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits
defineProps<{ msg: string }>();

// Using the global state store created in DemoStore.ts
const demoStore = useDemoStore();
console.log(demoStore.myVar);

// Using the imported ref to create a reactive property
const count = ref(0);
</script>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
