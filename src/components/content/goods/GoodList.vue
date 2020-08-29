<template>
  <div class="goods">
    <GoodListItem v-for="(item,index) in goods" :key="index" :good-item="item"></GoodListItem>
  </div>
</template>
<script>
import GoodListItem from "./GoodListItem";

export default {
  name: "GoodList",
  components: {
    GoodListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.goods {
  display: flex;
  /* //换行 */
  flex-wrap: wrap;
  /* 主轴对其方式，左右 */
  justify-content: space-around;
  /* //排列方式 */
  flex-direction: row-reverse;
  /* align-items属性定义项目在交叉轴上如何对齐  上下*/
  /* align-items: center; */
  /* align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。 */
  align-content: center;
}
</style>