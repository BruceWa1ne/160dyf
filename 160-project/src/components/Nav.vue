<template>
  <div class="footer_wrap">
    <!-- 底部菜单栏 -->
    <ul class="footer_list">
      <li v-for="item in list" :key="item.id">
        <router-link :to="item.path">
          <i class="iconfont" v-html="item.icon"></i>
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          name: "首页",
          icon: "&#xe8b9;",
          path: "/home"
        },
        {
          id: 2,
          name: "咨询",
          icon: "&#xe8bc;",
          path: "/contact"
        },
        {
          id: 3,
          name: "分类",
          icon: "&#xe8a1;",
          path: "/list"
        },
        {
          id: 4,
          name: "购物车",
          icon: "&#xe887;",
          path: "/cart"
        },
        {
          id: 5,
          name: "我的",
          icon: "&#xe8c8;",
          path: "/mine"
        }
      ]
    };
  },

  components: {},

  methods: {}
};
</script>

<style scoped lang="scss">
@import "../assets/sass/public/vw.scss";
@import "../assets/sass/public/common.scss";
@import "../assets/font_icon/iconfont.css";
.footer_wrap {
  width: 100vw;
  height: vw(102);
  background: #ffffff;
  position: fixed;
  left: 0;
  bottom: 0;
  ul {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      display: flex;
      flex-direction: column;
      font-size: vw(23);
      color: #a29999;
      a {
        color: #a29999;
        i {
          display: flex;
          align-self: center;
          font-size: vw(45);
          color: #666666;
        }
      }
    }
    li.active {
      background: #00d2c3;
    }
  }
}
</style>