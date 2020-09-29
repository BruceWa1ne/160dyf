import { setToken, setUser, getToken, getUser, logOut } from "@/utils/auth";
import userAPI from "@/api/userAPI";
import { Dialog } from "vant";
import router from "@/router/index";
export default {
  /*
    用户登录状态(token,username)
    1.登录 2.显示用户名 3.退出
    */
  state: {
    token: getToken(),
    username: getUser(),
  },

  mutations: {
    // 更新状态
    update(state) {
      state.token = getToken();
      state.username = getUser();
    },

    clear(state) {
      state.token = "";
      state.username = "";
    },
  },

  actions: {
    // 登录功能
    login(context, { username, password, checked }) {
      return new Promise((resolve, reject) => {
        userAPI
          .login(username, password)
          .then((res) => {
            // 成功回调
            if (res.data.flag) {
              if (checked) {
                // 保留七天
                setToken(res.data.token, 7);
                setUser(username, 7);
              } else {
                //保持会话级别
                setToken(res.data.token);
                setUser(username);
              }
              Dialog.alert({
                theme: "round-button",
                message: "登录成功!",
              }).then(() => {
                //跳转到首页
                router.push("/");
              });
              // 更新state状态
              context.commit("update");
            } else {
              //登录失败
              Dialog.alert({
                theme: "round-button",
                message: "登录失败!",
              }).then(() => {
                // on close
              });
            }
          })
          .catch((err) => {
            // 失败回调
            reject(err);
          });
      });
    },

    // 退出登录
    logOuts({ commit }) {
      logOut();
      Dialog.alert({
        theme: "round-button",
        message: "退出成功!",
      }).then(() => {
        // 跳转到首页
        router.push("/home");
        // 清空本地状态
        commit("clear");
      });
    },

    // token校验
    verify({ commit }, token) {
      return new Promise((resolve, reject) => {
        userAPI
          .checkToken(token)
          .then((res) => {
            // 校验通过
            resolve(res);
          })
          .catch((err) => {
            // 校验失败
            reject(err);
          });
      });
    },
  },
};
