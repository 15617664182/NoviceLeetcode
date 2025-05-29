// vue

// 核心思想 ： 组件化 MVVM
// MVVM 什么是 mvvm
/**
 * mvvm是一种设计模式， m - 视图层  v-数据层  vm视图模型， vm是核心
 * 优点： 可以实现视图层和数据层的解耦， 代码可读性高，可维护性高，可复用性高，可扩展性高
 * 缺点： bug难以被确定是view层还是model层，大型的应用程序视图状态越多，vm的构建和维护成就会增大
 * */

// 什么是组件化
/**
 * 将页面拆分成多个组件，每个组件之间相互独立，可以复用，可以扩展，可以维护
 * */
// 双向数据绑定
//  Object.defineProperty()结合观察者模式实现
// 涉及到的算法及设计模式
//   -1、 观察者模式设计模式
//   -2、 diff算法

// 状态管理
/**
 * Vuex
 * 1. store
 *    - 存放状态的仓库
 * 2. mutations
 *    - 用于修改状态的函数，不能进行异步操作
 * 3. actions
 *    - 用于触发mutations的函数，可以进行异步操作
 * 4. getters
 *    - 从store中派生出来的数据
 * 5. modules
 *    - 用于拆分store的模块，在较大的应用中 将各个模块的状态抽离出到相对应的模块中，方便管理
 *
 *   页面刷新会丢失，所以需要使用持久化存储，可以使用localStorage、sessionStorage、cookie、IndexedDB等
 *
 * */
// v2生命周期

/**
 * 1. beforeCreate  data初始化前           开始loading
 * 2. created       data初始化后           可以进行ajax请求
 * 3. beforeMount   页面挂载前
 * 4. mounted       页面挂在后
 * 5. beforeUpdate  数据更新前
 * 6. updated       数据更新后
 * 7. beDisposed    页面销毁前
 * 8. disposed      页面销毁后
 * 9. active        页面激活时
 * 10.actived       页面不激活时
 * */
// 常用api
/**
 * this.$nextTick  异步更新数据
 * this.$forceUpdate() 强制更新视图
 * this.$refs  获取元素
 *
 * */


// vue3 相对于vue2的变化
// vue3 中使用了composition api 替代了options api，更加符合了js的函数式编程思想，更便于封装， 可以将状态 逻辑 放在一起
// 便于维护，不像v2中 状态放在data中，逻辑放在methods中，当页面逻辑复杂时，造成代码难以阅读。


// 双向数据绑定
/**
 * vue3 中使用了 proxy替换了Object.defineProperty() 有着更好的性能，同时解决了 object.defineProperty() 无法监听数组下表 及无法监听 新添加对象属性的问题
 * 其中vue2中数组的push,  pop, shift, unshift, splice, sort, reverse 虽然实现了数据的监听，实质上是因为 源码中将这几个方法进行了重写
 * * v3数据双向绑定中  使用到一个算法  最长递增子序列
 * */
// 状态管理
  /**
   * vuex可以继续使用， 但是可以使用pinia代替，pinia被誉为vuex5，同时也是官方推荐的状态管理库
   * 用法与vuex 一致  但是剔除了mutations模块， action中中可以使用async/await异步操作 同时也可以修改state中的数据
   **/

// 生命周期
/**
 *   https://blog.csdn.net/m0_57341617/article/details/126426931?spm=1001.2014.3001.5501
 * */



// computed 和 watch的区别
/**
 * computed 依赖响应式，watch不依赖响应式
 * 应用场景：computed： 购物车总价计算    watch： 购物车数量变化时，购物车总价计算
 * 缓存： computed存在缓存，依赖数据发生变化才会重新计算， watch不会缓存，每次都会重新计算
 * 返回值 computed 必须有一个return  watch不需要
 *
 *
 *  补充
 * computed 可以直接在template中使用 而watch不能
 *
 * watch优缺点
 * 需要手动执行callback，监听多个数据时比较复杂
 *
 * computed优缺点
 * 不能监听数据对象的变化
 * 必须又返回值
 * */
