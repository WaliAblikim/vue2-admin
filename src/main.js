import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import TDesign from "tdesign-vue";
import "tdesign-vue/es/style/index.css";
import "tdesign-vue/dist/reset.css";
import store from "@/store/index.js";
import "./permission.js";

Vue.use(TDesign);
process.env.NODE_ENV === "development" && require("./mock");

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
