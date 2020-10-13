<template>
  <!-- 底部菜单 -->
  <div>
    <van-tabbar v-model="active" active-color="#00d6d5">
      <van-tabbar-item
        :icon="item.icon"
        v-for="item in list"
        :key="item.id"
        :badge="item.name === 'cart' ? carts : ''"
        @click="move(item.path)"
      >
        {{ item.text }}
      </van-tabbar-item>
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
          name: "home",
          icon: "wap-home-o",
          path: "/home",
          text: "首页",
        },
        {
          id: 2,
          name: "contact",
          icon: "chat-o",
          path: "/contact",
          text: "咨询",
        },
        {
          id: 3,
          name: "list",
          icon: "apps-o",
          path: "/list",
          text: "分类",
        },
        {
          id: 4,
          name: "cart",
          icon: "shopping-cart-o",
          path: "/cart",
          text: "购物车",
        },
        {
          id: 5,
          name: "mine",
          icon: "contact",
          path: "/mine",
          text: "我的",
        },
      ],
    };
  },

  components: {},

  methods: {
    move(path) {
      // console.log("切换到" + path);
      this.$router.push(path);
    },
  },

  computed: {
    carts() {
      //  拿到购物车的长度
      return this.$store.state.cart.carts.length;
    },
  },

  watch: {
    // 监听路由对象
    $route: {
      deep: true,
      handler(newRoute) {
        let arr = ["home", "contact", "list", "cart", "mine"];
        let index = arr.indexOf(this.$route.name);
        if (index >= 0) {
          this.active = index;
        } else {
          this.active = 0;
        }
        this.currentPath = newRoute.path;
      },
    },
  },
};
</script>

<style scoped>
@import "../../assets/sass/public/common.scss";
</style>
