<template>
  <div>
    <!-- 头部区域 -->
    <app-Headers></app-Headers>
    <!-- 左侧导航区域 -->
    <app-Navs></app-Navs>
    <!-- 右侧主区域 -->
    <app-Mains></app-Mains>
  </div>
</template>

<script>
import appHeaders from "../header/index";
import appNavs from "../nav/index";
import appMains from "../main/index";
name: "layouts";
export default {
  data() {
    return {};
  },

  components: {
    appHeaders,
    appNavs,
    appMains
  },

  methods: {}
};
</script>

<style scoped>
</style>