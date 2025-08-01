//判断数据类型 常用有三种方法
/*
 * 1. typeof
 * 2. instanceof
 * 3. Object.prototype.toString.call
 */
var _obj = {}
var arr = []
var func = function(){}
var str = '123'
var num = 123
var bool = true
var undef = undefined
var null_ = null
var un = undefined
var nul = null
var reg = /a/
var date = new Date()
var error = new Error()
var obj = new Object()
var fun = new Function()


//1. typeof
//  他只能检测 基本数据类型， 复杂数据类型 统一为object  function可以正常判断
// console.log(typeof _obj)//object--- 正常
// console.log(typeof arr)// object -- 错误
// console.log(typeof func) // function -- 正常
// console.log(typeof nul) // object -- 错误


// 2. instanceof
//  他只能判断 复杂数据类型， 不能检测基本数据类型
// console.log(_obj instanceof Object) // true  正确
// console.log(str instanceof String) // false   错误
// console.log(num instanceof Number)

// 3. Object.prototype.toString.call
// 最优解 可以判断所有数据类型
