<template>
  <!-- 底部菜单 -->
  <div>
    <van-tabbar v-model="active" active-color="#00d6d5">
      <van-tabbar-item
        :icon="item.icon"
        v-for="item in list"
        :key="item.id"
        @click="move(item.path)"
      >{{ item.name }}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      currentPath: "/home",
      list: [
        {
          id: 1,
          name: "首页",
          icon: "wap-home-o",
          path: "/home"
        },
        {
          id: 2,
          name: "咨询",
          icon: "chat-o",
          path: "/contact"
        },
        {
          id: 3,
          name: "分类",
          icon: "apps-o",
          path: "/list"
        },
        {
          id: 4,
          name: "购物车",
          icon: "shopping-cart-o",
          path: "/cart"
        },
        {
          id: 5,
          name: "我的",
          icon: "contact",
          path: "/mine"
        }
      ]
    };
  },

  components: {},

  methods: {
    move(path) {
      this.$router.push(path);
    }
  },

  watch: {
    //面试题：watch和updated有什么区别：watch一般用于监听某个属性的变化而执行功能，可以监听路由对象；updated只要data数据有变化都会触发，不能监听路由对象
    $route: {
      deep: true,
      handler(newRoute) {
        console.log(newRoute);
        this.currentPath = newRoute.path;
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/sass/public/vw.scss";
@import "../assets/sass/public/common.scss";
</style>