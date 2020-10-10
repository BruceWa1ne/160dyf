<template>
  <div class="navbar">
    <el-menu
      :default-active="current"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item
        :index="item.path"
        v-for="item in navlist"
        :key="item.id"
        @click="go(item.path)"
      >
        <i :class="item.icon"></i>
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "navs",
  data() {
    return {
      current: "/home/users",
      navlist: [
        {
          id: 1,
          path: "/home/users",
          name: "users",
          icon: "el-icon-user-solid",
          title: "用户管理"
        },
        {
          id: 2,
          path: "/home/goods",
          name: "goods",
          icon: "el-icon-goods",
          title: "商品管理"
        },
        {
          id: 3,
          path: "/home/orders",
          name: "orders",
          icon: "el-icon-s-order",
          title: "订单管理"
        },
        {
          id: 4,
          path: "/home/comments",
          name: "comments",
          icon: "el-icon-document",
          title: "评论管理"
        }
      ]
    };
  },

  components: {},

  methods: {
    go(path) {
      this.$router.push(path);
    }
  },

  created() {
    this.current = this.$route.path;
  },

  watch: {
    $route: {
      deep: true,
      handler(newroute) {
        this.current = newroute.path;
      }
    }
  }
};
</script>

<style scoped>
/* 左侧导航栏 */
.navbar {
  position: absolute;
  width: 230px;
  top: 50px;
  left: 0px;
  bottom: 0px;
  overflow-y: auto;
  background-color: #545c64;
}
</style>
