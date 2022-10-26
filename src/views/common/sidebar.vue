<template>
  <t-aside :width="collapsed ? '64px' : '232px'">
    <div class="menu">
      <t-menu :collapsed="collapsed">
        <sidebar-item
          v-for="item in menuRoutes"
          :key="item.name"
          :item="item"
        ></sidebar-item>
      </t-menu>
    </div>
  </t-aside>
</template>
s
<script>
import { menuRoutes } from "@/router";
import SidebarItem from "@/components/SidebarItem/index.vue";

export default {
  components: { SidebarItem },
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
