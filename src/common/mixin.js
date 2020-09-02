export const itemListenerMixin = {
  data() {
    return {
      itemImgListstener: null,
    }
  },
  mounted() {

    // let newRefresh = debouce(this.$refs.scroll.refresh, 200);
    (this.itemImgListstener = () => {
      // this.$refs.scroll.scroll.refresh();
    }),
    this.$bus.$on("itemImageLoad", this.itemImgListstener);
    console.log("我是混入中的内容,混入：和原有的生命周期函数合并在一起");

  }
}
