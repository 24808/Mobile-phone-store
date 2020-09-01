<template>
  <div>
    <!-- //导航栏 -->

    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="./../../../assets/img/common/back.svg" alt />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item,index) in titles"
          :key="index"
          class="title-item"
          @click="ItemClick(index)"
          :class="{active:index==currentIndex}"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "./../../../components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    //当前分类
    ItemClick(index) {
      this.currentIndex = index;
    },
    //返回首页
    backClick() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.title {
  display: flex;
}
.title-item {
  justify-items: center;
  font-size: 14px;

  align-items: center;
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.back {
  margin-top: 5px;
}
</style>