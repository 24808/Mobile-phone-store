<template>
  <div class="good-item">
    <!-- @loadj；vue里默认监听图片的加载 -->
    <img :src="goodItem.show.img" alt @load="imgageLoad" />
    <div class="goods-info">
      <p>{{ goodItem.title }}</p>
      <span class="price">{{ goodItem.price }}</span>
      <span class="collect">{{ goodItem.cfav }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodListItem",
  props: {
    goodItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imgageLoad() {
      // console.log("我被加载了");
      //创建事件走线的事件，home里调用,main.js里创建事件走线
      this.$bus.$emit("itemImageLoad");
    }
  }
};
</script>
<style scoped>
.good-item {
  padding-bottom: 60px;
  flex-basis: 48%;

  position: relative;
}
.good-item img {
  width: 100%;
  border-radius: 5px;
  height: 100%;
}
.goods-info {
  overflow: hidden;
  font-size: 15px;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 15px;
}
.goods-info p {
  text-overflow: ellipsis;
  margin-bottom: 3px;
  white-space: nowrap;
  overflow: hidden;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
/* 设置子元素的定位位置 */
.goods-info .collect {
  position: relative;
}
/* //在开头加入下图标 */
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 2px;
  width: 14px;
  height: 14px;
  background: url("./../../../assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
