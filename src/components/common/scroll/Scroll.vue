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
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      // pullUpLoad: true
      click: true,
      taps: true,
      mouseWheel: true
    });

    // console.log(this.scroll);
    this.scroll.on("pullingUp", () => {
      console.log("上拉加载更多");
    });
  },
  methods: {
    //回到顶部的方法

    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    }
  }
};
</script>
<style scoped>
.wrapper {
  /* overflow: hidden; */
  height: 100%;
  /* height: 1300px; */
}
</style>
