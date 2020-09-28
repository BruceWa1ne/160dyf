import { setToken, setUser, getToken, getUser, logOut } from '@/utils/auth';
import userAPI from '@/api/userAPI';
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
    },

    actions: {
        // 登录功能
        login(context, { username, password, checked }) {
            return new Promise((resolve, reject) => {
                userAPI
                    .login(username, password)
                    .then(res => {
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
                            // 更新state状态
                            context.commit('update');
                        }
                        resolve(res);
                    })
                    .catch(err => {
                        // 失败回调
                        reject(err);
                    });
            });
        },
    },
};
