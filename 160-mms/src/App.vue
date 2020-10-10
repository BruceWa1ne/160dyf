<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.el-pagination {
  float: right;
  margin: 20px 0;
}
.el-form {
  padding-top: 20px;
}
.el-pager li.number {
  width: 20px;
  height: 20px;
  background: #ccc;
  border-radius: 5px;
  line-height: 20px;
  margin-right: 10px;
}
.el-pagination .el-pager li.active {
  background: skyblue;
  color: #fff;
}
</style>
