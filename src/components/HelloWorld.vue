<template>
    <h1>{{ msg }}</h1>

    <div class="card">
        <button type="button" @click="count++">count is {{ count }}</button>
        <p>
            Edit
            <code>components/HelloWorld.vue</code> to test HMR
        </p>
    </div>

    <p>
        Check out
        <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
            >create-vue</a
        >, the official Vue + Vite starter
    </p>
    <p>
        Install
        <a href="https://github.com/johnsoncodehk/volar" target="_blank"
            >Volar</a
        >
        in your IDE for a better DX
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
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
