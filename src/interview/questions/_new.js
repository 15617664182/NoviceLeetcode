// new 关键字
/**
 * new做的四件事
 * 1.创建一个空对象
 * 2.将这个空对象的__proto__属性指向构造函数的原型对象
 * 3.将构造函数内部的this关键字指向这个新创建的空对象。
 * 4.执行构造函数内部的代码
 * 5.返回这个新对象
 * */


 // 手写new的过程
function newFunc(constructor,...args) {
     args = args ? args : []
    // 1.创建一个空对象
    var newObj = {}
    // 2将这个空对象的__proto__属性指向构造函数的原型对象
    newObj.__proto__ = constructor.prototype
    // 3.将构造函数的this指向这个对象
    var res = constructor.apply(newObj,args)

    // 返回
    return typeof res === "object" ? res : newObj
}
