/**
 * 请你编写一个函数，它接收另一个函数作为输入，并返回该函数的 记忆化 后的结果。
 * 记忆函数 是一个对于相同的输入永远不会被调用两次的函数。相反，它将返回一个缓存值。
 * 你可以假设有 3 个可能的输入函数：sum 、fib 和 factorial 。
 *  sum 接收两个整型参数 a 和 b ，并返回 a + b 。
 *  fib 接收一个整型参数 n ，如果 n <= 1 则返回 1，否则返回 fib (n - 1) + fib (n - 2)。
 *  factorial 接收一个整型参数 n ，如果 n <= 1 则返回  1 ，否则返回 factorial(n - 1) * n 。
 * */

/**
 * @param {Function} fn
 * @return {Function}
 *
 * 解题思路
 * 利用map数据结构的set方法，将函数的返回值缓存起来，当再次调用时，直接从缓存中获取，不再执行函数， has方法可以判断是否存在 get方法可以获取缓存的值
 * 注意：
 * 1. 缓存的key是函数的参数，所以需要先将参数转化为字符串
 * 2. 缓存的value是函数的返回值
 */


type Fn = (...params:any)=>any;
function Memoize(fn:Fn):Fn {
    var cache:Map<number,string> = new Map<number,string>();
    return function(...args:any[]) {
        var key:any = JSON.stringify(args)
        if(!cache.has(key)){
            cache.set(key,fn(...args))
        }
        return cache.get(key)
    }
}

