<template>
  <div>
    <!-- 头部导航栏 -->
    <div>
      <van-nav-bar title="注册" left-arrow @click-left="onClickLeft">
        <template #right>
          <van-icon name="wap-nav" size="22" color="blcak" @click="showCont" />
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
    <!-- 注册主体 -->
    <div>
      <van-form validate-first>
        <!-- 通过 pattern 进行正则校验 -->
        <van-field
          v-model.trim="username"
          @blur="checkname"
          name="pattern"
          left-icon="phone-o"
          label=" "
          placeholder="请输入用户名"
          :rules="[
            { pattern, message: '请输入正确的用户名格式:最少6位数字英文' }
          ]"
        />
        <van-field
          v-model="password"
          type="password"
          left-icon="warning-o"
          label=" "
          placeholder="请输入密码"
          :rules="[
            { pattern, message: '请输入正确的密码格式:最少6位数字英文' }
          ]"
        />
        <div style="margin: 16px;" class="buttr">
          <van-button
            round
            block
            type="info"
            native-type="submit"
            color="#00d3c2"
            @click="reg"
            >注册</van-button
          >
        </div>
      </van-form>
    </div>
    <!-- 弹窗提示 -->
    <div>
      <div class="check">
        <van-checkbox
          v-model="checked"
          checked-color="#00d3c2"
          class="checkbox"
        >
          我已阅读并同意
          <span @click="onDio">《160大药房服务协议》</span>
        </van-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
//引入
import userAPI from "../../api/userAPI";
import { Dialog } from "vant";
// data
export default {
  data() {
    return {
      // 校验规则
      username: "",
      password: "",
      ischeck: false,
      pattern: /^[^\d]\w{6,10}$/,

      // 复选框
      checked: true,

      // shhow
      show: false
    };
  },

  components: {},

  methods: {
    // 导航栏
    onClickLeft() {
      this.$router.go(-1);
    },
    showCont: function() {
      this.show = !this.show;
    },
    // 验证用户名是否已注册
    checkname() {
      if (this.username) {
        this.$store.commit("showLoading");
        userAPI
          .checkName(this.username)
          .then(res => {
            this.$store.commit("hideLoading");
            if (res.data.flag) {
              //验证已经好了
              console.log(res.data.flag, 455);
              this.ischeck = true;
            } else {
              //验证没有通过
              this.ischeck = false;
              Dialog.alert({
                message: "用户名已被注册"
              }).then(() => {
                // on close
              });
            }
          })
          .catch(err => {
            console.log("ERROR,已出错");
            Dialog.alert({
              message: "服务器请求异常"
            }).then(() => {
              // on close
            });
          });
      } else {
        Dialog.alert({
          message: "用户名不能为空"
        }).then(() => {
          // on close
        });
      }
    },

    // 注册
    reg() {
      //验证：用户名和密码不为空+用户名验证通过
      if (this.ischeck && this.username && this.password) {
        //可以注册
        let pass = this.$md5(this.password);
        userAPI
          .reg(this.username, pass)
          .then(res => {
            if (res.data.flag) {
              //注册成功
              Dialog.alert({
                message: "注册成功"
              }).then(() => {
                // on close
              });
              //跳转登录页
              this.$router.push({
                path: "/login",
                query: { username: this.username }
              });
            } else {
              //注册失败
              Dialog.alert({
                message: "注册失败"
              }).then(() => {
                // on close
              });
            }
          })
          .catch(err => {
            Dialog.alert({
              message: "服务器异常"
            }).then(() => {
              // on close
            });
          });
      } else {
        Dialog.alert({
          message: "用户名或密码不能为空"
        }).then(() => {
          // on close
        });
      }
    },

    // 弹窗提示
    onDio() {
      Dialog.alert({
        title: "160大药房服务协议",
        message:
          "欢迎使用就医160网，本许可协议在用户使用就医160网服务之前签署。在签署本协议之前，代表用户已经完全了解、知悉、接受和遵守本服务协议的全部内容。如果用户对本协议的任何条款表示异议，可以选择不使用就医160网服务。"
      }).then(() => {
        // on close
      });
    }
  }
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
.van-checkbox__label span {
  margin-left: 2rem;
  color: #00d3c2;
}
</style>