import Vue from "vue"
import Vuex from "vuex"
//安装插件
Vue.use(Vuex)
// 2.创建store对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state, payload) {
      let oldProduct = null;
      //判断是否时旧商品
      // find 符合条件返回某个项
      for (const item of state.cartList) {
        if (item.iid === payload.iid) {
          oldProduct = item

        }
      }
      //判断是否时旧商品
      if (oldProduct) {
        //旧商品数量加一
        oldProduct.count += 1
        console.log(oldProduct.count);
      } else {
        //定义新商品数量为1，并将传过来的值赋值
        payload.count = 1
        state.cartList.push(payload)
        console.log(state.cartList);

      }
    }
  }
})
export default store
