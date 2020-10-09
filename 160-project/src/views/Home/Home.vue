<template>
  <div id="home">
    <div class="nav-header-top">
      <van-search show-action shape="round" placeholder="请输入搜索关键词">
        <template #left>
          <div class="sortbtn" @click="go('/list')">
            <van-icon name="apps-o" size="1.5rem" color="#fff" />
          </div>
        </template>
        <template #action>
          <div @click="go('/cart')">
            <van-icon name="shopping-cart-o" size="1.5rem" color="#fff" />
          </div>
        </template>
      </van-search>
    </div>
    <main>
      <div class="home-banner">
        <van-swipe class="my-swipe" :autoplay="3000" style="height: 175.781px;">
          <van-swipe-item v-for="barval in barlist" :key="barval.id">
            <van-image :src="barval.src"></van-image>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="sort-list">
        <van-grid :border="false" :column-num="5">
          <van-grid-item v-for="imgval in imglist" :key="imgval.id">
            <van-image :src="imgval.src" @click="go(imgval.path)"></van-image>
            <van-tag plain type="primary">{{ imgval.imgcontent }}</van-tag>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="times-shoplist">
        <div class="times-shop">
          <div class="times-time">
            <img
              :src="require('../../assets/img/logos/timeshop.png')"
              alt
              style="margin-right: 3%; width: 19%;"
            />
            <span class="times-day">17点场</span>
            <van-count-down :time="time">
              <template #default="timeData">
                <span class="block">{{ timeData.hours }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.minutes }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.seconds }}</span>
              </template>
            </van-count-down>
          </div>
          <van-row>
            <van-col
              span="6"
              style="padding:1.5%"
              v-for="goodsval in goodsData"
              :key="goodsval._id"
              @click="toDetails(goodsval._id)"
            >
              <van-image :src="goodsval.url" />
              <div class="newprice">￥{{ goodsval.price }}</div>
              <div class="oldprice">￥138.00</div>
            </van-col>
          </van-row>
        </div>
      </div>
      <div class="shopshow">
        <div class="shopshow-list">
          <div class="big-shopshow">
            <img
              :src="require('../../assets/img/test/5f335bbfa680b.jpg')"
              alt
            />
          </div>
          <div class="small-shopshow">
            <img
              :src="require('../../assets/img/test/5f335c0a138fd.jpg')"
              alt
            />
            <img
              :src="require('../../assets/img/test/5f55f4b1dbbbb.png')"
              alt
            />
          </div>
        </div>
      </div>
      <div class="f-shoplink">
        <div class="shoplink-img">
          <img :src="require('../../assets/img/test/5f63019ae19ca.jpg')" alt />
        </div>
      </div>
      <div class="s-shoplink">
        <div>
          <img :src="require('../../assets/img/test/5f338140ae950.jpg')" alt />
          <img :src="require('../../assets/img/test/5f338145163d3.jpg')" alt />
        </div>
      </div>
      <div class="t-shoplink">
        <div>
          <img :src="require('../../assets/img/test/1.jpg')" alt />
          <img :src="require('../../assets/img/test/2.jpg')" alt />
          <img :src="require('../../assets/img/test/3.jpg')" alt />
        </div>
      </div>
      <div class="four-shoplink">
        <div>
          <img :src="require('../../assets/img/test/4.jpg')" alt />
          <img :src="require('../../assets/img/test/5.jpg')" alt />
          <img :src="require('../../assets/img/test/6.jpg')" alt />
          <img :src="require('../../assets/img/test/7.jpg')" alt />
        </div>
      </div>
      <div class="new-information">
        <div
          style="padding: 0px 2.8%; background: rgb(255, 255, 255); height: 100%; display: flex; align-items: center; border-radius: 15px;"
        >
          <img :src="require('../../assets/img/logos/s23e87h.png')" alt />
          <van-swipe
            style="height: 50px; width: 74%;"
            :autoplay="1000"
            vertical
          >
            <van-swipe-item>
              <ul style="line-height: 24.375px; font-size: 12.75px;">
                <li
                  style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis; color: rgb(153, 153, 153);"
                >
                  利肺片价格怎么样？多少钱？
                </li>
                <li
                  style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis; color: rgb(153, 153, 153);"
                >
                  胎教到底有没有用？
                </li>
              </ul>
            </van-swipe-item>
            <van-swipe-item>
              <ul style="line-height: 24.375px; font-size: 12.75px;">
                <li
                  style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis; color: rgb(153, 153, 153);"
                >
                  利肺片价格怎么样？多少钱？
                </li>
                <li
                  style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis; color: rgb(153, 153, 153);"
                >
                  胎教到底有没有用？
                </li>
              </ul>
            </van-swipe-item>
            <van-swipe-item>
              <ul style="line-height: 24.375px; font-size: 12.75px;">
                <li
                  style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis; color: rgb(153, 153, 153);"
                >
                  利肺片价格怎么样？多少钱？
                </li>
                <li
                  style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis; color: rgb(153, 153, 153);"
                >
                  胎教到底有没有用？
                </li>
              </ul>
            </van-swipe-item>
            <van-swipe-item>
              <ul style="line-height: 24.375px; font-size: 12.75px;">
                <li
                  style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis; color: rgb(153, 153, 153);"
                >
                  利肺片价格怎么样？多少钱？
                </li>
                <li
                  style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis; color: rgb(153, 153, 153);"
                >
                  胎教到底有没有用？
                </li>
              </ul>
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
      <div class="goods-list-item" style="padding: 0px 2.4%; margin-top: 3%;">
        <div
          class="goods-list-tabs"
          style="z-index: 100; margin-bottom: 5px; width: 100%; font-size: 16px; display: flex; align-items: center; text-align: center;"
        >
          <router-link
            v-for="item in tlelist"
            :key="item.id"
            tag="div"
            :to="item.path"
            active-class="active"
            @click.native="
              routerRefresh();
              getdata(item);
            "
          >
            <span style="font-size: 18.75px;">{{ item.title }}</span>
            <span style="font-size: 11.25px;">{{ item.affix }}</span>
          </router-link>
        </div>
        <div
          id="goods-list-inf"
          style="display: flex; justify-content: space-between;"
        >
          <router-view v-if="routerNew" />
        </div>
      </div>
    </main>
    <a class="scrolltop" v-show="backshow" @click="backTop"><van-icon name="back-top" size="1.6rem"/></a>
  </div>
