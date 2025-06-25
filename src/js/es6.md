# ES6内容
#### let和const*
     1.解决了变量作用域的问题和变量提升的问题。
     2.let声明的变量只在当前代码块有效
     3.const声明的变量不能被重新赋值(常量)

#### 模板字符串*
  可以在模板字符串中嵌入变量及表达式
```typescript
 var name = '张三'
 var msg = `我的名字叫${name}`// log("我的名字叫张三") 
```
#### 箭头函数*
    1. 箭头函数的语法比普通函数更简洁
    2. 箭头函数的`this是丢失的`,this指向外部函数的this *

```typescript
    function old(a,b){} 
    var func = (a,b) => a+b

```

#### 解构赋值*
ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构
```typescript
example:
    var [a,b] = [1,2]                           // a=1,b=2 
    var [a,b,c] = [1,2]                         // a=1,b=2,c=undefined
    var [a,b,c=0] = [1,2]                       // a=1,b=2,c=0
    var [a,,c] = [1,2,3]                        // a=1,c=3
    var [a,b,...c] = [1,2,3,4,5]                // a=1,b=2,c=[3,4,5] ...c 为剩余参数是个数组
    var {name,age} = {name:'张三',age:18}        // name='张三',age=18
    var {name,age,...other} = {name:'张三',age:18,sex:'男'} // name='张三',age=18,other={sex:'男'}
```
#### Promise对象*
1. Promise是什么？
2. Promise对象有什么用？
3. Promise对象的三种状态
4. Promise的静态(原型方法)方法有哪些?并说明特性
```typescript
/**
 * @Params  接受一个可迭代对象，返回一个Promise实例
 * 特点: 1. 返回的Promise实例会等待所有Promise实例都完成(全部resolve)，或者第一个Promise实例失败。
 *       2. 如果传入的Promise实例中存在失败的Promise实例哪怕一个，返回的Promise实例会失败。
 * */ 
Promise.all()

/**
 *  竞速原则
 *  只会返回最先完成的promise,他不在乎结果的成功或者失败
 * */
Promise.race()
/**
 * 1.若传入非Promise值（如原始值、对象），会直接返回一个 fulfilled 状态的 Promise，其结果为该值。
 *   Promise.resolve(42).then(val => console.log(val)); // 输出: 42
 * 
 * 2. 传递 Promise 时直接返回 ，若传入一个 Promise 对象，则原样返回该 Promise（无额外处理）。
 *   const p = new Promise(resolve => resolve(100)); console.log(Promise.resolve(p) === p); // true
 *   
 *   常见的用途
 * */
Promise.resolve()
Promise.reject()
```

