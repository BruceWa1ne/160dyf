<template>
  <div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "mains",
  data() {
    return {};
  },

  components: {},

  methods: {}
};
</script>

<style scoped>
/* 右侧主区域 */
.main {
  position: absolute;
  top: 50px;
  left: 230px;
  right: 0px;
  bottom: 0px;
  padding: 10px;
  overflow-y: auto;
}
</style>