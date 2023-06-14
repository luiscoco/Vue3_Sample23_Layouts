import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "../src/components/HomeComponent.vue";
import AboutComponent from "../src/components/AboutComponent.vue";

const routes = [
  {
    path: "/",
    component: HomeComponent,
  },
  {
    path: "/about",
    component: AboutComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
