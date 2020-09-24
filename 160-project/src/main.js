import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";
import { Field } from "vant";

Vue.use(Vant);
Vue.use(Field);
// 消息提示的环境配置，是否为生产环境：
// false 开发环境：Vue会提供很多警告来方便调试代码。
// true 生产环境：警告却没有用，反而会增加应用的体积
Vue.config.productionTip = process.env.NODE_ENV === 'production';

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");