<template>
  <div id="tab-bar">
    <!-- <slot> </slot> -->
    <slot></slot>
    <!-- <div class="tab-bar-item">
      <img src="..\..\assets\img\tabbar\首页.png" alt="" srcset="" />
      <div>首页</div>
    </div>
    <div class="tab-bar-item">
      <img src="..\..\assets\img\tabbar\首页.png" alt="" srcset="" />

      <div>分类</div>
    </div>
    <div class="tab-bar-item">
      <img src="..\..\assets\img\tabbar\首页.png" alt="" srcset="" />

      <div>购物车</div>
    </div>
    <div class="tab-bar-item">
      <img src="..\..\assets\img\tabbar\首页.png" alt="" srcset="" />

      <div>我的</div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "tabbar",
  components: {}
};
</script>

<style>
/* 引用css */
/* @import "../../assets/css/base.css"; */
body {
  padding: 0;
  margin: 0;
}

#tab-bar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* background-color: #f6cccc; */
  background-color: rgb(0, 0, 0, 0.1);
  /* //固定到底部 */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -3px 5px rgb(0, 0, 0, 0.13);
  /* 一般高度49 */
  height: 49px;

  /* background-color: red; */
}
</style>
