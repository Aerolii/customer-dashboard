import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/dashboards",
    },
    {
      path: "/dashboards",
      name: "Dashboards",
      redirect: "/dashboards/1",
      component: () => import("@/layout/MainLayout.vue"),
      children: [
        {
          path: "/dashboards/:id",
          component: () => import("@/views/dashboards/DashboardsView.vue"),
        },
      ],
    },
  ],
});

export default router;
