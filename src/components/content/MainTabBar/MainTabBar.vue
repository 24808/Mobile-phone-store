<template>
  <tabbar>
    <TabBarItem path="/home" activeColor="red">
      <!-- <img src=".@..\./../../../assets/img/tabbar/首页.png" alt="" srcset="" />
        <
      <div>首页</div>-->
      <img
        slot="item-icon"
        src="./../../../assets/img/tabbar/首页.png"
        alt
        srcset
      />
      <img
        slot="item-icon-active"
        src="./../../../assets/img\tabbar\首页-action.png"
        alt
        srcset
      />
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/cartgory" activeColor="red">
      <img
        slot="item-icon"
        src="./../../../assets/img/tabbar/分类.png"
        alt
        srcset
      />
      <img
        slot="item-icon-active"
        src="./../../../assets/img/tabbar/分类-action.png"
        alt
        srcset
      />
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/cart" activeColor="red">
      <img slot="item-icon" src="./../../../assets/img/tabbar/购物车.png" />
      <img
        slot="item-icon-active"
        src="./../../../assets/img/tabbar/购物车-action.png"
      />
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile" activeColor="red">
      <img slot="item-icon" src="./../../../assets/img/tabbar/我的.png" />
      <img
        slot="item-icon-active"
        src="./../../../assets/img/tabbar/我的-action.png"
      />
      <div slot="item-text">我的</div>
    </TabBarItem>
  </tabbar>
</template>

<script>
import tabbar from "./../../common/tabbar/tabar";
import TabBarItem from "./../../common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    tabbar,
    TabBarItem
  }
};
</script>

<style>
/* 引用css */
</style>
