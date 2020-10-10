<template>
  <div>
    <app-Title :mytitle="mytitle"></app-Title>
  </div>
</template>

<script>
import appTitle from "../title";
export default {
  data() {
    return {
      mytitle: "订单管理"
    };
  },

  components: {
    appTitle
  },

  methods: {}
};
</script>

<style scoped>
</style>