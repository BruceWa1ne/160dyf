<template>
  <div>
    <div style="display:flex">
      <!-- 一级分类 -->
      <div class="leftNav">
        <!-- 侧边导航 -->
        <van-sidebar v-model="activeKey">
          <van-sidebar-item
            :title="item.title"
            v-for="(item, index) in leftList"
            :key="item.cid"
            @click="leftNav(index)"
          />
        </van-sidebar>
      </div>
      <!-- 二级分类 -->
      <div class="rightNav">
        <!-- 右侧导航 -->
        <span class="twoNavimg">
          <van-image
            width="100%"
            height="100%"
            fit="fill"
            :src="imgList.covImg"
          />
        </span>
        <dl v-for="item in rightList" :key="item.did">
          <dt>
            <a href="###">{{ item.title }}</a>
          </dt>
          <dd v-for="drug in drugnameList" :key="drug">
            <div class="fenimg">
              <div class="fen" @click="rightNav">
                <a href="###">{{ drug }}</a>
              </div>
            </div>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import categoryAPi from "../../api/categoryAPi";
export default {
  data() {
    return {
      leftList: [],
      rightList: [],
      drugnameList: [],
      activeKey: 0,
      currentPath: "/list",
      imgList: {
        covImg:
          "https://www.160dyf.com/Public/upload/category/2017/12-14/400x200/5a325546ccd46.jpg",
      },
    };
  },

  components: {},

  methods: {
    // 左侧导航切换
    leftNav(index) {
      categoryAPi.getCategory(this.page, this.pagesize).then((res) => {
        this.leftList = res.data.data[0].data;
        this.rightList = this.leftList[index].drugs;
        this.drugnameList = this.rightList[0].name;
      });
    },

    // 右侧导航切换
    rightNav() {
      this.$router.push({ path: "/sortlist" });
    },
  },

  mounted() {
    categoryAPi.getCategory(this.page, this.pagesize).then((res) => {
      this.leftList = res.data.data[0].data;
      this.rightList = this.leftList[0].drugs;
      this.drugnameList = this.rightList[0].name;
    });
  },
};
</script>

<style scoped>
.van-sidebar {
  width: 100%;
  height: 667px;
  overflow-y: scroll;
}
.van-sidebar /deep/ .van-sidebar-item {
  font-size: 1rem;
  color: #666;
}
.van-sidebar /deep/ .van-sidebar-item--select {
  font-weight: bold;
  color: #00d6d5;
}
.van-sidebar /deep/ .van-sidebar-item--select::before {
  display: none;
}
.van-sidebar::-webkit-scrollbar {
  display: none;
}

/* 内容区 */
.twoNavimg {
  width: 17rem;
  height: 6.5rem;
  display: block;
  margin-top: 0.5rem;
  margin-left: 0.3rem;
}
dl {
  overflow-y: scroll;
}

dl dt {
  margin-left: 0.3rem;
  margin-top: 1rem;
}
dl dt a {
  display: block;
  height: 0.917rem;
  font-size: 0.917rem;
  line-height: 0.917rem;
  font-weight: 700;
  color: #00d2c3;
}
dl dd .fenimg {
  margin-left: 0.3rem;
  margin-top: 0.5rem;
}
dl dd .fenimg .fen {
  min-width: 33.3%;
  float: left;
  overflow: hidden;
  text-align: left;
  margin-bottom: 0.133333rem;
}
dl dd .fenimg .fen a {
  display: block;
  float: left;
  height: 2rem;
  padding: 0.333333rem 1.43rem;
  border-radius: 1rem;
  text-align: center;
  font-size: 0.917rem;
  color: #666;
  background: #f5f5f5;
  margin-top: 0.3333rem;
}
</style>
