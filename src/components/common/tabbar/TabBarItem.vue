<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>

    <!-- <div :class="{ active: isActive }"> -->
    <div :style="isActive ? { color: this.activeColor } : {}">
      <slot name="item-text"></slot>
    </div>
  </div>

  <!-- <img src="..\..\assets\img\tabbar\首页.png" alt="" srcset="" />
    <div>首页</div> -->
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },

  // data() {
  //   return {
  //     isActive: true
  //   };
  computed: {
    isActive() {
      return this.$route.path == this.path;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
      console.log("itemClick");
      console.log(this.activeColor);
    }
  }
};
</script>

<style>
/* 引用css */
/* @import "../../assets/css/base.css"; */
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
  margin-top: 3px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.active {
  color: red;
}
</style>
