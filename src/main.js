import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VuLazyLoad from "vue-lazyload";
//解决移动端延迟
import fastclick from "fastclick";
//封装的弹出层插件
import toast from "./components/common/toast";
//解决移动端延迟
fastclick.attach(document.body); //附加到body标签
Vue.config.productionTip = false;
//创建事件走线
Vue.prototype.$bus = new Vue();
//使用懒加载的插件
Vue.use(VuLazyLoad, {
  loading: require("./assets/img/common/placeholder.png")
});
//安装插件
Vue.use(toast);
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
