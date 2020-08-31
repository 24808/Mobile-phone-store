<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probe: {
      type: Number,
      default: 0,
    },
    pullupload: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      // pullUpLoad: true
      click: true,
      taps: true,
      mouseWheel: true,
      //是否监听当前区域
      probeType: this.probe,
      //上拉到底部的监听
      pullUpLoad: this.pullupload,
    });
    //监听滚动的区域()
    this.scroll.on("scroll", (position) => {
      // console.log("当前滚动区域" + position);
      // this.$emit("myscroll", position);
      this.$emit("contentscroll", position);
      // console.log(position);
    });
    // console.log(this.scroll);
    //监听上拉事件
    this.scroll.on("pullingUp", () => {
      // console.log("上拉加载更多");
      this.$emit("pullingUp");
    });
  },
  methods: {
    //回到顶部的方法

    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    refresh() {
      this.scroll.refresh();
    },
    //设置离开y轴DE 的方法
    getscrollY() {
      return this.scroll ? -this.scroll.y : 0;
    },
  },
};
</script>
<style scoped>
.wrapper {
  /* overflow: hidden; */
  height: 100%;
  /* height: 1300px; */
}
</style>
