
<template>
  <div class="check-button" :class="{Check:isChecked}">
    <img src="./../../../assets/img/cart/tick.svg" alt />
  </div>
</template>
<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
<style scoped>
.check-button {
  border-radius: 50%;
  border: 2px solid #aaa;
}
.Check {
  background: orangered;
  border-color: orangered;
}
</style>