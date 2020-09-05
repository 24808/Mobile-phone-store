import Toast from "./Toast"
const obj = {}
//插件
obj.install = function (vue) {
  // console.log("执行了obj的install函数", vue);
  // 创建组件构造器
  const toastContrustor = vue.extend(Toast)
  //根据组件构造器创建一个组件对象
  const toast = new toastContrustor()
  //将组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement("div"))
  // this指向组件的实例。
  // $el指向当前组件的DOM元素。

  document.body.appendChild(toast.$el)
  vue.prototype.$toast = toast
}
export default obj;
