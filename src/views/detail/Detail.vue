<template name="Detail">
  <div id="detail">
    <!-- //导航栏 -->
    <detail-nav-bar></detail-nav-bar>
    <!-- //判断是不是空的对象 -->
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>

    <p>啊，我是详情页{{ iid }}</p>
  </div>
</template>
<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import { getdetail, Goods } from "./../../network/detail";

//轮播图
import DetailSwiper from "./childComps/DetailSwiper";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {}
    };
  },
  created() {
    //保存传入的iid
    //蛇者id
    this.iid = this.$route.query.id;
    // console.log(getDetail);
    getdetail(this.iid).then(res => {
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
      console.log(this.goods);
    });

    // getDetail(this.iid).then((res) => {
    //   console.log(res);
    // });
  },
  mounted() {}
};
</script>
<style scoped></style>
