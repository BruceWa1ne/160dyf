<template>
  <!-- 头部导航栏 -->
  <div id="details">
    <div class="details-nav">
      <van-nav-bar title="商品详情" left-arrow @click-left="onClickLeft">
        <template #right>
          <van-icon
            name="shopping-cart-o"
            size="22"
            color="black"
            @click="go('/cart')"
          />
          <van-icon name="ellipsis" size="22" color="black" @click="showCont" />
        </template>
      </van-nav-bar>
      <div v-if="show" class="details-header-list">
        <div class="triangle">
          <h2 class="icon-arrow"></h2>
        </div>
        <ul>
          <li>
            <van-icon name="wap-home-o" size="18" />
            <a href="#/home">首页</a>
          </li>
          <li>
            <van-icon name="bars" size="18" />
            <a href="#/list">分类</a>
          </li>
          <li>
            <van-icon name="cart-o" size="18" />
            <a href="#/cart">购物车</a>
          </li>
          <li>
            <van-icon name="user-o" size="18" />
            <a href="#/mine">我的</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 轮播 -->
    <div v-for="goodsdata in details" :key="goodsdata.id">
      <div class="details-content">
        <van-swipe class="my-swipe" indicator-color="#f00">
          <van-swipe-item>
            <van-image :src="goodsdata.url" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 商品标题 -->
      <div class="details-title">
        <span class="goods-name">{{ goodsdata.title }}</span>
      </div>
      <div class="details-attached">
        <div class="attached">适应症：治疗男性勃起功能障碍。</div>
      </div>
      <div class="details-price">
        <div class="goods-prices">
          <span>¥ {{ goodsdata.price }}</span>
          <span>药房价格</span>
        </div>
      </div>
    </div>
    <van-divider />
    <div class="details-watch">
      <div>
        <span></span>
        看了又看
        <span></span>
      </div>
      <div></div>
    </div>
    <van-divider />
    <div class="details-procedure">
      <div>处方药处理流程</div>
      <div
        class="clearfix"
        style="padding-top: 0.56667rem;
    padding-bottom: 0.56667rem;"
      >
        <div class="pr5 fl w-20">
          <span
            class="bg-red"
            style="padding-top: .4em;width: 27px;height: 27px; "
            >1</span
          >
          <p class="c-red">点击“需求登记”</p>
        </div>
        <div class="pr5 fl w-20">
          <span
            class="bg-green"
            style="padding-top: .4em;width: 27px;height: 27px;"
            >2</span
          >
          <p class>确定药品信息</p>
        </div>
        <div class="pr5 fl w-20">
          <span
            class="bg-green"
            style="padding-top: .4em;width: 27px;height: 27px;"
            >3</span
          >
          <p class>登记个人信息</p>
        </div>
        <div class="pr5 fl w-20">
          <span
            class="bg-green"
            style="padding-top: .4em;width: 27px;height: 27px;"
            >4</span
          >
          <p class>药师审核</p>
        </div>
        <div class="fl w-20">
          <span
            class="bg-green"
            style="padding-top: .4em;width: 27px;height: 27px;"
            >5</span
          >
          <p class>药房配送</p>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <div class="details-footer">
      <van-goods-action>
        <van-goods-action-icon
          icon="wap-home-o"
          text="首页"
          @click="go('/home')"
        />
        <van-goods-action-icon
          icon="chat-o"
          text="咨询"
          @click="go('/contact')"
        />
        <van-goods-action-icon
          icon="cart-o"
          text="购物车"
          @click="go('/cart')"
        />
        <van-goods-action-button
          type="warning"
          @click="addCarts"
          text="加入购物车"
        />
        <van-goods-action-button
          type="danger"
          text="立即购买"
          @click="onClickButton"
        />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import goodsDetailsApi from "../../api/detailAPi";
