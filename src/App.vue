<template>
    <!-- USING THE VUE ROUTER NAVIGATION - RouterLink -->
    <RouterLink :to="{ name: 'home' }" class="mr-5">Home</RouterLink>
    <RouterLink :to="{ name: 'hello-world' }">HelloWorld</RouterLink>

    <!-- The classes used for the wrapper container are Tailwind classes. See more at https://tailwindcss.com/ -->
    <div class="flex flew-row justify-center">
        <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
    </div>

    <!-- The RouterView component is place in which all your routes will be rendered -->
    <RouterView></RouterView>
</template>

<script setup lang="ts">
// SCRIPT 'SETUP' MEANS YOU WILL BE USING THE 'COMPOSITION API' WHICH IS NEW IN VUE 3, INSTEAD OF THE OLD 'OPTIONS API'.
// It is also the most TypeScript-friendly way to write Vue components
// https://vuejs.org/api/sfc-script-setup.html
</script>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
