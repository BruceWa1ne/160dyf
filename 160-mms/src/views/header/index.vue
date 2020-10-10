<template>
  <div class="header">
    <!-- 头部左侧Logo和标题 -->
    <a href="#/">
      <img class="logo" src="@/assets/logo.png" width="25px" />
      <span class="company">160会员管理系统</span>
    </a>
    <!-- 下拉菜单 -->
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a"
          ><i class="el-icon-edit"></i>修改密码</el-dropdown-item
        >
        <el-dropdown-item command="b"
          ><i class="el-icon-coordinate"></i>退出</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
    <!-- 弹窗 -->
    <el-dialog title="修改密码" :visible.sync="dialogFormVisible" width="500px">
      <el-form
        :model="ruleForm"
        status-icon
        ref="ruleForm"
        label-width="100px"
        style="width: 400px;"
      >
        <el-form-item label="原密码" prop="oldPass">
          <el-input type="password" v-model="ruleForm.oldPass"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="$refs['ruleForm'].resetFields()">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { logOut } from "../../utils/auth";
export default {
  name: "headers",
  data() {
    return {
      dialogFormVisible: false,
      ruleForm: {
        oldPass: "", //旧密码
        pass: "", //新密码
        checkPass: "" //确认密码
      },
    };
  },

  components: {},

  methods: {
    submitForm() {},

    //功能：修改密码和退出
    handleCommand(command) {
      if (command == "a") {
        this.dialogFormVisible = true; //点击新增的时候，打开弹框

        //修改密码
      } else {
        //退出功能
        logOut();
        this.$router.push("/login");
      }
    }
  }
};
</script>

<style scoped>
/* 头部区域 */
.header {
  position: absolute;
  line-height: 50px;
  padding: 0px;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: #2d3a4b;
}
.logo {
  vertical-align: middle;
  /* 上 右 下 左 */
  padding: 0 10px 0 40px;
}
.company {
  position: absolute;
  color: white;
}

.el-dropdown {
  float: right;
  padding-right: 50px;
  color: #ffffff;
}
</style>