<template>
  <div class="recommed">
    <div v-for="(item,index) in recommends" :key="index" class="recommed-item">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style  scoped>
.recommed {
  display: flex;
}
.recommed-item {
  flex: 1;
  /* flex-basis: 25%; */
  flex: 1 0 25%;
  text-align: center;
  font-size: 12px;
  padding: 10px 0px 20px;
  border-bottom: 8px solid #eee;
}
.recommed-item img {
  width: 70px;
  height: 70px;
}
</style>