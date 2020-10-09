<template>
  <div class="loading">
    <van-loading size="24px" type="spinner" vertical>加载中...</van-loading>
  </div>
</template>

<script>
import { Loading } from "vant";
export default {
  name: "LOADING",
  data() {
    return {};
  }
};
</script>

<style scoped>
.loading {
  position: fixed;
  top: 35%;
  left: 35%;
  z-index: 121;
  width: 30%;
  height: 15%;
  background: rgba(0, 0, 0, 0.3);
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  border-radius: 15%;
}
.van-loading {
  margin-top: 20%;
}
</style>