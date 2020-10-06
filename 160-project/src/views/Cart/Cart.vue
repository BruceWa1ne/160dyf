<template>
  <div>
    <van-nav-bar
      title="购物车"
      left-text=""
      right-text="需求清单"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-notice-bar
      :scrollable="false"
      text="慧医卡，购买指定商品送健康豆，可抵现金使用！"
    />

    <!-- vant空状态 -->
    <van-empty
      v-show="isShow"
      description="购物车还是空的~"
      image="https://www.160dyf.com/Template/mobile/new/Static/images/flow/empty_cart.png"
    >
      <van-button round type="danger" class="bottom-button" @click="goto">
        马上逛逛
      </van-button>
    </van-empty>

    <!-- 商品信息 -->
    <div v-for="(item, index) in carts" :key="item.data[0]._id">
      <van-checkbox-group v-model="result" @change="onChecked">
        <van-row style="background-color: white;">
          <!-- 二级复选框 -->
          <van-col span="2" style="margin-top: 35px;">
            <van-checkbox checked-color="#00d2c3" :name="item"></van-checkbox
          ></van-col>
          <van-col span="22">
            <van-swipe-cell>
              <van-card
                :price="item.data[0].price * item.num"
                :desc="item.data[0].title"
                :title="item.data[0].title"
                :thumb="item.data[0].url"
                class="goods-card"
              >
                <template #num>
                  <van-stepper
                    v-model.number="item.num"
                    @change="onNum"
                    theme="round"
                    button-size="22"
                  />
                </template>
              </van-card>
              <template #right>
                <van-button
                  square
                  icon="delete"
                  type="danger"
                  @click="delGoods(item, index)"
                  class="delete-button"
                />
              </template>
            </van-swipe-cell>
          </van-col>
        </van-row>
      </van-checkbox-group>
    </div>

    <!-- vant提交订单栏 -->
    <van-submit-bar
      :price="total"
      decimal-length="2"
      button-color="#ffb400"
      suffix-label="不含运费"
      button-text="去结算"
    >
      <!-- 一级复选框 -->
      <van-checkbox v-model="checkAll" @click="onAll" checked-color="#00d2c3"
        >全选</van-checkbox
      >
    </van-submit-bar>
  </div>
</template>

<script>
import { Toast } from "vant";
import { Dialog } from "vant";
export default {
  data() {
    return {
      carts: [], // 添加到购物车的商品
      result: [], // 复选框选中的商品
      checkAll: false, // 全选状态
      total: 0, //总价
      isShow: false,
      num: 0,
      isLoading: false,
    };
  },

  components: {},

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("需求清单");
    },
    // 下拉刷新
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
      }, 1000);
    },

    onNum() {
      //商品数量发生变化时触发
      this.onChecked();
      localStorage.carts = JSON.stringify(this.carts);
    },
    onChecked() {
      //点击复选框选中商品并计算总价
      this.total = 0;
      this.result.map((item) => {
        this.total += item.data[0].price * 100 * item.num;
      });

      if (this.result.length == this.carts.length) {
        this.checkAll = true;
      } else {
        this.checkAll = false;
      }
    },

    onAll() {
      //点击全选按钮
      if (this.checkAll) {
        //如果为true的话全部选中，否则全不选
        this.result = this.carts;
        console.log(this.result);
      } else {
        this.result = [];
      }
    },

    delGoods(item, index) {
      //删除
      if (this.result.includes(item)) {
        this.$notify({ type: "danger", message: "删除前请取消选中" });
      } else {
        Dialog.confirm({
          message: "确认要删除宝贝吗？",
        })
          .then(() => {
            this.carts.splice(index, 1);
            this.checkAll = this.result.length == this.carts.length;
            localStorage.carts = JSON.stringify(this.carts);
          })
          .catch(() => {
            // on cancel
          });
      }
    },

    // 跳转详情页
    goto() {
      this.$router.push({
        path: "/sortlist",
      });
    },
  },

  created() {
    let carts = localStorage.carts;
    if (carts) {
      this.carts = JSON.parse(carts);
    }

    if (this.carts.length > 0) {
      //显示或隐藏空状态
      this.isShow = false;
    } else {
      this.isShow = true;
    }
  },

  watch: {
    // 监听购物车的商品
    carts: {
      deep: true,
      handler: function(val) {
        if (val.length > 0) {
          //显示或隐藏空状态
          this.isShow = false;
        } else {
          this.isShow = true;
          this.checkAll = false;
        }
      },
    },
  },
};
</script>

<style scoped>
.van-nav-bar /deep/ .van-icon {
  color: #00d6d5;
}
.van-nav-bar /deep/ .van-nav-bar__text {
  color: #00d6d5;
}
.van-nav-bar /deep/ .van-nav-bar__title {
  color: #00d6d5;
}
.van-notice-bar {
  background-color: #fff;
  padding: 0px 33px;
}
.van-checkbox {
  margin-left: 0.6875rem;
}
.goods-card {
  background-color: white;
}
.van-submit-bar {
  position: fixed;
  bottom: 3.125rem;
  left: 0;
}
.van-submit-bar__bar {
  padding: 0px 0px;
  justify-content: space-between;
}
.van-submit-bar__text span:nth-child(1) {
  font-size: 1.183rem;
  color: #ffb400;
}
.van-submit-bar__text {
  height: 3.125rem;
}
.van-submit-bar__suffix-label {
  display: flex;
  justify-content: flex-end;
}
.van-submit-bar__price {
  font-size: 1.183rem;
  color: #ffb400;
}

.van-button--round {
  width: 5.8rem;
  height: 3.125rem;
  border-radius: 0rem;
  font-size: 1.167rem;
}

.delete-button {
  height: 100%;
}

.bottom-button {
  width: 180px;
  height: 40px;
}
.van-cell__left-icon,
.van-cell__right-icon {
  font-size: 24px;
}
.van-card__price-currency {
  font-size: 20px;
  color: #ffb400;
}
.van-card__price-integer {
  font-size: 20px;
  color: #ffb400;
}
.van-card__price-decimal {
  font-size: 18px;
  color: #ffb400;
}
.van-empty {
  background-color: #f8f7f7;
}
.van-empty /deep/ .van-empty__image {
  width: 6.333rem;
  height: 6.333rem;
}
.van-empty /deep/ .van-empty__description {
  font-size: 20px;
}
.bottom-button {
  width: 22.2rem;
  height: 2.217rem;
}
.van-button--danger {
  background-color: #ef4f4f;
  border-radius: 3px;
}
.van-button__icon {
  font-size: 2rem;
}
.van-stepper--round /deep/ .van-stepper__plus {
  background-color: #00d6d5;
}
.van-stepper--round /deep/ .van-stepper__minus {
  color: #00d6d5;
  background-color: #fff;
  border: 1px solid #00d6d5;
}
</style>
