<template>
  <div class="goodslist">
    <van-grid :gutter="10" :column-num="2">
      <!-- <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" /> -->
      <van-grid-item v-for="value in tableData" :key="value._id">
        <!-- <van-image :src="value.url" /> -->
        <van-image :src="value.url" @click="toDetails(value._id)" />
        <div>
          <span @click="toDetails(value._id)"> {{ value.title }}</span>
          <span>¥{{ value.price }}</span>
        </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import goodslistApi from "../../api/goodslistApi";

export default {
  data() {
    return {
      page: "",
      pagesize: 40,
      tableData: [],
      listpath: ""
    };
  },

  components: {},

  methods: {
    fetchData() {
      // let {page, pagesize, search} = this;
      if (this.listpath === "/home/all") {
        this.page = 1;
      } else if (this.listpath === "/home/sales") {
        this.page = 2;
      } else if (this.listpath === "/home/Affordable") {
        this.page = 3;
      }
      goodslistApi.getlists(this.page, this.pagesize).then(res => {
        // console.log(res.data.data);
        this.tableData = res.data.data; //数据部分
      });
    }
  },

  created() {
    //发送请求，获取第一个分类的数据先渲染到页面。
    // console.log(localStorage.getItem("type"));
    this.listpath = localStorage.getItem("type");
    this.fetchData();
  },

  watch: {
    $route: {
      deep: true,
      handler(newRoute) {
        // console.log(newRoute.path, 123);
        //获取关键字，发送ajax，拿到的数据，放到 datalist
      }
    },
    tableData: {
      deep: true,
      handler(newval) {
        console.log(newval);
    }
  }
  }
};
</script>

<style lang="scss" scoped>
.goodslist {
  padding-top: 10px;
  .van-grid {
    padding-left: 0.5rem !important;
  }
  .van-grid-item {
    height: 226px;
    padding-right: 0.5rem !important;
    ::v-deep .van-grid-item__content {
      background-color: #fff;
    }
    div {
      display: flex;
      flex-direction: column;
      // padding-left: .26667rem;
      padding-top: 0.4rem;
      // padding-right: .26667rem;
      span:nth-of-type(1) {
        // overflow: hidden;
        // text-overflow: ellipsis;
        // white-space: nowrap;
        font-size: 0.77333rem;
        padding-top: 0.25rem;
      }
      span:nth-of-type(2) {
        color: #f22e00;
        font-size: 1.2rem;
        padding-top: 0.25rem;
      }
    }
  }
}
</style>