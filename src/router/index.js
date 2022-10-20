import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/Layout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Layout,
    children: [],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
