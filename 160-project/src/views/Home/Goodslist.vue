<template>
  <div
    style="display: flex;
  justify-content: space-between;"
  >
    <!-- <div style="font-size: 16px; margin-right: 1%;" >
      <div class="left-goods-list">
        <div></div>
        <p></p>
        <label style="font-size: 15.75px;">
          <span style="color: rgb(242, 46, 0); margin-left: 6%;">￥9.00</span>
          <span
            style="margin-left: 6%; color: rgb(190, 190, 190); text-decoration: line-through;"
          >￥18.00</span>
        </label>
      </div>
    </div> -->
    <div style="font-size: 16px; margin-left: 1%;">
      <div class="right-goods-list">
        <div></div>
        <p>Robert Oatley 酿酒师典藏霞多丽干白葡萄酒2017</p>
        <label style="font-size: 15.75px;">
          <span style="color: rgb(242, 46, 0); margin-left: 6%;">￥9.00</span>
          <span
            style="margin-left: 6%; color: rgb(190, 190, 190); text-decoration: line-through;"
            >￥18.00</span
          >
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datalist: ""
    };
  },

  components: {},

  methods: {},

  created() {
    //发送请求，获取第一个分类的数据先渲染到页面。
    // console.log(localStorage.getItem("type"), 999);
    // this.datalist = localStorage.getItem("type");
  },

  watch: {
    $route: {
      deep: true,
      handler(newRoute) {
        console.log(newRoute, 123);
        //获取关键字，发送ajax，拿到的数据，放到 datalist
      }
    }
  }
};
</script>

<style lang="scss" scoped>
// .left-goods-list {
//   background: rgb(255, 255, 255);
//   margin-bottom: 3%;
//   border-radius: 15px;
//   overflow: hidden;
//   width: 175.125px;
//   height: 285px;
//   div {
//     width: 100%;
//     padding-bottom: 100%;
//     background:url("../../assets/img/test/5cadf3b726009.jpg");
//   }
//   p {
//     margin: 6%;
//     color: rgb(51, 51, 51);
//     display: -webkit-box;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     -webkit-line-clamp: 2;
//     -webkit-box-orient: vertical;
//     font-size: 13px;
//   }
// }
.right-goods-list {
  background: rgb(255, 255, 255);
  margin-bottom: 3%;
  border-radius: 15px;
  overflow: hidden;
  width: 175.125px;
  height: 285px;
  div {
    width: 100%;
    padding-bottom: 100%;
    background: url("../../assets/img/test/5f0839f40d556.jpg");
  }
  p {
    margin: 6%;
    color: rgb(51, 51, 51);
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 0.9rem;
  }
  label {
    span {
      font-size: 1.2rem;
    }
  }
}
</style>