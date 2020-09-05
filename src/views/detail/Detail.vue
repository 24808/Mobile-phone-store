<template name="Detail">
  <div id="detail">
    <!-- //导航栏 -->
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <!-- //判断是不是空的对象 -->
    <Scroll class="content" ref="scroll" @contentscroll="contentscroll" :probe="3">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info ref="params" :paramInfo="paramInfo"></detail-param-info>
      <detail-comment-info ref="comment" :commentInfo="commentInfo"></detail-comment-info>
      <goods-list ref="recommend" :goods="recommends"></goods-list>

      <p>啊，我是详情页{{ iid }}</p>
    </Scroll>
    <back-top @click.native="backClick" v-show="isShowbackTop"></back-top>

    <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
    <!-- <toast :message="message" :show="show"></toast> -->
  </div>
</template>
<script>
//组件
import DetailNavBar from "./childComps/DetailNavBar";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";
import GoodsList from "./../../components/content/goods/GoodList";
import backTop from "./../../components/content/backTop/backTop";
//数据
import {
  getdetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam,
} from "./../../network/detail";
//滚动条
import Scroll from "./../../components/common/scroll/Scroll";

//轮播图
import DetailSwiper from "./childComps/DetailSwiper";
import { debounce } from "./../../common/utils";
import { itemListenerMixin } from "./../../common/mixin";
//vuex
import { mapActions } from "vuex";

//toast
// import Toast from "./../../components/common/toast/Toast";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    backTop,
    // Toast,
  },
  mixins: [itemListenerMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      //混入的变量
      // itemImgListstener: null,
      themeTopYs: [],
      //防抖
      getthemeTopY: null,
      //顶部栏的联动
      currentIndex: 0,
      //
      isShowbackTop: true,
      //没用的
      // message: "",
      // show: false,
    };
  },
  created() {
    //保存传入的iid
    //蛇者id
    this.iid = this.$route.query.id;
    // console.log(getDetail);
    getdetail(this.iid).then((res) => {
      console.log(res.data.result.itemInfo.topImages);
      //获取顶部的图片录播数据
      const data = res.data.result;
      this.topImages = data.itemInfo.topImages;
      //获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //后去店铺信息
      this.shop = new Shop(data.shopInfo);
      //商品的详情数据
      this.detailInfo = data.detailInfo;
      //获取参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      data.rate.cTate !== 0 ? (this.commentInfo = data.rate.list[0]) : {};

      //获取评论信息
      getRecommend().then((res) => {
        //映射图片路径
        // var list = res.data.data.list;
        // this.recommends = list.map((x) => {
        //   return {
        //     title: x.title,
        //     price: x.price,
        //     cfav: x.cfav,
        //     show: { img: x.image },
        //   };
        // });
        // 2：组件里.判断
        this.recommends = res.data.data.list;
      });
      //渲染完执行这个函数
      this.$nextTick(() => {
        //获取到了dom，图片还没有加载
        //值不对
        // this.themeTopYs = [];
        // this.themeTopYs.push(0);
        // this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        // this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        // console.log(this.themeTopYs);
      });
      //防抖函数
      this.getthemeTopY = debounce(() => {
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        //Number.MAX_VALUE数字最大值
        this.themeTopYs.push(Number.MAX_VALUE);

        console.log(this.themeTopYs);
      }, 200);
    });

    // getDetail(this.iid).then((res) => {
    //   console.log(res);
    // });
  },
  updated() {},
  methods: {
    //获取vuex的方法
    ...mapActions({ addcart: "addCart" }),
    addCart() {
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.goods.iid;
      console.log("asdasdsd");
      console.log(this.goods);
      //将商品加入到vuex mutations
      // this.$store.commit("addCart", product);
      //将商品加入到vuex mutations
      //actions回调，返回一个Promise
      // this.$store.dispatch("addCart", product).then((res) => {
      //   console.log(res);
      //   alert(res);
      // });
      //使用vuex的方法
      this.addcart(product).then((res) => {
        // (this.show = true), (this.message = res);
        // setTimeout(() => {
        //   this.show = false;
        //   his.message = "";
        // }, 500);
        console.log("asdasdasdasddas");
        //使用插件
        this.$toast.show(res);
      });
    },
    backClick() {
      console.log("我被点击了");
      //回到顶部的方法
      this.$refs.scroll.scrollTo(0, 0, 1000);
    },
    imageLoad() {
      this.$refs.scroll.scroll.refresh();
      //防抖函数
      this.getthemeTopY();
    },
    titleClick(index) {
      console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 700);
    },
    contentscroll(positon) {
      this.isShowbackTop = -positon.y > 1000 ? true : false;
      //获取滚动条的y值
      const positonY = -positon.y;
      const lenght = this.themeTopYs.length;
      for (let i = 0; i < lenght; i++) {
        if (
          this.currentIndex !== i &&
          positonY >= this.themeTopYs[i] &&
          positonY < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      //顶部栏的联动
      // for (let i = 0; i < lenght; i++) {
      //   if (
      //     this.currentIndex !== i &&
      //     ((i < lenght - 1 &&
      //       positonY >= this.themeTopYs[i] &&
      //       positonY < this.themeTopYs[i + 1]) ||
      //       (i === lenght - 1 && positonY >= this.themeTopYs[i]))
      //   ) {
      //     this.currentIndex = i;
      //     this.$refs.nav.currentIndex = this.currentIndex;
      //   }
      // }
    },
  },
  mounted() {
    // let newRefresh = debouce(this.$refs.scroll.refresh, 200);
    // (this.itemImgListstener = () => {
    //   this.$refs.scroll.refresh();
    // }),
    //   this.$bus.$on("itemImgLoad", this.itemImgListstener);
  },
  destroyed() {
    //取消事件
    this.$bus.$off("itemImgLoad", this.itemImgListstener);
  },
};
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 3;
  background: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 44px - 58px);
}
.detail-nav {
  position: relative;
  z-index: 3;
  background: #fff;
}
</style>
