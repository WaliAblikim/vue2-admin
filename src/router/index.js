import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/common/layout.vue";
import PageLayout from "@/views/common/page-layout.vue";
import Login from "@/views/login/login.vue";

Vue.use(VueRouter);

export const menuRoutes = [
  {
    path: "dashboard",
    name: "dashboard",
    meta: {
      title: "控制台",
      icon: "dashboard",
    },
    component: () => import("@/views/dashboard/index.vue"),
  },
  {
    path: "users",
    name: "user",
    meta: {
      title: "用户",
      icon: "user",
    },
    component: PageLayout,
    children: [
      {
        path: "list",
        name: "user-list",
        meta: {
          title: "用户管理",
          icon: "usergroup",
        },
        component: () => import("@/views/user/index.vue"),
      },
    ],
  },
];
const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "dashboard",
    children: [...menuRoutes],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
