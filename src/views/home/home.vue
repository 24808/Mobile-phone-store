<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 分类的显示 -->
    <tab-control
      :titles="['流行', '新款', '精选']"
      class="tab-control"
      :class="{fixed:isTabFixed}"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isTabFixed"
    ></tab-control>
    <!-- <swiper>
      <swiper-item v-for="(item,index) in banners " :key="index">
        <a :href="item.link">
          <img :src="item.image" alt />
        </a>
      </swiper-item>
    </swiper>-->
    <!-- //滚动 -->
    <scroll
      class="context"
      ref="scroll"
      @contentscroll="contentscroll"
      :probe="3"
      :pullupload="true"
      @pullingUp="loadMore"
    >
      <!-- <!loadMore -- 加载更多 -->

      <!-- //福安波图 -->
      <div class="wrapper">
        <div class="content">
          <home-swiper :banners="banners" @SwoperImageLoad="SwoperImageLoad"></home-swiper>
          <recommend-view :recommends="recommends"></recommend-view>
          <featuye-vuew></featuye-vuew>
          <tab-control
            :titles="['流行', '新款', '精选']"
            :class="{fixed:isTabFixed}"
            @tabClick="tabClick"
            ref="tabControl"
          ></tab-control>
          <good-list :goods="showGoods"></good-list>
        </div>
      </div>
    </scroll>
    <!-- native监听组件的原生事件 -->
    <back-top @click.native="backClick" v-show="isShowbackTop"></back-top>
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
import debounce from "./../../common/utils";
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
    backTop,
  },
  data() {
    return {
      result: "我是24708",
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      //当前分类
      currentType: "pop",
      //是否显示回到顶部
      isShowbackTop: true,
      //悬停距离顶部的位置
      taboffsetTop: 0,
      //是否吸顶
      isTabFixed: false,
      saveY: 0,
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
  activated() {
    console.log("活跃");
    //设置进入路由的滚动条位置
    this.$refs.scroll.scrollTo(0, -this.saveY, 0);
    //滚动条刷新
    this.$refs.scroll.refresh();
  },
  deactivated() {
    console.log("不活跃");
    //设置离开y轴
    // this.saveY = this.$refs.scroll && -this.$refs.scroll.scroll.y;
    //设置离开y轴DE 的方法

    this.saveY = this.$refs.scroll.getscrollY();
  },
  mounted() {
    ////防抖动要执行的函数及
    // const refresh = debounce(this.$refs.scroll.refresh, 200);
    // this.$bus.$on("itemImageLoad", () => {
    //   // console.log("图片被加载了");
    //   //每张异步的图片加载完计算scroll
    //   //短路，第一个为false后面不执行
    //   //防抖动
    //   // 每一张图片都请求一次，延迟200ms执行，如果200ms内再一次执行则清除这一次执行下一次
    //   refresh();
    //   // this.$refs.scroll.scroll && this.$refs.scroll.scroll.refresh();
    //   //滑动距离顶部的位置
    //   // this.taboffsetTop = this.$refs.tabControl;
    // });
    // $el获取组件的元素
  },
  methods: {
    SwoperImageLoad() {
      console.log(this.$refs.tabControl.$el.offsetTop);
      this.offsetTop = this.$refs.tabControl.$el.offsetTop;
    },
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
      this.$refs.tabControl.currentIndex = index;
      this.$refs.tabControl1.currentIndex = index;
    },

    //封装到函数,网络请求相关的函数
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.result = res;
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      // console.log(this.goods[type]);

      const page = this.goods[type].page + 1;

      getHomeGoods(type, page).then((res) => {
        // this.goods[type].page = res.data.data.page;
        // this.goods[type].list = res.data.data.list;
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page = page;
        //结束这个下拉加载更多
        this.$refs.scroll.scroll.finishPullUp();
        console.log(page);
      });
    },
    // 到顶部的掩藏和消失
    contentscroll(position) {
      //昏倒顶部的显示和掩藏
      this.isShowbackTop = -position.y > 1000 ? true : false;
      //分类的停留

      this.isTabFixed = -position.y > this.offsetTop;
    },
    // 回到顶部按钮,监听组件的原生事件
    backClick() {
      console.log("我被点击了");
      //回到顶部的方法
      this.$refs.scroll.scrollTo(0, 0, 1000);
    },
    // 加载更多
    loadMore() {
      console.log("请求下一页");
      this.getHomeGoods(this.currentType);
      // 重新计算
      //异步请求完重新计算scroll
      this.$refs.scroll.scroll.refresh();
    },
  },
  computed: {
    // 商品的数据
    showGoods() {
      return this.goods[this.currentType].list;
    },
    // refresh();
  },
};
</script>
<style scoped>
/* 导航条样式 */
.home-nav {
  background: pink;
  /* position: fixed; */
  width: 100vw;
  /* left: 0;
  right: 0;
  top: 0;
  z-index: 1; */
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
  /* position: sticky;
  top: 44px;
  z-index: 1; */
  position: relative;
  z-index: 2;
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
/* .fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
  z-index: 2;
} */
</style>
