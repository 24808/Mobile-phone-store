<template>
  <div class="toast" v-show="Isshow">
    <div>{{message}}</div>
  </div>
</template>
<script>
export default {
  name: "Toast",
  // props: {
  //   message: {
  //     type: String,
  //     default: "",
  //   },
  //   show: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },

  data() {
    return {
      message: "",
      Isshow: false,
    };
  },
  methods: {
    show(message = "默认文字", duration = 500) {
      (this.Isshow = true),
        (this.message = message),
        setTimeout(() => {
          (this.Isshow = false), (this.message = "");
        }, duration);
    },
  },
};
</script>
<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 8px 10px;
  background: rgba(0, 0, 0, 0.6);
  transform: translate(-50%, -50%);
  color: #fff;
  z-index: 999;
}
</style>