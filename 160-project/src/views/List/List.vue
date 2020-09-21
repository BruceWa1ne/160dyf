<template>
  <div>
    <van-row>
      <van-col span="6">
        <van-sidebar v-model="active">
          <van-sidebar-item
            :title="item.name"
            v-for="item in list"
            :key="item.id"
            :to="item.path"
            @click.native="getdata(item)"
          />
        </van-sidebar>
      </van-col>
      <list-right-bar></list-right-bar>
    </van-row>
  </div>
</template>

<script>
import listRightBar from "./children/Category.vue";
export default {
  data() {
    return {
      active: 0,
      currentPath: "/list/pro",
      list: [
        {
          id: 1,
          name: "专科用药",
          path: "/list/pro"
        },
        {
          id: 2,
          name: "家庭用药",
          path: "/list/family"
        },
        {
          id: 3,
          name: "医疗器械",
          path: "/list/med"
        },
        {
          id: 4,
          name: "营养保健",
          path: "/list/care"
        },
        {
          id: 5,
          name: "男科用药",
          path: "/list/man"
        },
        {
          id: 6,
          name: "母婴乐园",
          path: "/list/mab"
        },
        {
          id: 7,
          name: "计生情趣",
          path: "/list/interest"
        },
        {
          id: 8,
          name: "中药滋补",
          path: "/list/cmed"
        },
        {
          id: 9,
          name: "健康家电",
          path: "/list/electrical"
        },
        {
          id: 10,
          name: "手机数码",
          path: "/list/digital"
        },
        {
          id: 11,
          name: "美妆个护",
          path: "/list/beauty"
        },
        {
          id: 12,
          name: "健康生活",
          path: "/list/health"
        },
        {
          id: 13,
          name: "服饰鞋袜",
          path: "/list/cloth"
        },
        {
          id: 14,
          name: "宠物生活",
          path: "/list/pet"
        },
        {
          id: 15,
          name: "服务商品",
          path: "/list/sproduct"
        },
        {
          id: 16,
          name: "隐形眼镜",
          path: "/list/glasses"
        }
      ]
    };
  },

  components: {
    listRightBar
  },

  methods: {
    getdata(obj) {
      localStorage.setItem("type", obj.name);
    }
  }
};
</script>

<style scoped>
.van-sidebar {
  width: 100%;
  height: 55.583rem;
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
</style>
