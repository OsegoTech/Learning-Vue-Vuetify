import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/LandingPage.vue";
import Team from "../views/Projects.vue"
import LandingPage from "@/views/LandingPage.vue";
import Login from "@/views/auth/Login.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/Landingpage",
    name: "LandingPage",
    component: LandingPage

  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/auth/Login.vue')
  },

  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/auth/signup.vue')
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
