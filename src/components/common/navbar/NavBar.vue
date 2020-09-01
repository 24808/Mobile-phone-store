<template>
  <div class="nav-bar">
    <!-- 用div包起来好设置属性 -->
    <div class="left">
      <!-- 多个slot设置具名插槽 -->
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
};
</script>

<style>
/* 引用css */
/* @import "../../assets/css/base.css"; */
.nav-bar {
  display: flex;
  line-height: 44px;
  text-align: center;
  height: 44px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.4);
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>
