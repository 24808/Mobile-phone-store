<template>
  <!-- //别的组件 -->
  <!-- <ic-slider :autoplay="3000" class="sss">
    <ic-slider-item v-for="(items, index) in topImages" :key="index">
      <img :src="items" />
    </ic-slider-item>
  </ic-slider> -->

  <swiper class="sss">
    <swiper-item v-for="(item, index) in topImages" :key="index">
      <a :href="item.link">
        <img :src="item" alt />
      </a>
    </swiper-item>
  </swiper>
  <!-- //elenemt的 -->
  <!-- <el-carousel
    :interval="4000"
    type="card"
    height="400px"
    indicator-position="outside"
  >
    <el-carousel-item v-for="(item, index) in topImages" :key="index">
      <img :src="item" class="image" />
    </el-carousel-item>
  </el-carousel> -->
</template>
<script>
// import "vue-better-slider/style.css";
import { Swiper, SwiperItem } from "./../../../components/common/swiper/";
// import { IcSlider, IcSliderItem } from "vue-better-slider";

export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
.sss {
  height: 300px;
  overflow: hidden;
}
.sss .ic-slider__indicators {
  left: -95px;
}
</style>
