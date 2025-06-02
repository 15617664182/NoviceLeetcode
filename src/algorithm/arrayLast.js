/**
 *
 * 请你编写一段代码实现一个数组方法，使任何数组都可以调用 array.last() 方法，这个方法将返回数组最后一个元素。如果数组中没有元素，则返回 -1 。
 * 你可以假设数组是 JSON.parse 的输出结果。
 * */
// @ts-ignore
Array.prototype.last = function () {
    return this.length === 0 ? -1 : this[this.length - 1];
};
// @ts-ignore
console.log([1, 2, 3, { a: 1 }, 4].last());
