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
        <van-notice-bar :scrollable="false" text="慧医卡，购买指定商品送健康豆，可抵现金使用！" />

        <!-- vant空状态 -->
        <van-empty
            v-show="isShow"
            description="购物车还是空的~"
            image="https://www.160dyf.com/Template/mobile/new/Static/images/flow/empty_cart.png"
        >
            <van-button round type="danger" class="bottom-button">
                马上逛逛
            </van-button>
        </van-empty>

        <div v-for="shop in goodslist" :key="shop.id">
            <!-- 店铺信息 -->
            <van-cell :title="shop.title" icon="shop-o" />
            <van-row style="background-color: white;" v-for="good in shop.goods" :key="good.gid">
                <van-col span="2" style="margin-top: 35px;">
                    <!-- 二级复选框 -->
                    <van-checkbox
                        checked-color="#00d2c3"
                        name="item"
                        v-model="good.ischecked"
                    ></van-checkbox>
                </van-col>
                <!-- 商品信息 -->
                <van-col span="22">
                    <van-swipe-cell>
                        <van-card
                            :price="good.price * good.num"
                            :desc="good.norms"
                            :title="good.title"
                            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                            class="goods-card"
                        >
                            <template #num>
                                <van-stepper v-model="good.num" />
                            </template>
                        </van-card>
                        <template #right>
                            <van-button square icon="delete" type="danger" class="delete-button" />
                        </template>
                    </van-swipe-cell>
                </van-col>
            </van-row>
        </div>

        <!-- vant提交订单栏 -->
        <van-submit-bar
            :price="totalPrice()"
            decimal-length="2"
            button-color="#ffb400"
            suffix-label="不含运费"
            button-text="去结算"
        >
            <!-- 一级复选框 -->
            <van-checkbox v-model="checkAll" checked-color="#00d2c3">全选</van-checkbox>
        </van-submit-bar>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    data() {
        return {
            goodslist: [
                {
                    id: 1,
                    title: '茶叶阁',
                    goods: [
                        {
                            gid: 1,
                            title: '红茶',
                            norms: '默认',
                            size: 400,
                            price: 320,
                            stock: 18,
                            num: 1,
                            total: 320,
                            ischecked: false,
                        },
                        {
                            gid: 2,
                            title: '绿茶',
                            norms: '默认',
                            size: 400,
                            price: 300,
                            stock: 6,
                            num: 1,
                            total: 300,
                            ischecked: false,
                        },
                    ],
                },
                {
                    id: 2,
                    title: '柳螺香',
                    goods: [
                        {
                            gid: 1,
                            title: '好欢螺蛳粉',
                            norms: '默认',
                            size: 400,
                            price: 108,
                            stock: 10,
                            num: 1,
                            total: 108,
                            ischecked: false,
                        },
                    ],
                },
            ], //添加到购物车的商品
            // checkAll: false, //全选的状态
            total: 0, //总价
            isShow: false,
            num: 0,
        };
    },

    components: {},

    methods: {
        onClickLeft() {
            Toast('返回');
        },
        onClickRight() {
            Toast('按钮');
        },
        // 勾选计算总价
        totalPrice() {
            let prices = 0;
            this.goodslist.forEach(item => {
                item.goods.forEach(good => {
                    if (good.ischecked) {
                        prices += good.price * good.num * 100;
                    }
                });
            });
            return prices;
        },
    },

    // 计算属性
    computed: {
        checkAll: {
            // 三级控制一级
            get() {
                let arr = [];
                this.goodslist.forEach(item => {
                    let res = item.goods.every(good => good.ischecked == true);
                    arr.push(res);
                });
                return arr.every(item => item == true);
            },
            set(val) {
                // 一级控制三级
                this.goodslist.forEach(item => {
                    item.goods.forEach(good => {
                        good.ischecked = val;
                    });
                });
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
</style>