5. Promise的实例方法有哪些?并说明特性
```typescript
ES6
/**
 * then()方法返回一个 Promise，并且处理 Promise 的结果。
 * then()方法接收两个参数：onFulfilled 和 onRejected。
 * new Promise((resolve, reject)=>{}).then(onFulfilled=>{}, onRejected=>{}).
 * */ 
Promise.prototype.then() // 使用频繁
/**
 * 处理 Promise 的失败状态（rejected）
 * 捕获 throw 或 reject() 抛出的错误
 * promise.then(res =>{}).catch(err =>{ log("请求失败，异常报错") })
 * */
Promise.prototype.catch()  // 使用频繁
/**
 * 无论是请求失败还是请求成功，都会执行
 * 主要是用于请求结束的回调，关闭loading/提示信息
 * promise.then(res =>{}).finally(()=>{ log("请求结束") })
 * */ 
Promise.prototype.finally()// 使用频繁


ES2020
/**
 * 这个为补充不常用，
 * 等待所有 Promise 完成（无论成功/失败）
 * 返回结果数组包含每个 Promise 的状态和值
 * */ 
Promise.prototype.allSettled()


ES2021

/**
 * 当任意一个 Promise 成功时立即解决
 * 全部失败时抛出 AggregateError
 * */ 
Promise.prototype.any()

```
6. Promise拓展
ES6的promise对象实现了PromiseA+的规范,PromiseA+规范中规定了，只要实现了一个then方法，三种状态的函数或者对象都是Promise对象。
promiseA+规范：[PromiseA+规范网址](https://promisesaplus.com)


#### async和await *
1. async和await是什么？
async和await是es6新特性，是两个关键字，async用于定义异步函数，await用于等待异步函数执行完成。
2. async和await如何实现的?
async和await本质是语法糖，async和await都是基于Promise对象和事件换行(event loop)实现的。
3. 补充
   1. async和await的优点<br/>
     显著提升代码可读性
   2. async和await的缺点<br/>
        1.大量的滥用async和await会导致操作变为串行(同步)，拖慢整体速度 <br/>
        2.资源消耗：<br/>
               (1)每个async函数都会生成一个promise对象和对应的函数执行上下文，大量的async函数会占用大量内存。<br/>
               (2)async和await的隐式promise转换和微任务调度式都会增加额外的cpu开销。



#### 模块化*
1. 模块化是什么？
    全称为ESModule(ECM)，是一种基于 JavaScript 的模块化规范(官方规范)。      


    标准化：语言原生支持，无需依赖第三方库。
    静态优化：支持 Tree Shaking 删除未使用代码
    作用域隔离：模块内变量天然私有，避免全局污染。
    异步加载：浏览器可并行下载模块，提升性能。
语法 

    export function add(a, b = 1) {}    import {add} from 'add.js'

拓展 

    AMD(RequireJS)和CommonJS
    不管AMD还是CommonJS,都不是官方的模块化规范，只是第三方库的实现,真正的官方模块化规范是ESModule(EMS)
    AMD语法：define([], function() {}) require([], function() {})
    CommonJS语法：module.exports = {} require()
    CommonJS和AMD差异及缺点：
        1.commonjs是同步的，AMD是异步的。
        2.commonjs是node环境,requirejs是浏览器环境。
    不管是amd还是commonjs，都无法完成treesharking移除模块中未使用的代码，因为浏览器的模块加载机制无法实现。
#### Proxy对象*
    代理对象，允许你创建一个对象的代理（Proxy），从而拦截并自定义该对象的基本操作
```typescript
//  基本用法
    var handle = {
        get(target,key,receiver){ /*读取属性时*/ 	},
        set(target,key,value, receiver){/*设置属性时*/ },
        deleteProperty(target,key, receiver){/*删除属性时*/},
        has(target,key,receiver){/* 判断属性是否存在时 */}
}
    var proxy = new Proxy(target,handle)

```
 1. Proxy对象对比Object.defineProperty()的优缺点
    (1). Proxy对象比Object.defineProperty()有这更高的性能、可读性、扩展性,更好的错误处理机制--->重点
    (2). Proxy对象解决了Object.defineProperty()无法监听数组的问题 --->重点
    (3). Proxy对象支持嵌套对象的代理，Object.defineProperty()无法实现 ----->重点
    (4). 兼容性：proxy->IE11以上支持, Object.defineProperty()->IE8以上支持
#### Reflect对象
    Reflect是一个内置对象，提供了一些静态方法，主要用来简化对象操作(常与proxy结合)。
```typescript
// 常用方法
    Reflect.get(target,key,receiver) // 读取属性
    Reflect.set(target,key,value,receiver) // 设置属性
    Reflect.deleteProperty(target,key) // 删除属性
    Reflect.has(target,key) // 判断属性是否存在
    Reflect.ownKeys(target) // 获取属性
    Reflect.deleteProperty(target, prop)//	删除属性
    Reflect.apply(target,thisArg,args) // 函数调用

```

#### 函数参数默认值
    
    函数参数默认值:在函数为传入某个参数时，使用默认值 fn(a = 1){log(a)// a=1 }  fn()
        1.默认值仅在 undefined 时生效, 如果传入了参数，则使用传入的参数.
        2.默认值可以是表达式或函数调用
        3.默认值在函数调用时按从左到右顺序求值，后参数的默认值可以引用前面的参数：
      
#### 展开与收集运算符
展开运算符 -作用：将`可迭代对象`(如数组、字符串、对象等)拆分为独立的元素。
收集 解构赋值时收集剩余值

        1.展开  a ={a:1,b:2} var b = {c:3,d:4}   var c = {...a,...b}
        2.收集参数  var [a,...c] = [1,2,3]  // a=1 c=[2,3]  var {a,...c} = {c:1,b:2,a:3}  // a=3, c={c:1,b:2} 
#### class
class是ES6 引入的`语法糖`，它基于JavaScript的`原型继承`提供了更清晰、更接近传统面向对象语言的语法，无法实现真正的类，只能模拟类，
比如多态中的重载，class是无法实现的，只能用对象模拟。
     
        1. constructor(){} 构造函数 初始化实例属性       constructor(){this.name = 'xx'} 
        2. 实例方法	 定义在原型上，共享给所有实例         say(){xxx}
        3. 静态方法	 定义在类本身，不能通过实例访问       static say(){xxx}
        4. 私有字段   #字段名 仅类内部访问               #count=0
        5. extends   实现继承继承                      class Dog extends Animal{}
        6. super     调用父类构造函数或者方法            super(name)

#### Map与Set数据结构
1. Map(映射) 储存健值对，key可以任意类型的值, 个人认为Map和Object的区别是Map的key可以是任意类型,而Object的key只能是字符串(es6之后Object的插入和读取顺序和插入顺序一致与map结构无异),
在频繁增删操作时性能远高于Object，文档介绍map在查找\插入\删除时接近O(1),而Object在查找\插入\删除时接近O(n)
2. Set(集合) 储存唯一值, Set的key只能是唯一的,Set的value只能是true,Set的特性： 集合中的元素都是唯一的，值可以时任意类型

常用API
 ```typescript
//     map
 var map = new Map()
map.set('name', '张三') // 添加元素
map.get('name') // 获取元素
map.delete('name') // 删除元素
map.clear() // 清空元素
map.has('name')// 判断元素是否存在 return boolean
map.size  // 获取元素个数 
map.forEach(item =>{})// 遍历元素

var set = new Set();
set.add('name') // 添加元素
set.delete('name') // 删除元素
set.clear() // 清空元素
set.has('name') // 判断元素是否存在 return boolean
set.size // 获取元素个数
set.forEach(function(value, key, ownerSet) {}) // 遍历元素

```
#### WeakMap与WeakSet数据结构
 WeakMap与Map、Object的数据结构类似，都是键值对的集合。
 1. 但是WeakMap的健值不能为原始是数据类型，只能是引用数据类型。
 2. WeakMap的健值是弱饮用被垃圾回收机制所回收。
 3. 不可遍历性: 没有size属性,也不支持keys()、values()、entries()或forEach()。
 4. 自动清理：当值对象被垃圾回收时，对应的WeakMap对象也会被回收。


WeakSet与Set、Array的数据结构类似。
1. WeakSet的健值不能为原始数据类型，只能是引用数据类型。
2. 值是弱引用：不会阻止垃圾回收（GC）回收值对象。
3. 不可遍历：没有 size 属性，也不支持迭代方法。
4. 自动清理：当值对象被垃圾回收时，会自动从集合中移除。

`WeakSet与WeakMap的优点:自动内存管理，避免内存泄漏`
`WeakSet与WeakMap的缺点:不能使用 size 属性，不能使用迭代方法。`

```typescript
var target = {a:1}
var map = new WeakMap();
map.set(target, 'value');
map.get(target)// 获取值
map.has(target)// 判断对象是否在集合中
map.delete(target) // 删除对象
map.clear() // 清空集合

var weakSet = new WeakSet();
weakSet.add(target) // 添加对象
weakSet.has(target) // 判断对象是否在集合中
weakSet.delete(target)// 删除对象
weakSet.clear() // 清空集合

```


#### Symbol对象
Symbol是ES6引入的一种原始数据类型，用于创建唯一且不可变的值，通常用作对象属性的键。

Symbol的特性

 1. 唯一性:每个Symbol()调用都会生成唯一的值。
 2. 不可变性: Symbol的值是不可变的，一旦创建，就无法改变。
 3. 非字符串类型: Symbol值不能用于属性名，只能用于对象属性的键。 

```typescript
const s1 = Symbol('s1') // 创建Symbol对象
Symbol.for('s2') // 创建Symbol对象 或者获取全局共享的Symbol对象
Symbol.keyFor(s1)// 返回对应Symbol对象的key(仅限for创建的Symbol对象)

```
#### Generator函数
可以暂停执行和恢复执行，用于实现异步编程和生成迭代序列。
