<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button" @click.native="checkClick" :is-checked="isSelectAll"></check-button>
      <span>全选</span>
    </div>
    <div class="Price">合计:{{totalPrice}}</div>
    <div class="caclulate">去计算({{checkLength}})</div>
  </div>
</template>
<script>
import CheckButton from "./../../../components/content/checkButton/CheckButton";
import { mapGetters } from "vuex";
export default {
  name: "CartBottomBar",
  components: {
    CheckButton,
  },
  methods: {
    checkClick() {
      //全选和全不选
      var den = !this.isSelectAll;
      //取反
      this.cartList.map((x) => {
        x.checked = den;
      });
    },
  },
  computed: {
    //将vuex的getters转为模块的计算属性
    ...mapGetters(["cartList"]),
    totalPrice() {
      return this.cartList
        .filter((x) => {
          return x.checked;
        })
        .reduce((x, y) => {
          console.log(x);
          return x + y.price * y.count;
        }, 0)
        .toFixed(2); //保留两位小数
    },
    checkLength() {
      return this.cartList.filter((x) => {
        return x.checked;
      }).length;
    },
    isSelectAll() {
      //全选按钮的选中和不选中
      if (this.cartList.length == 0) {
        return false;
      } else
        return this.cartList.every((x) => {
          return x.checked;
        });
    },
  },
};
</script>
<style scoped>
.bottom-bar {
  background: #eee;
  position: relative;
  display: flex;
  bottom: 40px;
  line-height: 40px;
}
.bottom-bar .check-button {
  line-height: 20px;
}
.check-content {
  display: flex;
  bottom: 40px;
  align-items: center;
  height: 40px;
  margin-left: 10px;
  width: 60px;
}
.check-button {
  width: 20px;
  margin-right: 5px;
  height: 20px;
}
.Price {
  margin-left: 20px;
  flex: 1;
}
.caclulate {
  width: 90px;
  color: #fff;
  background: red;
  text-align: center;
}
</style>
