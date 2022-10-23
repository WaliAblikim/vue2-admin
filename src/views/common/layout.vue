<template>
  <div class="main">
    <t-layout>
      <sidebar :collapsed="collapsed"></sidebar>
      <t-layout>
        <t-header
          ><Header
            :collapsed="collapsed"
            @on-toggle-collapsed="togglecollapsed"
          ></Header
        ></t-header>
        <t-content><router-view /></t-content>
        <t-footer>footer</t-footer>
      </t-layout>
    </t-layout>
  </div>
</template>

<script>
import Sidebar from "@/views/common/sidebar.vue";
import Header from "@/views/common/header.vue";
export default {
  components: { Sidebar, Header },
  name: "Layout",
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    togglecollapsed(collapsed) {
      this.collapsed = collapsed;
    },
  },
};
</script>

<style lang="scss">
.main {
  width: 100vw;
  height: 100vh;
}
</style>