</template>

<script>
import goodslistApi from "../../api/goodslistApi";

export default {
  data() {
    return {
      time: 1 * 40 * 60 * 1000,
      imglist: [
        {
          id: 1,
          imgcontent: "全部分类",
          src: require("../../assets/img/sortlist/fenlei.png"),
          path: "/list",
        },
        {
          id: 2,
          imgcontent: "妇科用药",
          src: require("../../assets/img/sortlist/women.png"),
          path: "/sortlist",
        },
        {
          id: 3,
          imgcontent: "男科用药",
          src: require("../../assets/img/sortlist/men.png")
        },
        {
          id: 4,
          imgcontent: "慢性用药",
          src: require("../../assets/img/sortlist/manxing.png")
        },
        {
          id: 5,
          imgcontent: "日常用药",
          src: require("../../assets/img/sortlist/daily.png")
        },
        {
          id: 6,
          imgcontent: "两性情趣",
          src: require("../../assets/img/sortlist/bisexual.png")
        },
        {
          id: 7,
          imgcontent: "营养保健",
          src: require("../../assets/img/sortlist/Nutrition.png")
        },
        {
          id: 8,
          imgcontent: "食品养生",
          src: require("../../assets/img/sortlist/health.png")
        },

        {
          id: 9,
          imgcontent: "母婴乐园",
          src: require("../../assets/img/sortlist/baby.png")
        },
        {
          id: 10,
          imgcontent: "健康生活",
          src: require("../../assets/img/sortlist/life.png")
        }
      ],
      barlist: [
        {
          id: 1,
          src: require("../../assets/img/home-banner/activity.jpg")
        },
        {
          id: 2,
          src: require("../../assets/img/home-banner/card.jpg")
        },
        {
          id: 3,
          src: require("../../assets/img/home-banner/food.jpg")
        },
        {
          id: 4,
          src: require("../../assets/img/home-banner/Mid-autumn Festival.jpg")
        },
        {
          id: 5,
          src: require("../../assets/img/home-banner/phone.png")
        }
      ],
      tlelist: [
        {
          id: 1,
          title: "全部",
          path: "/home/all",
          affix: "猜你喜欢"
        },
        {
          id: 2,
          title: "销量",
          path: "/home/sales",
          affix: "热卖好货"
        },
        {
          id: 3,
          title: "实惠",
          path: "/home/Affordable",
          affix: "高性价比"
        }
      ],
      goodsData: [],
      page: 1,
      pagesize: 4,
      routerNew: true,
      backshow: false,
    };
  },

  components: {},

  mounted() {
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

      if (scrollY + vh >= allHeight/2) {
        // 当滚动条滑到页面底部

        this.backshow = true
      }else{
        this.backshow = false
      }
    });
  },

  methods: {
    getdata(obj) {
      console.log(obj, 999);
      localStorage.setItem("type", obj.path);
      console.log(obj.path, 888);
    },
    go(path) {
      this.$router.push(path);
    },
    routerRefresh() {
      this.routerNew = false;
      console.log(this.routerNew, 777);
      this.$nextTick(() => {
        this.routerNew = true;
      });
    },
    backTop () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      const that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed

        if (document.documentElement.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 500)
  },


    // fetchData() {
    //   // let {page, pagesize, search} = this;
    //   goodslistApi.getlists(this.page, this.pagesize).then(res => {
    //     // console.log(res.data.data, 999);
    //     this.goodsData = res.data.data; //数据部分
    //     this.total = res.data.total; //设置总条数
    //     console.log(this.goodsData)
    //   });
    // },

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

  created() {
    // this.fetchData();
    goodslistApi.getlists(this.page, this.pagesize).then(res => {
      // console.log(res.data.data, 999);
      this.goodsData = res.data.data; //数据部分
      // this.total = res.data.total; //设置总条数
      console.log(this.goodsData, 999);
    });
  }
};
</script>

