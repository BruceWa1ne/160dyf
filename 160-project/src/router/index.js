import Vue from "vue";
import VueRouter from "vue-router";
// 路由懒加载
let Home = () =>
    import ('../views/Home/Home.vue');
let List = () =>
    import ('../views/List/List.vue');
let Cart = () =>
    import ('../views/Cart/Cart.vue');
let Mine = () =>
    import ('../views/Mine/Mine.vue');
let Contact = () =>
    import ('../views/Contact/Contact.vue');
let Reg = () =>
    import ('../views/Reg/Reg.vue');
let Login = () =>
    import ('../views/Login/Login.vue');
let Goodslist = () =>
    import ('../views/Home/Goodslist.vue');
let Details = () =>
    import ('../views/Details/Details.vue');
let Sortlist = () =>
    import ('../views/Sortlist/Sortlist.vue');

//import HelloWorld from '@/components/HelloWorld'
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};
Vue.use(VueRouter);

// 路由表
const routes = [{
        path: '/home',
        component: Home,
        name: 'Home',
        children: [{
                path: "all",
                component: Goodslist,
            },
            {
                path: "sales",
                component: Goodslist,
            },
            {
                path: "affordable",
                component: Goodslist,
            },
        ]
    },
    // 重定向
    {
        path: '/',
        redirect: '/home',
        meta: {
            //元信息
            ischeck: false, //不需要路由守卫
        },

    },
    {
        path: '/list',
        component: List,
        name: 'list',
        meta: {
            //元信息
            ischeck: false, //不需要路由守卫
        },
    },
    {
        path: '/cart',
        component: Cart,
        name: 'cart',
    },
    {
        path: '/mine',
        component: Mine,
        name: 'mine',
    },
    {
        path: '/contact',
        component: Contact,
        name: 'contact',
    },
    {
        path: '/reg',
        component: Reg,
        name: 'reg',
        meta: {
            //元信息
            ischeck: false, //不需要路由守卫
        },

    },
    {
        path: '/login',
        component: Login,
        name: 'login',
        meta: {
            //元信息
            ischeck: false, //不需要路由守卫
        },
    },
    {
        path: '/details',
        component: Details,
        name: 'details',
        meta: {
            //元信息
            ischeck: false, //不需要路由守卫
        },
    },
    {
        path: '/sortlist',
        component: Sortlist,
        name: 'sortlist',
        meta: {
            //元信息
            ischeck: false, //不需要路由守卫
        },
    },
];
// 注入实例
const router = new VueRouter({
    routes,
});

export default router;