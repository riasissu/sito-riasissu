import { createApp } from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@mdi/font/css/materialdesignicons.css";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

const app = createApp(App);



app.use(BootstrapVue);
app.use(IconsPlugin);
app.use(router);

app.config.productionTip = false;

app.mount("#app");
