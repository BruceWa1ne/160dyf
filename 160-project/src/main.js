import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  Button,
  Tabbar,
  TabbarItem,
  Loading,
  NavBar,
  NoticeBar,
  Empty,
  PullRefresh,
  Checkbox,
  CheckboxGroup,
  Col,
  Row,
  SwipeCell,
  Card,
  Stepper,
  SubmitBar,
  Search,
  Icon,
  Swipe,
  SwipeItem,
  Image as VanImage,
  Grid,
  GridItem,
  Tag,
  CountDown,
  Field,
  Sidebar,
  SidebarItem,
  Cell,
  CellGroup,
  Uploader,
  Form,
  Divider,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
} from "vant";
Vue.use(Button);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Loading);
Vue.use(NavBar);
Vue.use(NoticeBar);
Vue.use(Empty);
Vue.use(PullRefresh);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Col);
Vue.use(Row);
Vue.use(SwipeCell);
Vue.use(Card);
Vue.use(Stepper);
Vue.use(SubmitBar);
Vue.use(Search);
Vue.use(Icon);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(VanImage);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Tag);
Vue.use(CountDown);
Vue.use(Field);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Uploader);
Vue.use(Form);
Vue.use(Divider);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
// 消息提示的环境配置，是否为生产环境：
// false 开发环境：Vue会提供很多警告来方便调试代码。
// true 生产环境：警告却没有用，反而会增加应用的体积
Vue.config.productionTip = process.env.NODE_ENV === "production";

//引入md5加密插件
import md5 from "js-md5";
Vue.prototype.$md5 = md5;

//路由守卫
import "./permission";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
