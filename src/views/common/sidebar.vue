<template>
  <t-aside :width="collapsed ? '64px' : '232px'">
    <div class="menu">
      <t-menu :collapsed="collapsed">
        <t-menu-item
          v-for="item in menuRoutes"
          v-bind:key="item.name"
          :value="item.name"
        >
          <template #icon>
            <t-icon name="app" />
          </template>
          仪表盘
        </t-menu-item>
      </t-menu>
    </div>
  </t-aside>
</template>

<script>
import menuRoutes from "@/router/index.js";

export default {
  name: "Sidebar",
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      menuRoutes,
    };
  },
};
</script>
<style lang="scss" scoped>
.menu {
  height: 100vh;
}
</style>
