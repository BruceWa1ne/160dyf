/*
 前置路由钩子函数
 to ：即将要进入的目标路由对象
 from ：当前导航正要离开的路由对象
 next : 调用该方法，进入目标路由
*/
import router from "./router";
import { getToken } from "./utils/auth";
import userAPI from "./api/userAPI";
import store from "@/store/index";

router.beforeEach((to, from, next) => {
  if (to.meta.ischeck != false) {
    //需要路由守卫
    //判断是否有token
    let token = store.state.user.token;
    if (token) {
      //有token
      store.dispatch("verify", token).then((res) => {
        // console.log(res, 52);
        if (res.data.flag) {
          //校验通过
          next();
        } else {
          //校验不通过，跳转登录页
          router.push("/login");
        }
      });
    } else {
      //没有token,跳转登录页
      router.push("/login");
    }
  } else {
    //不需要守卫(权限校验)
    next();
  }
});
