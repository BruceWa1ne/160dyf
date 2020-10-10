import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

let Login = () =>
    import ('../views/login');
let Reg = () =>
    import ('../views/reg');
let Layout = () =>
    import ('../views/layout');
let Users = () =>
    import ('../components/users');
let Goods = () =>
    import ('../components/goods');
let Orders = () =>
    import ('../components/orders');
let Comments = () =>
    import ('../components/comments');
const routes = [{
        path: "/login",
        component: Login,
        name: "login",
        meta: {
            //元信息
            ischeck: false, //不需要路由守卫
        },
    },
    {
        path: "/reg",
        component: Reg,
        name: "reg",
        meta: {
            //元信息
            ischeck: false, //不需要路由守卫
        },
    },
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: "/home",
        component: Layout,
        name: "home",
        redirect: '/home/users',
        children: [{
                path: 'users',
                component: Users
            },
            {
                path: 'goods',
                component: Goods
            },
            {
                path: 'orders',
                component: Orders
            },
            {
                path: 'comments',
                component: Comments
            },
        ]
    },
];

const router = new VueRouter({
    mode : 'history', // 历史模式
    routes
});

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default router;