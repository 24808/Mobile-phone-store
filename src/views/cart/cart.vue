<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <!-- 商品的列表 -->
    <cart-list></cart-list>
    <!-- 底部的汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>
<script>
import NavBar from "./../../components/common/navbar/NavBar";
import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";
import { mapGetters } from "vuex";
export default {
  name: "cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar,
  },
  computed: {
    // cartlength() {
    //   // return this.$store.state.getters.cartLength;
    //   return this.$store.getters.cartLength;
    // },
    //引入vuex的mapGetters  将vuex的getters转成组件的计算属性，可以直接使用
    // ...mapGetters(["cartLength"]),
    //2自定义名字
    ...mapGetters({
      length: "cartLength",
    }),
  },
};
</script>
<style scoped>
.nav-bar {
  background: var(--color-tint);
  color: #fff;
  z-index: 2;
  /* font-weight: 700; */
}
</style>
