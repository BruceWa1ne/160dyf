<template>
  <div>
    <van-sidebar v-model="active"  active-color="#00d6d5">
    <van-sidebar-item 
    :title="item.name" 
    v-for="item in list" 
    :key="item.id"
    />
    </van-sidebar>
  </div>
</template>

<script>
export default {
  data () {
    return {
         active: 0,
         currentPath: "/pro",
      list: [
        {
          id: 1,
          name: "专科用药",
          path: "/pro",
        },
        {
          id: 2,
          name: "家庭用药",
          path: "/family",
        },
        {
          id: 3,
          name: "医疗器械",
          path: "/med",
        },
        {
          id: 4,
          name: "营养保健",
          path: "/care",
        },
        {
          id: 5,
          name: "男科用药",
          path: "/man",
        },
        {
          id: 6,
          name: "母婴乐园",
          path: "/mab",
        },
        {
          id: 7,
          name: "计生情趣",
          path: "/interest",
        },
        {
          id: 8,
          name: "中药滋补",
          path: "/cmed",
        },
        {
          id: 9,
          name: "健康家电",
          path: "/electrical",
        },
        {
          id: 10,
          name: "手机数码",
          path: "/digital",
        },
        {
          id: 11,
          name: "美妆个护",
          path: "/pro",
        },
        {
          id: 12,
          name: "健康生活",
          path: "/beauty",
        },
        {
          id: 13,
          name: "服饰鞋袜",
          path: "/cloth",
        },
        {
          id: 14,
          name: "宠物生活",
          path: "/pet",
        },
        {
          id: 15,
          name: "服务商品",
          path: "/sproduct",
        },
        {
          id: 16,
          name: "隐形眼镜",
          path: "/glasses",
        },
      ]
    }
  },

  components: {},

  methods: {

    // move(path) {
    //   this.$router.push(path);
    // },
  },

    watch: {
    //面试题：watch和updated有什么区别：watch一般用于监听某个属性的变化而执行功能，可以监听路由对象；updated只要data数据有变化都会触发，不能监听路由对象
    $route: {
      deep: true,
      handler(newRoute) {
        // console.log(newRoute);
        this.currentPath = newRoute.path;
      }
    }
  }
}
</script>

<style scoped>
</style>

<style lang="scss">
    .van-sidebar-item{
        color: #666666;
        font-size: 0.833rem;
    }
</style>