<template>
  <div id="app">
    <router-view />
    <nav-bar></nav-bar>
  </div>
</template>

<script>
// 1.引入子组件
import navBar from "./components/Nav.vue";
export default {
  components: {
    // 2.注册子组件
    navBar
  }
};
</script>

<style lang="scss">
@import "./assets/sass/public/common.scss";
#app {
  overflow-x: hidden;
}
</style>
