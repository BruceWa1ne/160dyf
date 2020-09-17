import Vue from 'vue';
import VueRouter from 'vue-router';
let Home = () => import('../views/Home.vue');
let About = () => import('../views/About.vue');

Vue.use(VueRouter);

// 路由表
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: About,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
