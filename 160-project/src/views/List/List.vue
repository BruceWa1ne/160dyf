<template>
  <div>
    <van-row>
      <van-col span="6">
        <!-- 左侧导航 -->
        <van-sidebar v-model="activeKey">
          <van-sidebar-item
            :title="item.name"
            v-for="item in list"
            :key="item.id"
            @click.native="getdata(item)"
          />
        </van-sidebar>
      </van-col>
      <template>
        <div class="Category_list">
          <van-col span="18">
            <!-- 右侧导航 -->
            <dl v-for="(itm, index) in newList" :key="index + 'list'">
              <span class="twoNavimg">
                <van-image
                  width="100%"
                  height="100%"
                  fit="fill"
                  :src="itm.covImg"
                />
              </span>
              <dt>
                <a href="###">{{ itm.name }}</a>
              </dt>
              <dd>
                <div class="fenimg">
                  <div class="fen">
                    <a href="###">{{ itm.list }}</a>
                  </div>
                </div>
              </dd>
            </dl>
          </van-col>
        </div>
      </template>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newList: {},
      activeKey: 0,
      currentPath: "/list",
      list: [
        {
          id: 1,
          name: "专科用药",
          covImg:
            "https://www.160dyf.com/Public/upload/category/2017/12-14/400x200/5a325546ccd46.jpg",
          list: "专科用药",
        },
        {
          id: 2,
          name: "家庭用药",
          covImg:
            "https://www.160dyf.com/Public/upload/category/2017/12-14/400x200/5a325546ccd46.jpg",
          list: "家庭用药",
        },
        {
          id: 3,
          name: "医疗器械",
          covImg:
            "https://www.160dyf.com/Public/upload/category/2017/12-14/400x200/5a325546ccd46.jpg",
          list: "医疗器械",
        },
        {
          id: 4,
          name: "营养保健",
          covImg:
            "https://www.160dyf.com/Public/upload/category/2017/12-14/400x200/5a325546ccd46.jpg",
          list: "营养保健",
        },
        {
          id: 5,
          name: "男科用药",
          covImg:
            "https://www.160dyf.com/Public/upload/category/2017/12-14/400x200/5a325546ccd46.jpg",
          list: "男科用药",
        },
        {
          id: 6,
          name: "母婴乐园",
          covImg:
            "https://www.160dyf.com/Public/upload/category/2017/12-14/400x200/5a325546ccd46.jpg",
          list: "母婴乐园",
        },
        {
          id: 7,
          name: "计生情趣",
          covImg:
            "https://www.160dyf.com/Public/upload/category/2017/12-14/400x200/5a325546ccd46.jpg",
          list: "计生情趣",
        },
        {
          id: 8,
          name: "中药滋补",
          covImg:
            "https://www.160dyf.com/Public/upload/category/2017/12-14/400x200/5a325546ccd46.jpg",
          list: "中药滋补",
        },
        {
          id: 9,
          name: "健康家电",
          covImg:
            "https://www.160dyf.com/Public/upload/category/2017/12-14/400x200/5a325546ccd46.jpg",
          list: "健康家电",
        },
        {
          id: 10,
          name: "手机数码",
          covImg:
            "https://www.160dyf.com/Public/upload/category/2017/12-14/400x200/5a325546ccd46.jpg",
          list: "手机数码",
        },
        {
          id: 11,
          name: "美妆个护",
          covImg:
            "https://www.160dyf.com/Public/upload/category/2017/12-14/400x200/5a325546ccd46.jpg",
          list: "美妆个护",
        },
        {
          id: 12,
          name: "健康生活",
          covImg:
            "https://www.160dyf.com/Public/upload/category/2017/12-14/400x200/5a325546ccd46.jpg",
          list: "健康生活",
        },
        {
          id: 13,
          name: "服饰鞋袜",
          covImg:
            "https://www.160dyf.com/Public/upload/category/2017/12-14/400x200/5a325546ccd46.jpg",
          list: "服饰鞋袜",
        },
        {
          id: 14,
          name: "宠物生活",
          covImg:
            "https://www.160dyf.com/Public/upload/category/2017/12-14/400x200/5a325546ccd46.jpg",
          list: "宠物生活",
        },
        {
          id: 15,
          name: "服务商品",
          covImg:
            "https://www.160dyf.com/Public/upload/category/2017/12-14/400x200/5a325546ccd46.jpg",
          list: "服务商品",
        },
      ],
    };
  },

  components: {},

  methods: {
    getdata(obj) {
      console.log(obj, 789);
      localStorage.setItem("type", obj.name);
    },
  },

  created() {
    this.$set(this.newList, 0, this.list[0]);
    let path = this.$route.path;
    this.list.forEach((item, index) => {
      if (item.path == path) {
        this.activeKey = index;
      }
    });
  },
  watch: {
    activeKey: function() {
      this.$set(this.newList, 0, this.list[this.activeKey]);
    },
  },
};
</script>

<style scoped>
.van-sidebar {
  width: 100%;
  height: 667px;
  overflow-y: auto;
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

/* 内容区 */
.Category_list {
  height: 43.75rem;
}
dl {
  height: 43.75rem;
  overflow-y: auto;
}
dl .twoNavimg {
  width: 17rem;
  height: 6.5rem;
  display: block;
  margin-top: 0.5rem;
  margin-left: 0.3rem;
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
  width: 100%;
  margin-left: 0.3rem;
  margin-top: 0.5rem;
  overflow: hidden;
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