<style scoped lang="scss">
@import url("/src/assets/sass/public/vw.scss");
.my-swipe {
  .van-swipe-item {
    background: none !important;
    line-height: 175.781px !important;
  }
}
.scrolltop {
  position: fixed;
  bottom: 15%;
  right: 3%;
  z-index: 10;
  // display: none;
  width: 2.5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  border-radius: 100%;
  text-align: center;
  font-size: 0.42667rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
  .van-icon {
    padding: 0.45rem 0;
  }
}
.nav-header-top {
  position: fixed;
  width: 100%;
  // left: 0;
  // top: 0;
  // right: 0;
  // bottom: 0;
  z-index: 10;
}
.sort-list {
  padding: 5.3333%;
}
.van-search {
  background-color: rgba(255, 255, 255, 0);
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
  background-color: rgba(255, 255, 255, 0.6);
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
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.times-shoplist {
  padding: 0px 2.4%;
  height: 150px;
  margin-top: 0px;
  margin-bottom: 0px;
  .times-shop {
    padding: 0px 2.4%;
    background: rgb(255, 255, 255);
    height: 100%;
    border-radius: 15px 15px 0px 0px;
    .times-time {
      display: flex;
      align-items: center;
      padding-top: 2.4%;
    }
    .times-day {
      font-size: 11.25px;
      color: rgb(102, 102, 102);
      margin-right: 4px;
    }
  }
}
.newprice {
  color: rgb(242, 46, 0);
  font-size: 11.25px;
}
.oldprice {
  color: rgb(190, 190, 190);
  text-decoration: line-through;
  font-size: 11.25px;
}
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #ee0a24;
}
.block {
  display: inline-block;
  width: 22px;
  color: rgb(245, 93, 58);
  font-size: 12px;
  text-align: center;
  background-color: rgb(255, 230, 230);
}
.shopshow {
  padding-right: 2.4%;
  padding-bottom: 0px;
  padding-left: 2.4%;
  height: 167.344px;
  margin-top: 0px;
  margin-bottom: 3%;
  .shopshow-list {
    display: flex;
    height: 100%;
    width: 100%;
    overflow: hidden;
    flex-flow: row;
    border-radius: 0px 0px 15px 15px;
    .big-shopshow {
      width: 65.625%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .small-shopshow {
      width: 34.375%;
      height: 100%;
      line-height: 0;
      img {
        width: 100%;
        height: 50%;
      }
    }
  }
}
.f-shoplink {
  padding-right: 2.4%;
  padding-bottom: 0px;
  padding-left: 2.4%;
  margin-top: 0px;
  margin-bottom: 0px;
  .shoplink-img {
    display: flex;
    height: 100%;
    width: 100%;
    overflow: hidden;
    flex-wrap: wrap;
    border-radius: 15px 15px 0px 0px;
    img {
      width: 100%;
      height: 167.344px;
    }
  }
}
.s-shoplink {
  padding-right: 2.4%;
  padding-bottom: 0px;
  padding-left: 2.4%;
  margin-top: 0px;
  margin-bottom: 3%;
  div {
    display: flex;
    height: 100%;
    width: 100%;
    overflow: hidden;
    flex-wrap: wrap;
    border-radius: 0px 0px 15px 15px;
    img {
      width: 50%;
      height: 167.344px;
    }
  }
}
.t-shoplink {
  padding-right: 2.4%;
  padding-bottom: 0px;
  padding-left: 2.4%;
  margin-top: 3%;
  margin-bottom: 0px;
  div {
    display: flex;
    height: 100%;
    width: 100%;
    overflow: hidden;
    flex-wrap: wrap;
    border-radius: 15px 15px 0px 0px;
    img {
      width: 33.3333%;
      height: 167.344px;
    }
  }
}
.four-shoplink {
  padding-right: 2.4%;
  padding-bottom: 0px;
  padding-left: 2.4%;
  margin-top: 0px;
  margin-bottom: 3%;
  div {
    display: flex;
    height: 100%;
    width: 100%;
    overflow: hidden;
    flex-wrap: wrap;
    border-radius: 0px 0px 15px 15px;
    img {
      width: 25%;
      height: 139.23px;
    }
  }
}
.new-information {
  padding: 0px 2.4%;
  height: 63.75px;
  margin-top: 0px;
  margin-bottom: 0px;
  div {
    img {
      width: 20%;
      margin-right: 2.4%;
    }
  }
  ::v-deep .van-swipe__indicator {
    width: 0;
    height: 0;
  }
}

.goods-list-item {
  .goods-list-tabs {
    color: rgb(102, 102, 102);
    div {
      display: flex;
      flex-direction: column;
      width: 33.33%;
    }
    .active {
      color: rgb(0, 181, 168);
    }
  }
}
#goods-list-inf {
  //     width: 350px;
  // //   float: right;
  //   height: 200px;
  //   background: pink;
}
</style>