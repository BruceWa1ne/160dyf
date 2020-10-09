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
      <div class="more">
        <div v-if="moreShowBoolen">加载更多</div>

        <div v-else>已无更多</div>
      </div>
    </div>
  </div>
</template>

<script>
import goodslistApi from "../../api/goodslistApi";
export default {
  data() {
    return {
      checked: true,
      show: false,
      page: 1,
      pagesize: 40,
      nowPage: 1,
      total: 0,
      tableData: [],
      scrollHeight: 0,
      moreShowBoolen: false
    };
  },

  components: {},

  mounted() {
    this.fetchData();

    // screen.availHeight表示屏幕高度

    // document.documentElement.scrollTop表示当前页面滚动条的位置,documentElement对应的是html标签,body对应的是body标签

    // document.compatMode用来判断当前浏览器采用的渲染方式,CSS1Compat表示标准兼容模式开启

    window.addEventListener("scroll", () => {
      const scrollY =
        document.documentElement.scrollTop || document.body.scrollTop; // 滚动条在Y轴上的滚动距离

      const vh =
        document.compatMode === "CSS1Compat"
          ? document.documentElement.clientHeight
          : document.body.clientHeight; // 页面的可视高度（能看见的）

      const allHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      ); // 页面的总高度（所有的）

      if (scrollY + vh >= allHeight) {
        // 当滚动条滑到页面底部

        this.scrollMore();
      }
    });
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    go(path) {
      this.$router.push(path);
    },
    fetchData() {
      // let {page, pagesize, search} = this;
      goodslistApi.getlists(this.page, this.pagesize).then(res => {
        // console.log(res.data.data, 999);
        if (res.data.data.length <= 10) {
          this.tableData = res.data.data; //数据部分
          this.moreShowBoolen = false;
        } else {
          this.tableData = res.data.data.slice(0, 10); //数据部分
          this.moreShowBoolen = true;
        }
      });
    },
    scrollMore() {
      goodslistApi.getlists(this.page, this.pagesize).then(res => {
        // console.log(res.data.data, 999);
        this.tableData = this.tableData.concat(res.data.data.slice(this.nowPage * 10, (this.nowPage + 1) * 10));
        this.nowPage++;
        if (res.data.data.length >= this.nowPage * 10) {
          this.moreShowBoolen = true;
        } else {
          this.moreShowBoolen = false;
        }
      });
    },

    toDetails(id) {
      //跳转到详情页面
      this.$router.push({
        path: "/details",
        query: {
          id
        }
      });
      // sessionStorage.setItem('id')
    }
  },
  beforeRouteEnter(to, from, next) {
    window.document.body.style.backgroundColor = "#f5f5f5";
    next();
  },

  beforeRouteLeave(to, from, next) {
    window.document.body.style.backgroundColor = "";
    next();
  },

  created() {}
};
</script>

<style lang="scss" scoped>
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
.more{
  display: flex;
  padding: 5px 5.333%;
  justify-content: center;
  font-size: 1.2rem;
  color: #666;
}
</style>
