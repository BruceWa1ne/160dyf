<template>
  <div id="sortlist">
    <div class="sortlist-header">
      <van-search show-action shape="round" placeholder="请输入搜索关键词">
        <template #left>
          <div class="sortbtn" @click="onClickLeft">
            <van-icon name="arrow-left" size="1.5rem" color="#999" />
          </div>
        </template>
        <template #action>
          <div @click="go('/cart')">
            <div style="color:#999;">筛选</div>
          </div>
        </template>
      </van-search>
    </div>
    <div class="search-way">
      <span>最新</span>
      <span>销量</span>
      <span>评论</span>
      <span>价格</span>
    </div>

    <div class="sortlist-show">
      <van-grid :gutter="10" :column-num="2">
        <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      show: false
    };
  },

  components: {},

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    go(path) {
      this.$router.push(path);
    }
  },
  beforeRouteEnter(to, from, next) {
    window.document.body.style.backgroundColor = "#f5f5f5";
    next();
  },

  beforeRouteLeave(to, from, next) {
    window.document.body.style.backgroundColor = "";
    next();
  }
};
</script>

<style lang='scss' scoped>
.my-swipe {
  .van-swipe-item {
    background: none !important;
    line-height: 175.781px !important;
  }
}
.sortlist-header {
  position: fixed;
  width: 100%;
  // left: 0;
  // top: 0;
  // right: 0;
  // bottom: 0;
  z-index: 10;
}
.sortlist {
  padding: 5.3333%;
}
.van-search {
  background-color: #f5f5f5;
}
.van-search__action {
  padding: 0 8px 0 16px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.van-search__content {
  background-color: #ffffff;
}
.sortbtn {
  padding: 0 8px;
  font-size: 14px;
  line-height: 34px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.van-search--show-action {
  padding-right: 12px;
}
::v-deep .van-grid-item__content {
  padding: 0 8px 16px 8px;
  background-color: #f5f5f5;
}
.van-tag {
  padding: 0;
}
.van-tag--plain {
  margin-top: 5px;
  background-color: #f5f5f5;
  color: black;
}
.van-tag--plain::before {
  border: none;
}

.search-way {
  overflow: hidden;
  background-color: #fff;
  color: #666;
  padding-top: 54px;
  span {
    width: 20%;
    float: left;
    line-height: 2.85rem;
    height: 2.85rem;
    background-color: #fff;
    text-align: center;
  }
}
.sortlist-show {
  padding-top: 10px;
  .van-grid-item {
    height: 226px;
    ::v-deep .van-grid-item__content {
      background-color: #fff;
    }
  }
}
</style>