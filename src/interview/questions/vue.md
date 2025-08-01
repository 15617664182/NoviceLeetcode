##### 讲一下vue2&vue3的响应式原理
1. vue2:
```text
vue2的响应式原理: 通过Object.defineProperty()进行数据劫持结合观察者模式实现数据监听和视图更新。
收集依赖是通过getter实现的，当数据被访问时，会触发getter，从而调用observer的addDep方法，将当前订阅者添加到该属性的依赖列表中。
触发依赖的原理: 通过setter实现的，当数据被修改时，会触发setter，从而调用observer的notify方法，通知所有的订阅者，更新视图。
```
2. vue3:
```text
vue3的响应式原理: 通过Proxy实现数据监听和视图更新。
当数据发生变化时，会触发getter，从而调用reactiveEffect的run方法，通知所有的订阅者，更新视图。
收集依赖是在创建reactiveEffect实例触发getter时，通过track方法收集依赖。
触发依赖是在setter中，通过trigger方法触发依赖，即执行对应key的所有activeEffect函数
```
##### 讲一下vue2&vue3的diff算法原理
1. vue2:
```text
    vue2的diff算法: 头对头比较，头对尾比较，尾对尾比较，尾对头比较，暴力比较。 
```
2. vue3:
```text
vue3的diff算法:  头对头比较，尾对尾比较，
```
##### 讲一下vue2&vue3的render函数
##### 如何实现
##### 
##### 
##### 
##### 
