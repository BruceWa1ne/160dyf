import Vue from 'vue';
import VueRouter from 'vue-router';
// 路由懒加载
let Home = () => import('../views/Home.vue');
let List = () => import('../views/List.vue');
let Cart = () => import('../views/Cart.vue');
let Mine = () => import('../views/Mine.vue');
let Contact = () => import('../views/Contact.vue');
let Reg = () => import('../views/Reg.vue');
let Login = () => import('../views/Login.vue');
Vue.use(VueRouter);

// 路由表
const routes = [
    {
        path: '/home',
        component: Home,
        name: 'Home',
    },
    // 重定向
    {
        path: '/',
        redirect: '/home/:id',
    },
    {
        path: '/list',
        component: List,
        name: 'list',
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
