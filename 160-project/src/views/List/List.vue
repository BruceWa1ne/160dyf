<template>
    <div>
        <div style="display:flex">
            <!-- 一级分类 -->
            <div class="leftNav">
                <!-- 侧边导航 -->
                <van-sidebar v-model="activeKey">
                    <van-sidebar-item title="item.name" />
                </van-sidebar>
            </div>
            <!-- 二级分类 -->
            <div class="rightNav">
                <!-- 右侧导航 -->
                <dl>
                    <span class="twoNavimg">
                        <van-image width="100%" height="100%" fit="fill" src="itm.covImg" />
                    </span>
                    <dt>
                        <a href="###">itm.title</a>
                    </dt>
                    <dd>
                        <div class="fenimg">
                            <div class="fen">
                                <a href="###">itm.name</a>
                            </div>
                        </div>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
import categoryAPi from '../../api/categoryAPi';
export default {
    data() {
        return {
            leftList: [],
            rightList: [],
            activeKey: 0,
            currentPath: '/list',
        };
    },

    components: {},

    methods: {},

    mounted() {
        categoryAPi.getCategory(this.page, this.pagesize).then(res => {
            console.log(res.data.data, 999);
        });
    },

    // created() {
    //     this.$set(this.newList, 0, this.list[0]);
    //     console.log(this.newList);
    //     let path = this.$route.path;
    //     this.list.forEach((item, index) => {
    //         if (item.path == path) {
    //             this.activeKey = index;
    //         }
    //     });
    // },
    // watch: {
    //     activeKey: function() {
    //         this.$set(this.newList, 0, this.list[this.activeKey]);
    //     },
    // },
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
dl {
    height: 100%;
    /* overflow-y: scroll; */
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
