import {
  ADD_COUNTER,
  ADD_TO_CARY
} from "./mutations-types"
export default {
  //复杂的逻辑放到actions

  addCart(context, payload) {
    let oldProduct = null;
    //判断是否时旧商品
    // find 符合条件返回某个项
    for (const item of context.state.cartList) {
      if (item.iid === payload.iid) {
        oldProduct = item;
      }
    }
    //判断是否时旧商品
    if (oldProduct) {
      //旧商品数量加一
      context.commit(ADD_COUNTER, oldProduct);
    } else {
      //定义新商品数量为1，并将传过来的值赋值
      payload.count = 1;
      context.commit(ADD_TO_CARY, payload);
    }
  }
}
