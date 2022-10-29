import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/LandingPage.vue";
import LandingPage from "@/views/LandingPage.vue";
import LoginAuth from "@/views/auth/Login.vue";
import Signup from "@/views/auth/signup";



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
    name: "Login",
    component: LoginAuth
  },

  {
    path: '/signup',
    name: 'SignUp',
    component: Signup
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
