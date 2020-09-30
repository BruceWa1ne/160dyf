<template>
  <div>
    <!-- 头部信息 -->
    <van-nav-bar title="修改密码" left-arrow @click-left="onClickLeft">
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

    <!-- 输入密码 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="nowPwd"
        @blur="checkNowPsw"
        type="password"
        name="当前密码"
        placeholder="当前密码"
        :rules="[{ required: true, message: '请填写当前密码' }]"
      />
      <van-field
        v-model="newPwd"
        @blur="onceCheck"
        type="password"
        name="新密码"
        placeholder="新密码"
        :rules="[
          { required: true, message: '请填写新密码' },
          { pattern, message: '请输入正确的密码格式:最少6位数字英文' },
        ]"
      />
      <van-field
        v-model="checkPwd"
        @blur="checkNewPsw"
        type="password"
        name="确认密码"
        placeholder="确认密码"
        :rules="[
          { required: true, message: '请确认密码' },
          { pattern, message: '请输入正确的密码格式:最少6位数字英文' },
        ]"
      />
      <div style="margin: 16px;">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          color="#00d6d5"
          @click="savePwd"
        >
          保存
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import userAPI from "@/api/userAPI";
import { getUser } from "@/utils/auth";
import { Dialog } from "vant";
import { logOut } from "../../utils/auth";
export default {
  data() {
    return {
      show: false,
      nowPwd: "",
      newPwd: "",
      checkPwd: "",
      pattern: /^[^\d]\w{6,10}$/,
      username: "",
      uid: "",
    };
  },

  components: {},

  methods: {
    onSubmit(values) {
      // console.log("submit", values);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    showCont: function() {
      this.show = !this.show;
    },
    // 验证当前密码是否正确
    checkNowPsw() {
      // 获取加密后的密码
      let password = this.$md5(this.nowPwd);
      if (this.nowPwd) {
        userAPI
          .login(this.username, password)
          .then((res) => {
            console.log(res);
            if (res.data.flag) {
              //验证已经好了
              console.log(res.data.flag, 455);
              this.ischeck = true;
            } else {
              //验证没有通过
              this.ischeck = false;
              Dialog.alert({
                message: "当前密码不正确",
              }).then(() => {
                // on close
              });
            }
          })
          .catch((err) => {
            console.log("ERROR,已出错");
            Dialog.alert({
              message: "服务器请求异常",
            }).then(() => {
              // on close
            });
          });
      } else {
        Dialog.alert({
          message: "用户名不能为空",
        }).then(() => {
          // on close
        });
      }
    },
    // 验证新密码是否一致
    onceCheck() {
      // 加密两次密码
      let newPwd = this.$md5(this.newPwd);
      let checkPwd = this.$md5(this.checkPwd);
      if (newPwd == checkPwd) {
        console.log("密码确认成功");
      } else {
        Dialog.alert({
          message: "两次密码不一致",
        }).then(() => {
          // on close
        });
      }
    },

    checkNewPsw() {
      // 加密两次密码
      let newPwd = this.$md5(this.newPwd);
      let checkPwd = this.$md5(this.checkPwd);
      if (checkPwd == newPwd) {
        console.log("密码确认成功");
      } else {
        Dialog.alert({
          message: "两次密码不一致",
        }).then(() => {
          // on close
        });
      }
    },

    // 保存新密码
    savePwd() {
      // 获取uid username checkPwd
      let pwd = this.$md5(this.checkPwd);
      userAPI.editPwd(this.username, pwd, this.uid).then((res) => {
        console.log(res);
        if (res.data.flag) {
          // 修改成功
          Dialog.alert({
            message: "修改成功",
          }).then(() => {
            this.$router.push("/login");
            logOut();
          });
        } else {
          // 修改失败
          Dialog.alert({
            message: "修改失败,请重试",
          });
        }
      });
    },
  },

  // 进入页面就获取用户名
  created() {
    // 获取用户名
    this.uid = this.$store.state.user.uid;
    console.log(this.uid);
    this.username = this.$store.state.user.username;
    console.log(this.username);
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
}
.saveBtn {
  margin-top: 4.9375rem;
  text-align: center;
}
.van-button {
  width: 20.1875rem;
  font-size: 18px;
  text-align: center;
}
</style>
