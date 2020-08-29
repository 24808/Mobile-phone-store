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
    <!-- //滚动 -->
    <scroll class="context" ref="scroll">
      <!-- //福安波图 -->
      <div class="wrapper">
        <div class="content">
          <home-swiper :banners="banners"></home-swiper>
          <recommend-view :recommends="recommends"></recommend-view>
          <featuye-vuew></featuye-vuew>
          <tab-control
            :titles="['流行', '新款', '精选']"
            class="tab-control"
            @tabClick="tabClick"
          ></tab-control>
          <good-list :goods="showGoods"></good-list>
        </div>
      </div>
    </scroll>
    <!-- native监听组件的原生事件 -->
    <back-top @click.native="backClick"></back-top>
  </div>
</template>
<script>
//底部
import NavBar from "./../../components/common/navbar/NavBar";
// 下拉刷新
import Scroll from "./../../components/common/scroll/Scroll";
//轮播图
import HomeSwiper from "./childComps/HomeSwiper";
//首页推荐
import RecommendView from "./childComps/RecommendView";
//图片 FeatuyeVuew
import FeatuyeVuew from "./childComps/FeatuyeVuew";
// 分类
import TabControl from "./../../components/content/tabControl/TabControl";
import GoodList from "./../../components/content/goods/GoodList";
import backTop from "./../../components/content/backTop/backTop";

// 封装到了home的homeswiper
// import { Swiper, SwiperItem } from "./../../components/common/swiper";
//数据
import { getHomeMultidata, getHomeGoods } from "./../../network/home";
export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatuyeVuew,
    TabControl,
    GoodList,
    Scroll,
    backTop
  },
  data() {
    return {
      result: "我是24708",
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop"
    };
  },
  // 首页创建完发送请求
  // created里面只写主要逻辑
  created() {
    //请求多个数据:首页数据
    this.getHomeMultidata();
    //商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    //事件监听
    tabClick(index) {
      console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    //封装到函数,网络请求相关的函数
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.result = res;
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      // console.log(this.goods[type]);
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // this.goods[type].page = res.data.data.page;
        // this.goods[type].list = res.data.data.list;
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;

        console.log(res);
      });
    },
    // 回到顶部按钮,监听组件的原生事件
    backClick() {
      console.log("我被点击了");
      //回到顶部的方法
      this.$refs.scroll.scrollTo(0, 0, 1000);
    }
  },
  computed: {
    // 商品的数据
    showGoods() {
      return this.goods[this.currentType].list;
    }
    // refresh();
  }
};
</script>
<style scoped>
/* 导航条样式 */
.home-nav {
  background: pink;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
}
/* 首尾高度 */
#home {
  /* padding: 44px 0 49px 0; */
  height: 100vh;
  position: relative;
}
/* 分类滑动 */
/* position: sticky;距离顶部多少像素固定 */
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 1;
}

.context {
  /* height: 100vh; */
  /* overflow: hidden; */
  /* height: calc(85%-5); */
  height: calc(100% - 93px);
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 149px;
  overflow: hidden;
}
</style>
