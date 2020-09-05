import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

import toast from "./components/common/toast"
Vue.config.productionTip = false;
//创建事件走线
Vue.prototype.$bus = new Vue();
//安装插件
Vue.use(toast)
Vue.use(ElementUI)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
