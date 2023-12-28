// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
// 返回容器可以储存的最大水量。
// 说明：你不能倾斜容器。

/**
 * 解题思路：
 * 1. 双指针法
 * 2. 双指针法，优化空间复杂度
 * 3. 单调栈
 *
 * */
var maxArea = function(height:number[]):number {
    let ans:number = 0; // 缓存最大面积
    for (var i:number = 0, j:number = height.length-1; i<j;){
        // 判断当前面积是否大于缓存面积，如果大于 则更新缓存面积，并将指针向中间移动，如果小于，则将指针向两边移动
        ans = Math.max(ans,Math.min(height[i],height[j]) *(j-i))
        height[i] < height[j] ? i++ : j--;
    }
    return ans
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]))
