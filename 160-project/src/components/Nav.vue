<template>
  <div class="footer_wrap">
    <ul class="footer_list">
      <li>
        <router-link to>
          <i class="iconfont icon-shouye-xianxing"></i>
          首页
        </router-link>
      </li>
      <li>
        <router-link to>
          <i class="iconfont icon-liaotianduihua-xianxing"></i>
          咨询
        </router-link>
      </li>
      <li>
        <router-link to>
          <i class="iconfont icon-yingyongchengxu-xianxing"></i>
          分类
        </router-link>
      </li>
      <li>
        <router-link to>
          <i class="iconfont icon-caigou-xianxing"></i>
          购物车
        </router-link>
      </li>
      <li>
        <router-link to>
          <i class="iconfont icon-yonghu-xianxing"></i>
          我的
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
        list:[
            {
                id: 1,
                name: "首页",
                path: "/home",
            },
            {
                id: 2,
                name: "咨询",
                path: "/contact",
            },
            {
                id: 3,
                name: "分类",
                path: "/list",
            },
            {
                id: 4,
                name: "购物车",
                path: "/cart",
            },
            {
                id: 5,
                name: "我的",
                path: "/mine",
            },
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
      a{
          color: #a29999;
      i {
        display: flex;
        align-self: center;
        font-size: vw(45);
        color: #666666;
      }
      }
    }
  }
}
</style>