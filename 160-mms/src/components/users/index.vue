<template>
  <div>
    <!-- 导航 -->
    <app-Title :mytitle="mytitle"></app-Title>
    <!-- 按钮 -->
    <el-form :inline="true" :model="search" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="search.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-select v-model="search.sex" placeholder="性别" style="width:100px">
          <el-option label="男" value="男"></el-option>
          <el-option label="女" value="女"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" icon="el-icon-search"
          >查询</el-button
        >
        <el-button type="success" icon="el-icon-plus" @click="addUser">新增</el-button>
        <el-button type="warning" icon="el-icon-refresh-right">重置</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <el-table stripe :data="tableData" border style="width: 100%">
      <el-table-column type="index" prop="id" label="id" width="50">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="100"> </el-table-column>
      <el-table-column prop="sex" label="性别" width="50"> </el-table-column>
      <el-table-column prop="birthday" label="出生日期" width="100">
      </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column prop="phone" label="手机号码" width="120">
      </el-table-column>
      <el-table-column label="头像">
        <template slot-scope="scope">
          <img :src="scope.row.pic" style="width:50px" />
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            circle
            @click="delUer(scope.row._id)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[15, 20, 30, 40]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
    <!-- 弹窗 -->
    <el-dialog title="新增用户" :visible.sync="dialogFormVisible" width="20%">
      <el-form :model="userform">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input
            v-model="userform.name"
            autocomplete="off"
            style="width:200px"
            placeholder="请输入姓名"
          ></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-select
            v-model="userform.sex"
            placeholder="请选择性别"
            style="width:200px"
          >
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生日期" :label-width="formLabelWidth">
          <el-date-picker
            v-model="userform.birthday"
            type="date"
            placeholder="选择日期"
            style="width:200px"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input
            v-model="userform.phone"
            autocomplete="off"
            style="width:200px"
          ></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input
            type="textarea"
            v-model="userform.address"
            style="width:200px"
          ></el-input>
        </el-form-item>
        <el-form-item label="头像" :label-width="formLabelWidth">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import listAPI from "../../api/listAPI";
import appTitle from "../title";
export default {
  data() {
    return {
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ],
      dialogFormVisible: false,
      userform: {
        name: "",
        region: ""
      },
      formLabelWidth: "80px",
      mytitle: "用户管理",
      search: {
        name: "",
        sex: ""
      },
      page: 1,
      pagesize: 15,
      total: 0,
      tableData: [],
      currentPage4: 1
    };
  },

  components: {
    appTitle
  },

  methods: {
    fetchData() {
      let { page, pagesize, search } = this;
      listAPI.getusers(this.page, this.pagesize, this.search).then(res => {
        console.log(res, 999);
        this.tableData = res.data.data;
        this.total = res.data.total;
      });
    },

    onSubmit() {
      this.fetchData();
    },
    handleSizeChange(val) {
      this.pagesize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.page = val;
      this.fetchData();
    },



    
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },

    delUer(id) {
      console.log(id, 678);
      this.$confirm("您确定要删除该用户吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          //真的删除
          listAPI.del(id).then((res) => {
            console.log(res.data);
            if (res.data.flag) {
              this.$message({
                type: "success",
                message: "删除成功!",
              });
              this.fetchData(); //重新渲染数据
            } else {
              this.$message({
                type: "error",
                message: "删除失败",
              });
            }
          });
        })
        .catch(() => {
          //取消删除
          // this.$message({
          //   type: 'info',
          //   message: '已取消删除'
          // });
        });
    },
    //功能:新增用户
    addUser() {
      this.dialogFormVisible = true; //点击新增的时候，打开弹框
    },

  },

  created() {
    this.fetchData();
  }
};
</script>

<style scoped>
</style>