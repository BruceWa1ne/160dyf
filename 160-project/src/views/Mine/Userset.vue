<template>
  <div>
    <!-- 头部信息 -->
    <van-nav-bar title="个人信息" left-arrow @click-left="onClickLeft">
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
          <a href="/home">首页</a>
        </li>
        <li>
          <a href="/list">分类</a>
        </li>
        <li>
          <a href="/cart">购物车</a>
        </li>
        <li>
          <a href="/mine">我的</a>
        </li>
      </ul>
    </div>
    <!-- 头像 -->
    <van-cell class="head_img" is-link center>
      <template #title>
        <span class="custom-title">头像</span>
      </template>
      <template #default>
        <van-uploader :after-read="afterRead" image-fit="fill" />
      </template>
    </van-cell>

    <!-- 信息 -->
    <div class="user_msg">
      <van-cell title="昵称" is-link :value="$store.state.user.username" />
      <van-cell title="性别" is-link value="保密" />
      <van-cell title="邮箱" is-link />
      <van-cell title="手机号码" is-link value="保密" />
    </div>
    <!-- 修改密码 -->
    <div class="user_pwd">
      <van-cell title="修改密码" is-link to="/editpwd" />
    </div>
    <!-- 退出登录 -->
    <van-button
      @click="exitLog"
      type="default"
      size="large"
      color="linear-gradient(to right, #ff6034, #ee0a24)"
    >
      退出登录
    </van-button>
  </div>
</template>

<script>
import { logOut } from "../../utils/auth";
export default {
  data() {
    return {
      show: false,
    };
  },

  components: {},

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    showCont: function() {
      this.show = !this.show;
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    exitLog() {
      // 退出登录
      this.$store.dispatch("logOuts");
    },
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
::v-deep .van-nav-bar .van-icon {
  color: #000;
  font-size: 22px;
}
.van-nav-bar {
  height: 3.583rem;
  border-bottom: 0.69rem solid #f5f5f5;
}
.head_img {
  height: 5.5rem;
  border-bottom: 0.69rem solid #f5f5f5;
}
::v-deep .van-uploader__upload {
  width: 60px;
  height: 60px;
}
.head_img .van-cell__right-icon {
  font-size: 1.4rem;
  color: #cfcfcf;
}
.user_msg {
  border-bottom: 0.69rem solid #f5f5f5;
}
.user_msg .van-cell__right-icon {
  font-size: 1.4rem;
  color: #cfcfcf;
}
.user_pwd {
  border-bottom: 3.69rem solid #f5f5f5;
}
.user_pwd .van-cell__right-icon {
  font-size: 1.4rem;
  color: #cfcfcf;
}
</style>
