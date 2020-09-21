<template>
    <div>
        <div class="Category_box">
            <!-- 左侧导航 -->
            <div class="oneNav">
                <van-sidebar v-model="active">
                    <van-sidebar-item
                        :title="item.name"
                        v-for="item in list"
                        :key="item.id"
                        :to="item.path"
                        @click.native="getdata(item)"
                    />
                </van-sidebar>
            </div>
            <!-- 右侧导航 -->
            <div class="twoNav">
                <dl>
                    <span class="twoNavimg">
                        <van-image width="100%" height="100%" fit="fill" :src="newicon" />
                    </span>
                    <dt><a href="###">抗感染类</a></dt>
                    <dd>
                        <div class="fenimg">
                            <div class="fen">
                                <a href="###">抗生素</a>
                                <a href="###">抗生素</a>
                                <a href="###">抗生素</a>
                                <a href="###">抗生素</a>
                                <a href="###">抗生素</a>
                            </div>
                        </div>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            currentPath: '/list/pro',
            list: [
                {
                    id: 1,
                    name: '专科用药',
                    path: '/list/pro',
                },
                {
                    id: 2,
                    name: '家庭用药',
                    path: '/list/family',
                },
                {
                    id: 3,
                    name: '医疗器械',
                    path: '/list/med',
                },
                {
                    id: 4,
                    name: '营养保健',
                    path: '/list/care',
                },
                {
                    id: 5,
                    name: '男科用药',
                    path: '/list/man',
                },
                {
                    id: 6,
                    name: '母婴乐园',
                    path: '/list/mab',
                },
                {
                    id: 7,
                    name: '计生情趣',
                    path: '/list/interest',
                },
                {
                    id: 8,
                    name: '中药滋补',
                    path: '/list/cmed',
                },
                {
                    id: 9,
                    name: '健康家电',
                    path: '/list/electrical',
                },
                {
                    id: 10,
                    name: '手机数码',
                    path: '/list/digital',
                },
                {
                    id: 11,
                    name: '美妆个护',
                    path: '/list/beauty',
                },
                {
                    id: 12,
                    name: '健康生活',
                    path: '/list/health',
                },
                {
                    id: 13,
                    name: '服饰鞋袜',
                    path: '/list/cloth',
                },
                {
                    id: 14,
                    name: '宠物生活',
                    path: '/list/pet',
                },
                {
                    id: 15,
                    name: '服务商品',
                    path: '/list/sproduct',
                },
                {
                    id: 16,
                    name: '隐形眼镜',
                    path: '/list/glasses',
                },
            ],
            newicon: require('../../assets/img/Category/pro.jpg'),
        };
    },

    components: {},

    methods: {
        getdata(obj) {
            localStorage.setItem('type', obj.name);
        },
    },
};
</script>

<style scoped>
.oneNav {
    width: 25%;
    height: 100%;
    overflow-y: scroll;
    float: left;
}
.twoNav {
    width: 75%;
    height: 100%;
    margin: auto;
    overflow-y: scroll;
    float: right;
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
