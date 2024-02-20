// es6
/**
 * 1. 扩展运算符 ...
 * 2. 解构赋值 => 数组的解构赋值  对象的解构赋值
 * 3. 函数的参数默认值
 * 4. let const
 * 5. 类
 * 6. promise
 * 7. map&set数据结构
 * 8.
 * */
var obj = {a:1,b:2,c:3}
var arr = [1,2,3,4]

//函数默认值
function fn(a=1){}
// 扩展运算符
var obj1 = {...obj}
var arr1 = [...arr]
// var [a,b,c,d] = arr
// var {a,b,c} = obj
// console.log(a,b,c)


// map 类似于对象
// set 类似于数组  但是成员唯一
// map 健值可以是任意类型
var map = new Map();
// 取出，当不存在该项时返回 undefined
// map.get('key')
// 添加
// map.set('key','value')

// 判断是否有该项
// map.has('key')

// map的所有key
// map.keys()

// map 所有的value
// map.values()

// 删除
map.delete('key')

// 返回map的成员数量
// map.size()
var set = new Set();
// 添加
set.add()
// 删除
set.delete()
set.has()
set.keys()
set.values()
set.size()
set.clear()


var weakMap = new WeakMap();
var weakSet = new WeakSet();
