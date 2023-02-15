import { defineStore } from "pinia";

// DEFINING A PINIA STORE https://pinia.vuejs.org/core-concepts/
export const useDemoStore = defineStore("DemoStore", {
    state: () => ({
        myVar: "",
        // The state property 'myVar' is a reactive global state property which can be accessed and used all over the app
        // (provided that you import 'useDemoStore' in your components)
    }),
});
