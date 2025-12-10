<template>
  <div class="layout_container">
    <div class="layout_slider">
      <Logo></Logo>

      <el-scrollbar class="scrollbar">
        <el-menu
          background-color="#001529"
          text-color="white"
          active-text-color="yellowgreen"
        >
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>

    <div class="layout_tabbar">234</div>

    <div class="layout_main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'

import useUserStore from '@/store/modules/user';

let userStore = useUserStore();

</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    color: white;
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;
    transition: all 0.3s;

    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);

      .el-menu {
        border-right: none;
      }
    }
  }

  .layout_tabbar {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    top: 0px;
    left: $base-menu-width;
    transition: all 0.3s;
    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }

  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    left: $base-menu-width;
    top: $base-tabbar-height;
    padding: 20px;
    overflow: auto; //滚动条
    transition: all 0.3s;
    background: red;

    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
