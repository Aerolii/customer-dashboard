import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "App",
    meta: {
      showLeftDrawer: false,
    },
    component: () => import("@/views/IndexView.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/home/HomeView.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory("/"),
});

export default router;
