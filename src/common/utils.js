//防抖动
export function debounce(func, delay) {
  let timer = null;
  return function (...args) {
    if (timer) clrearTimeout(timer);
    timer = setTimeout(() => {
      // 改变this获取args
      // ：箭头函数中的this，指向的是函数定义位置（定义作用域）的上下文this所以这个能指向debunce
      func.apply(this, args);
    }, delay);
  };
}
