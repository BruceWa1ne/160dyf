<template>
  <div>
    <div class="login-container">
      <!-- ref 相当于 id，:model 表单数据对象, label-width 表单域标签的的宽度 -->
      <el-form ref="form" label-width="80px" class="login-form">
        <h2 class="login-title">160会员管理系统-登录</h2>
        <el-form-item label="帐号">
          <el-input placeholder="请输入帐号" v-model.trim="username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model.trim="password"
          >
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox
            label="七天免登录"
            name="type"
            v-model="keep"
          ></el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="primary" @click="go">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import userAPI from "../../api/userAPI";
import { setToken, setUser } from "../../utils/auth";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      keep: ""
    };
  },

  components: {},

  methods: {
    go() {
      this.$router.push("/reg");
    },

    login() {
      console.log(this.keep, "是否保存7天");
      let password = this.$md5(this.password);
      userAPI.login(this.username, password).then(res => {
        console.log(res.data, 844);
        if (res.data.flag) {
          if (this.keep) {
            setToken(res.data.token, 7);
            setUser(this.username, 7);
          } else {
            setToken(res.data.token);
            setUser(this.username);
          }
          //跳转到首页
          this.$router.push("/");
        } else {
          this.$message({
            type: "error",
            message: "登录失败"
          });
        }
      });
    }
  },

  created() {
    console.log(this.$route);
    this.username = this.$route.query.username;
  }
};
</script>

<style scoped>
.login-form {
  width: 350px;
  /* 上下间隙150px, 左右自动 */
  margin: 160px auto;
  /*透明背景色*/
  background-color: rgb(255, 255, 255, 0.8);
  padding: 30px;
  /* 圆角 */
  border-radius: 20px;
}
.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../../assets/login.jpg");
  overflow: hidden;
}
/* 标题 */
.login-title {
  text-align: center;
  color: #303133;
}
</style>