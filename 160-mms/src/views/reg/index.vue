<template>
  <div>
    <div class="login-container">
      <!-- ref 相当于 id，:model 表单数据对象, label-width 表单域标签的的宽度 -->
      <el-form ref="form" label-width="80px" class="login-form">
        <h2 class="login-title">160会员管理系统-注册</h2>
        <el-form-item label="帐号">
          <el-input
            placeholder="请输入帐号"
            v-model.trim="username"
            @blur="checkname"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" placeholder="请输入密码" v-model="password">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="reg">注册</el-button>
          <el-button type="primary" @click="go">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import userAPI from "../../api/userAPI";
export default {
  name: "reg",
  data() {
    return {
      username: "",
      password: "",
      ischck: false
    };
  },

  components: {},

  methods: {
    go() {
      this.$router.push("/login");
    },
    // 验证用户名
    checkname() {
      if (this.username) {
        userAPI
          .checkName(this.username)
          .then(res => {
            console.log(res, 778);
            if (res.data.flag) {
              this.ischck = true;
              this.$message({
                type: "success",
                message: "可以注册",
                duration: 2000
              });
            } else {
              this.ischck = false;
              this.$message({
                type: "error",
                message: "用户名已被注册，请换一个",
                duration: 2000
              });
            }
          })
          .catch(err => {
            this.$message({
              type: "error",
              message: "服务器异常",
              duration: 2000
            });
          });
      } else {
        this.$message({
          type: "error",
          message: "用户名不能为空",
          duration: 2000
        });
      }
    },

    reg() {
      if (this.ischck && this.username && this.password) {
        let pass = this.$md5(this.password);
        userAPI
          .reg(this.username, pass)
          .then(res => {
            console.log(res, 999);
            if (res.data.flag) {
              this.$message({
                type: "success",
                message: "注册成功",
                duration: 2000
              });
              this.$router.push({
                path: "/login",
                query: { username: this.username },
              });
            } else {
              this.$message({
                type: "success",
                message: "注册失败",
                duration: 2000
              });
            }
          })
          .catch(err => {
            this.$message({
              type: "success",
              message: "服务器异常",
              duration: 2000
            });
          });
      } else {
        this.$message({
          type: "success",
          message: "用户名或密码不能为空",
          duration: 2000
        });
      }
    }
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