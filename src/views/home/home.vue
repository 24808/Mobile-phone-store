<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- <swiper>
      <swiper-item v-for="(item,index) in banners " :key="index">
        <a :href="item.link">
          <img :src="item.image" alt />
        </a>
      </swiper-item>
    </swiper>-->
    <!-- //福安波图 -->
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>
<script>
import NavBar from "./../../components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
// 封装到了home的homeswiper
// import { Swiper, SwiperItem } from "./../../components/common/swiper";
import { getHomeMultidata } from "./../../network/home";
export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
  },
  data() {
    return {
      result: "我是24708",
      banners: [],
      recommends: [],
    };
  },
  // 首页创建完发送请求
  created() {
    //请求多个数据
    getHomeMultidata().then((res) => {
      // console.log(res);
      this.result = res;
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    });
  },
  computed: {
    showGoods() {
      return this;
    },
  },
};
</script>
<style scoped>
.home-nav {
  background: pink;
}
</style>
