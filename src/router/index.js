import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/common/layout.vue";

Vue.use(VueRouter);

export const menuRoutes = [
  {
    path: "dashboard",
    name: "dashboard",
    component: () => import("@/views/dashboard/index.vue"),
  },
];
const routes = [
  {
    path: "/",
    component: Layout,
    children: [...menuRoutes],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
