/**
 * call & apply & bind
 * 都是用来改变函数的this对象的
 * call
 * apply
 * bind
 * */

/**
 * 调用方式
 * call apply  都是直接调用， bind 是返回一个函数，this指向返回的函数
 * call 和 apply 的区别是， call 只能传一个参数， apply 可以传多个参数
 *
 * 传参
 * call bind 都是依次传参， apply 传数组
 * call  fn.call(obj,1,2,3)
 * apply fn.apply(obj, [1,2,3])
 * bind fn.bind(obj,1,2,3)
 *
 *兼容性
 * bind 在低版本的浏览器中不支持
 * */

// 手写 call apply bind
 Function.prototype.myCall = function (ctx,...args) {
     ctx = ctx || window
     ctx.fn =this
     args = args ? args : []
     var res  = ctx.fn(...args)
     delete  ctx.fn
     return res
 }

 Function.prototype.myApply = function (ctx,args){
     ctx = ctx || window
     ctx.fn = this
     args = args ? args : []
     var res  = ctx.fn(...args)
     delete  ctx.fn
     return res
}
Function.prototype.myBind = function(ctx,...args){
    ctx = ctx || window
    ctx.fn = this
    args = args ? args : []
    function res(){
        ctx.fn(...args)
        delete ctx.fn
    }
    return res
}



// 验证
var info = {
    name:'测试',
    age:14,
    sayName(){
        console.log(this.age)
    }
}
function test (a,b){
    console.log(this.name)
    console.log(a)
    console.log(b)
    this.sayName()
}

// call  => 正确
// test.call(info,1,2)
// test.myCall(info,1,2)


// apply 正确
//  test.apply(info,[1,2])
// test.myApply(info,[1,2])


// bind 正确
var f1 = test.bind(info,1,2)
// f1()
var f2 = test.myBind(info,1,2)
// f2()
