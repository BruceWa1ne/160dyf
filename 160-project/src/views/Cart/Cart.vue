<template>
  <div>
    <van-nav-bar
      title="购物车"
      left-text="返回"
      right-text="需求清单"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-notice-bar
      :scrollable="false"
      text="慧医卡，购买指定商品送健康豆，可抵现金使用！"
    />
    <!-- 商品信息 -->
    <!-- vant空状态 -->
    <van-empty
      v-show="isShow"
      description="购物车目前还没有商品"
      image="https://img.yzcdn.cn/vant/custom-empty-image.png"
    >
      <van-button round type="danger" class="bottom-button">
        去购物
      </van-button>
    </van-empty>

    <div>
      <!-- vant复选框组 -->
      <!-- vant布局 -->
      <!-- vant滑动单元格 -->
      <!-- vant商品卡片 -->
      <!-- vant步进器 -->
      <van-checkbox-group v-model="result">
        <van-row style="background-color: white;">
          <van-col span="2" style="margin-top: 35px;">
            <van-checkbox name="item"></van-checkbox>
          </van-col>

          <van-col span="22">
            <van-swipe-cell>
              <van-card
                price="14"
                desc="商品描述"
                title="商品名称"
                thumb="item.data.mainPic"
                class="goods-card"
              >
                <template #num>
                  <van-stepper v-model="num" />
                </template>
              </van-card>

              <template #right>
                <van-button
                  square
                  text="删除"
                  type="danger"
                  class="delete-button"
                />
              </template>
            </van-swipe-cell>
          </van-col>
        </van-row>
      </van-checkbox-group>
    </div>

    <!-- vant提交订单栏 -->
    <van-submit-bar price="total" button-text="提交订单">
      <van-checkbox v-model="checkedAll">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      carts: [], //添加到购物车的商品
      result: [], //所有复选框选中的商品
      checkedAll: false, //全选的状态
      total: 0, //总价
      isShow: true,
      num: 0,
    };
  },

  components: {},

  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
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
  justify-content: space-between;
}
.delete-button {
  height: 100%;
}

.bottom-button {
  width: 180px;
  height: 40px;
}
</style>
