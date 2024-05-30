import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Settings",
      component: () => import('../views/Settings.vue'),
    },
    {
      path: "/orderBook",
      name: "Order Book",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/OrderBook.vue"),
    },
  ],
});

export default router;
