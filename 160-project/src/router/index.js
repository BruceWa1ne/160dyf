import Vue from 'vue';
import VueRouter from 'vue-router';
// 路由懒加载
let Home = () => import('../views/Home/Home.vue');
let List = () => import('../views/List/List.vue');
let Cart = () => import('../views/Cart/Cart.vue');
let Mine = () => import('../views/Mine/Mine.vue');
let Contact = () => import('../views/Contact/Contact.vue');
let Reg = () => import('../views/Reg/Reg.vue');
let Login = () => import('../views/Login/Login.vue');
let Category = () => import('../views/List/children/Category.vue');

//import HelloWorld from '@/components/HelloWorld'
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};
Vue.use(VueRouter);

// 路由表
const routes = [
    {
        path: '/home',
        component: Home,
        name: 'home',
    },
    // 重定向
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/list',
        component: List,
        name: 'list',
        children: [
            {
                path: 'pro',
                component: Category,
            },
            {
                path: 'family',
                component: Category,
            },
            {
                path: 'med',
                component: Category,
            },
            {
                path: 'care',
                component: Category,
            },
            {
                path: 'man',
                component: Category,
            },
            {
                path: 'mab',
                component: Category,
            },
            {
                path: 'interest',
                component: Category,
            },
            {
                path: 'cmed',
                component: Category,
            },
            {
                path: 'electrical',
                component: Category,
            },
            {
                path: 'digital',
                component: Category,
            },
            {
                path: 'beauty',
                component: Category,
            },
            {
                path: 'health',
                component: Category,
            },
            {
                path: 'cloth',
                component: Category,
            },
            {
                path: 'pet',
                component: Category,
            },
            {
                path: 'sproduct',
                component: Category,
            },
            {
                path: 'glasses',
                component: Category,
            },
        ],
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
    },
    {
        path: '/login',
        component: Login,
        name: 'login',
    },
];
// 注入实例
const router = new VueRouter({
    routes,
});

export default router;
