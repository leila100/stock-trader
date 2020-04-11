import Vue from "vue";
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueResource from "vue-resource";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { routes } from "./routes";
import store from "./store/store";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.http.options.root = "https://stocktrader-18b16.firebaseio.com/";

Vue.filter("currency", value => {
  return "$" + value.toLocaleString();
});

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
