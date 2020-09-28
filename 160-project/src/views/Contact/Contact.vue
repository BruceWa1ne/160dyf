<template>
    <div>
        <!-- 顶部 -->
        <van-row class="contact_header" type="flex" justify="space-around" align="center">
            <van-col span="14">
                <div class="header_title">
                    <span @click="reback">
                        健康160平台线上客服
                    </span>
                </div>
            </van-col>
            <van-col span="5">
                <van-button class="headerBtn" color="#fff" plain type="info" size="small">
                    人工客服
                </van-button>
            </van-col>
        </van-row>
        <!-- 输入框 -->
        <van-field v-model="sms" center clearable placeholder="请直接输入您要谘询的事项并发送。">
            <template #button>
                <van-button size="small" round color="#57c7d4" type="primary">发送</van-button>
            </template>
        </van-field>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sms: '',
        };
    },

    components: {},

    methods: {
        reback() {
            this.$router.go(-1);
        },
    },
};
</script>

<style scoped>
.contact_header {
    height: 2.94rem;
    background: #57c7d4;
}
.header_title {
    color: #fff;
}
.headerBtn {
    width: 4.38rem;
    height: 1.7rem;
    font-size: 12px;
    background: #57c7d4;
}
.van-field {
    background: #f5f5f5;
    position: fixed;
    bottom: 3.125rem;
    left: 0;
}
.van-field /deep/ .van-field__control {
    border: 1px solid #f5f5f5;
    background-color: #fff;
    border-radius: 20px;
    height: 2.5rem;
    font-size: 14px;
}
.van-field /deep/ .van-button {
    width: 2.969rem;
    height: 1.75rem;
    font-size: 14px;
}
</style>
