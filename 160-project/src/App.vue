<template>
  <div id="app">
    <loading v-show="LOADING"></loading>
    <router-view />
    <nav-bar v-if="footer_show"></nav-bar>
  </div>
</template>

<script>
import { mapState } from "vuex";
// 1.引入子组件
import Loading from "./components/Loading.vue";
import navBar from "./components/footer/Nav.vue";
export default {
  data() {
    return {
      footer_show: true
    };
  },
  computed: {
    ...mapState(["LOADING"])
  },
  components: {
    // 2.注册子组件
    Loading,
    navBar
  },
  watch: {
    $route: function(r) {
      if (
        r.path == "/details" ||
        r.path == "/sortlist" ||
        r.path == "/login" ||
        r.path == "/reg" ||
        r.path == "/userset" ||
        r.path == "/editpwd"
      ) {
        this.footer_show = false;
      } else {
        this.footer_show = true;
      }
    }
  }
};
</script>

<style lang="scss">
@import "./assets/sass/public/common.scss";
#app {
  overflow-x: hidden;
  padding-bottom: 50px;
  height: 100%;
}
</style>
