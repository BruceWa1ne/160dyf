import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//引入md5加密插件
import md5 from "js-md5";
Vue.prototype.$md5 = md5;

import "./permission";
Vue.config.productionTip = process.env.NODE_ENV === 'production';

new Vue({
    router,
    // store,
    render: h => h(App)
}).$mount("#app");