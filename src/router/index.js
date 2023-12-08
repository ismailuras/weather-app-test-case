import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Weather from "../views/Weather.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/weather",
      component: Weather,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

// protected route

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("isLoggedIn");

  if (to.meta.requiresAuth) {
    if (isAuthenticated) {
      next();
    } else {
      next("/login");
    }
  } else {
    if (isAuthenticated && to.path === "/login") {
      next("/weather");
    } else {
      next();
    }
  }
});

export default router;
