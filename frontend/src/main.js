import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import SchoolView from "./views/SchoolView.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap"
import "@mdi/font/css/materialdesignicons.css";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/scuola",
    name: "scuola",
    component: SchoolView,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

const app = createApp(App);

app.use(router);

app.config.productionTip = false;

app.mount("#app");
