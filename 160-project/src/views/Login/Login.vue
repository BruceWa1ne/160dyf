<template>
  <div>
    <!-- 头部导航 -->
    <div>
      <van-nav-bar
        title="登录"
        left-arrow
        @click-left="onClickLeft"
        id="herader_nav"
      >
        <template #right>
          <van-icon name="wap-nav" size="22" color="black" @click="showCont" />
        </template>
      </van-nav-bar>
      <div v-if="show" class="headul">
        <div class="triangle">
          <h2 class="ttt"></h2>
        </div>
        <ul>
          <li>
            <a href="#/home">首页</a>
          </li>
          <li>
            <a href="#/list">分类</a>
          </li>
          <li>
            <a href="#/cart">购物车</a>
          </li>
          <li>
            <a href="#/mine">我的</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 登录主体 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model.trim="username"
        name="用户名"
        left-icon="phone-o"
        label=" "
        placeholder="请输入用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        left-icon="warning-o"
        label=" "
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;" class="buttr">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          color="#00d3c2"
          @click="login"
        >
          登录
        </van-button>
      </div>
    </van-form>
    <!-- 底部注册切换 -->
    <div class="check">
      <van-checkbox v-model="checked" checked-color="#00d3c2" class="checkbox">
        自动登录
        <a href="#/reg">免费注册</a>
      </van-checkbox>
    </div>
  </div>
</template>

<script>
//引用
import userAPI from "../../api/userAPI";
import { setToken, setUser } from "../../utils/auth";
import { Dialog } from "vant";
export default {
  data() {
    return {
      // 登录
      username: "",
      password: "",
      // 头部导航
      show: false,
      //免登录
      checked: "",
    };
  },

  components: {},

  methods: {
    // 导航方法
    onSubmit(values) {
      // console.log('submit', values);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    showCont: function() {
      this.show = !this.show;
    },
    //登录
    login() {
      let password = this.$md5(this.password);
      let payload = {
        username: this.username,
        password: password,
        checked: this.checked,
      };
      // 调用Vuex登录功能
      this.$store.dispatch("login", payload).then((res) => {});
    },
  },
  //接收注册页面数据
  created() {
    this.username = this.$route.query.username;
  },
};
</script>

<style lang="scss" scoped>
.headul {
  width: 30%;
  float: right;
  right: 1rem;
  overflow: hidden;
  position: fixed;
  margin-top: -1rem;
  z-index: 9999999;
  .triangle {
    width: 100%;
    height: 0.533333rem;
    .ttt {
      width: 0;
      height: 0;
      border-style: solid;
      border-color: transparent transparent rgba(46, 45, 45, 0.9);
      border-width: 0.2703rem;
      -webkit-transition: 0.6s;
      transition: 0.6s;
      float: right;
      margin-right: 0.2703rem;
    }
  }
  ul {
    width: 100%;
    overflow: hidden;
    background-color: rgba(46, 45, 45, 0.9);
    border-radius: 0.053333rem;
    li {
      width: 100%;
      height: 2rem;
      border-bottom: 0.026667rem solid #959595;
      color: #fff;
      text-align: center;
      line-height: 2rem;
      a {
        line-height: 1.06667rem;
        height: 1.06667rem;
        color: #fff;
      }
    }
  }
}
.buttr {
  margin-top: 5rem !important;
}
::v-deep .van-nav-bar .van-icon {
  color: #00d3c2;
}
.van-checkbox {
  margin-left: 1rem;
}
.van-checkbox__label a {
  margin-left: 11rem;
}
</style>
