import VueRouter from "vue-router";
import Vue from "vue";

const home = () => import("../views/home/home");
const cart = () => import("../views/cart/cart");
const cartgory = () => import("../views/cartgory/cartgory");
const profile = () => import("../views/profile/profile");
const Detail = () => import("../views/detail/Detail");
// 1/安装插件
Vue.use(VueRouter);
const routes = [{
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: home
  },
  {
    path: "/cartgory",
    component: cartgory
  },
  {
    path: "/profile",
    component: profile
  },
  {
    path: "/cart",
    component: cart
  },
  {
    path: "/detail",
    component: Detail
  }


];

const router = new VueRouter({
  routes
});
export default router;
