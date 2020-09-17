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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x:hidden;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