import { Toast } from "vant";
export default {
  data() {
    return {
      checked: true,
      show: false,
      details: [], // 接收服务器传回的商品
      carts: [], // 购物车商品
    };
  },

  components: {},

  methods: {
    go(path) {
      //编程式导航
      this.$router.push(path);
    },
    onSubmit(values) {
      console.log("submit", values);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    showCont: function() {
      this.show = !this.show;
    },
    onClickIcon() {
      // Toast('点击图标');
    },
    onClickButton() {
      Toast("购买成功");
    },
    // 加入购物车
    addCarts() {
      Toast.success("加入购物车成功");
      let rel = true;
      this.carts.map((item) => {
        if (item.data.id == this.details[0]._id) {
          item.num++;
          rel = false;
        }
      });
      if (rel) {
        this.carts.push({
          data: this.details,
          num: 1,
        });
      }
      localStorage.carts = JSON.stringify(this.carts);
    },
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
    let carts = localStorage.carts;
    if (carts) {
      this.carts = JSON.parse(carts);
    }
  },

  mounted() {
    let gid = this.$route.query.id;
    // console.log(gid);
    goodsDetailsApi.getDetails(gid).then((res) => {
      this.details = res.data.data;
      // console.log(this.details[0]._id);
    });
  },
};
</script>

<style lang="scss" scoped>
.details-nav {
  position: fixed;
  width: 100%;
  z-index: 10;
  .van-nav-bar {
    .van-icon {
      margin-left: 0.5rem;
    }
  }
}
.details-header-list {
  width: 30%;
  float: right;
  right: 1rem;
  overflow: hidden;
  position: fixed;
  margin-top: -1rem;
  z-index: 9999999;
  .triangle {
    width: 100%;
    height: 0.533333rem;
    .icon-arrow {
      width: 0;
      height: 0;
      border-style: solid;
      border-color: transparent transparent rgba(46, 45, 45, 0.9);
      border-width: 0.2703rem;
      -webkit-transition: 0.6s;
      transition: 0.6s;
      float: right;
      margin-right: 0.2703rem;
    }
  }
  ul {
    width: 100%;
    overflow: hidden;
    background-color: rgba(46, 45, 45, 0.9);
    border-radius: 0.053333rem;
    position: relative;
    li {
      width: 100%;
      height: 2rem;
      border-bottom: 0.026667rem solid #959595;
      color: #fff;
      line-height: 2rem;
      .van-icon {
        line-height: 2rem;
        padding: 0 0.5rem;
      }
      a {
        position: absolute;
        // line-height: 1.06667rem;
        // height: 1.06667rem;
        color: #fff;
      }
    }
  }
}
.details-content {
  padding-top: 46px;
  .my-swipe {
    .van-swipe-item {
      height: 23.438rem;
      color: #fff;
      font-size: 20px;
      line-height: 150px;
      text-align: center;
      background-color: #39a9ed;
      .van-image {
        width: 100%;
        height: 100%;
      }
    }
    ::v-deep .van-swipe__indicator {
      width: 8px;
      height: 8px;
    }
  }
}

.van-divider {
  margin: 8px 0;
}
.details-title {
  padding: 1.2rem;
  background: #fff;
}
.details-attached {
  padding: 0.6rem 1.2rem;
  background: #fff;
  .attached {
    font-size: 0.5rem;
    color: #666;
  }
}
.details-price {
  padding: 1.2rem;
  background: #fff;
  .goods-prices {
    span:nth-of-type(1) {
      color: #f22e00 !important;
      font-size: 1.5rem;
    }
    span:nth-of-type(2) {
      padding-right: 0.33333rem;
      padding-left: 0.33333rem !important;
      margin-left: 0.33333rem;
      background-color: #ff9f4f !important;
      color: #fff !important;
      font-size: 0.84rem !important;
    }
  }
}
.details-watch {
  padding: 1.2rem 1.2rem 3.5rem 1.2rem;
  background: #fff;
  div:nth-of-type(1) {
    padding-right: 0.4rem;
    padding-left: 0.4rem;
    color: #535353;
    font-size: 1.2rem !important;
    span:nth-of-type(1) {
      height: 23px;
      width: 3px;
      background: #f23015;
      position: absolute;
      display: block;
      margin-left: -8px;
    }
  }
}
.details-procedure {
  padding: 0.46rem 0.64rem;
  background-color: #fff;
  div:nth-of-type(1) {
    color: #333 !important;
    font-size: 0.82667rem !important;
  }
  div:nth-of-type(2) {
    text-align: center;
    div {
      span {
        padding-top: 0.4em;
        width: 27px;
        height: 27px;
        display: inline-block;
        padding: 0.4rem 0.4rem;
        min-width: 8px;
        border-radius: 18px;
        color: #fff;
        line-height: 1.2;
        text-align: center;
        font-size: 12px;
        vertical-align: middle;
      }
      p {
        margin-top: 0.33333rem;
        font-size: 0.64rem !important;
      }
    }
  }
}
</style>
