<template>
  <div>
    <h2>分类</h2>
    <div class="wrapper" ref="aaa">
      <ul class="centent">
        <button @click="dianClick">这是一个那妞</button>
        <li>分类列表1</li>
        <li>分类列表2</li>
        <li>分类列表3</li>
        <li>分类列表4</li>
        <li>分类列表5</li>
        <li>分类列表6</li>
        <li>分类列表7</li>
        <li>分类列表8</li>
        <li>分类列表9</li>
        <li>分类列表10</li>
        <li>分类列表11</li>
        <li>分类列表12</li>
        <li>分类列表13</li>
        <li>分类列表14</li>
        <li>分类列表15</li>
        <li>分类列表16</li>
        <li>分类列表17</li>
        <li>分类列表18</li>
        <li>分类列表19</li>
        <li>分类列表20</li>
        <li>分类列表21</li>
        <li>分类列表22</li>
        <li>分类列表23</li>
        <li>分类列表24</li>
        <li>分类列表25</li>
        <li>分类列表26</li>
        <li>分类列表27</li>
        <li>分类列表28</li>
        <li>分类列表29</li>
        <li>分类列表30</li>
        <li>分类列表31</li>
        <li>分类列表32</li>
        <li>分类列表33</li>
        <li>分类列表34</li>
        <li>分类列表35</li>
        <li>分类列表36</li>
        <li>分类列表37</li>
        <li>分类列表38</li>
        <li>分类列表39</li>
        <li>分类列表40</li>
        <li>分类列表41</li>
        <li>分类列表42</li>
        <li>分类列表43</li>
        <li>分类列表44</li>
        <li>分类列表45</li>
        <li>分类列表46</li>

        <li>分类列表68</li>
        <li>分类列表69</li>

        <li>分类列表93</li>
        <li>分类列表94</li>
        <li>分类列表95</li>
        <li>分类列表96</li>
        <li>分类列表97</li>
        <li>分类列表98</li>
        <li>分类列表99</li>
        <li>分类列表100</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll";
export default {
  name: "cartgory",
  data() {
    return {
      scroll: null
    };
  },
  created() {},
  mounted() {
    console.log(this.$refs.aaa);
    console.log(document.querySelector(".wrapper"));
    this.scroll = new Bscroll(".wrapper", {
      // 所有滑动获取位置
      probeType: 3,
      pullUpLoad: true
    });
    //监听当前位置
    this.scroll.on("scroll", poistion => {
      // console.log(poistion);
    });
    this.scroll.on("pullingUp", () => {
      console.log("上拉加载更多");
    });
  },
  methods: {
    dianClick() {
      console.log("我被点了");
    }
  },
  computed: {}
};
</script>
<style scoped>
/* //设置局部滚动 */
/* .centent {
  height: 140px;
  color: red;
  overflow: hidden;
  overflow-y: scroll;
} */
.wrapper {
  height: 140px;
  background: red;
  overflow: hidden;
}
</style>
