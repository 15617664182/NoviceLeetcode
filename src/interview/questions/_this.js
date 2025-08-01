//this的指向

// this的指向与他代码所在的位置无关，this的指向是根据调用的位置决定的

/**
 * 1. 函数调用 this指向 window || global
 * 2. 箭头函数 没有this指向 会捕捉外层作用域的this作为自己的this
 * 3. 事件调用  this指向触发事件的对象
 * 4. 构造函数调用  this指向当前实例
 * 5. call apply  this指向第一个参数  bind  this指向返回的函数
 * 6. new  this指向实例
 * 7.定时器中函数的this指向window
 * */

