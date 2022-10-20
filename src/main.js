import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import TDesign from "tdesign-vue";
import "tdesign-vue/es/style/index.css";
import "tdesign-vue/dist/reset.css";

Vue.use(TDesign);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
