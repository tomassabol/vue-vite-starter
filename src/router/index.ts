// Docs: https://router.vuejs.org/
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    // This is a named route object
    // https://router.vuejs.org/guide/essentials/named-routes.html
    {
        path: "/",
        name: "home",
        component: () => import("../views/EmptyView.vue"),
    },
    {
        path: "/helloworld",
        name: "hello-world",
        component: () => import("../views/HomeView.vue"),
    },
    // Your next route(s) here...
];

const router = createRouter({
    history: createWebHistory(), // Creates a hash history
    routes, // The routes array
});

export default router;
