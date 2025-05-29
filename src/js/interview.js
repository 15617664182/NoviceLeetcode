// 使用 + 或一元加运算符是将字符串转换为数字的最快方法吗？
// 是

// 什么是event.target？  event.currentTarget?
// event.target发生事件的元素或触发事件的元素   event.currentTarget是我们在其上显式附加事件处理程序的元素

// js中的this 是什么？
// this指的是当前正在执行或调用该函数的对象的值。this值的变化取决于我们使用它的上下文和我们在哪里使用它

//!! 运算符能做什么？
// !!运算符是将布尔值转换为布尔值的最快方

// JavaScript中的虚值是什么？如何检查虚值？

// 手动实现`Array.prototype.map`方法 filter
Array.prototype.myMap = function (cb) {
  if (!Array.isArray(this) && !this.length && typeof cb !== "function") {
    return []
  } else {
    var result = []
    // 每次调用此函数时,我们都会创建一个result数组,因为我们不想改变原始数组。
    for (var i = 0; i < this.length; i++) {
      result.push(cb(this[i], i, this))
    }
    result = result.filter((el) => el)
    return result
  }
}

Array.prototype.myFilter = function (cb) {
  // 调用此方法必须为有值的数组，参数为一个回调， 回调参数为 idx item array
  if (!Array.isArray(this) && !this.length && typeof cb !== "function") {
    return []
  } else {
  }
}
var arr = [1, 2, 3, 4]
var res = arr.myMap((el) => {
  if (el > 2) {
    return el
  }
})
console.log(res)

// 什么是包装对象（wrapper object）？

//Object.seal 和 Object.freeze 方法之间有什么区别？

//对象中的 in 运算符和 hasOwnProperty 方法有什么区别？

// 什么是缓存及它有什么作用？
// 概念：缓存只是一个临时的数据存储，它保存数据，以便将来对该数据的请求能够更快地得到处理
// 本质： 以空间换取时间
// 前端实现 本地储存

//什么时候不使用箭头函数? 说出三个或更多的例子？
// 1.使用函数作为构造函数时(箭头函数没有构造函数)
// 2.当想在对象字面是以将函数作为属性添加并在其中使用对象时，因为咱们无法访问 this 即对象本身
// 3.要在函数中使用this/arguments时，由于箭头函数本身不具有this/arguments，因此它们取决于外部上下文

// Object.freeze() 和 const 的区别是什么？

// commonjs 和esmodule的区别
// 1. 语法区别
// 2. 模块加载时机
// 3. ‌导出内容的区别
// 4. ‌导出内容的区别
// 5. ‌循环依赖处理方式
// 6. 模块加载时机区别
// 7. 模块加载方式区别
// 8. 模块加载速度区别


//   场景题
// 1、 http/2 和http/1的区别
//        http/2   http/2 是一个协议，它允许多个请求在同一个连接中进行，从而提高性能和效率。
//        http/1.x 是一个协议，它允许一个请求在一个连接中进行，从而提高性能和效率。
// 2、 如何实现拖拽
//        拖拽的原理是：鼠标按下时，鼠标移动时，鼠标松开时，鼠标移动的位置就是目标位置。

// 3、图片懒加载的原理
//      图片懒加载的原理是：当图片出现在屏幕上时，才加载图片。IntersectionObserver 是一个 API，它可以用来监听元素是否出现在屏幕上。

// 4、 如何优化图片加载
//

// 5、如何设计一个可高度复用的组件？
//     

