<template>
    <!-- 底部菜单 -->
    <div>
        <van-tabbar v-model="active" active-color="#00d6d5">
            <van-tabbar-item
                :icon="item.icon"
                :badge="item.count"
                v-for="item in list"
                :key="item.id"
                @click="move(item.path)"
            >
                {{ item.name }}
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            currentPath: '/home',
            list: [
                {
                    id: 1,
                    name: '首页',
                    icon: 'wap-home-o',
                    path: '/home',
                },
                {
                    id: 2,
                    name: '咨询',
                    icon: 'chat-o',
                    path: '/contact',
                },
                {
                    id: 3,
                    name: '分类',
                    icon: 'apps-o',
                    path: '/list',
                },
                {
                    id: 4,
                    name: '购物车',
                    icon: 'shopping-cart-o',
                    path: '/cart',
                    count: 1,
                },
                {
                    id: 5,
                    name: '我的',
                    icon: 'contact',
                    path: '/mine',
                },
            ],
        };
    },

    components: {},

    methods: {
        move(path) {
            this.$router.push(path);
        },
    },

    watch: {
        // 监听路由对象
        $route: {
            deep: true,
            handler(newRoute) {
                let arr = ['home', 'contact', 'list', 'cart', 'mine'];
                let index = arr.indexOf(this.$route.name);
                if (index >= 0) {
                    this.active = index;
                } else {
                    this.active = 0;
                }
                this.currentPath = newRoute.path;
            },
        },
    },
};
</script>

<style scoped>
@import '../../assets/sass/public/common.scss';
</style>
