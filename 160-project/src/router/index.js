import Vue from "vue";
import VueRouter from "vue-router";
// 路由懒加载
let Home = () => import("../views/Home/Home.vue");
let List = () => import("../views/List/List.vue");
let Cart = () => import("../views/Cart/Cart.vue");
let Mine = () => import("../views/Mine/Mine.vue");
let Contact = () => import("../views/Contact/Contact.vue");
let Reg = () => import("../views/Reg/Reg.vue");
let Login = () => import("../views/Login/Login.vue");

//import HelloWorld from '@/components/HelloWorld'
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
Vue.use(VueRouter);

// 路由表
const routes = [
  {
    path: "/home",
    component: Home,
    name: "home",
  },
  // 重定向
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/list",
    component: List,
    name: "list",
  },
  {
    path: "/cart",
    component: Cart,
    name: "cart",
  },
  {
    path: "/mine",
    component: Mine,
    name: "mine",
  },
  {
    path: "/contact",
    component: Contact,
    name: "contact",
  },
  {
    path: "/reg",
    component: Reg,
    name: "reg",
  },
  {
    path: "/login",
    component: Login,
    name: "login",
  },
];
// 注入实例
const router = new VueRouter({
  routes,
});

export default router;
