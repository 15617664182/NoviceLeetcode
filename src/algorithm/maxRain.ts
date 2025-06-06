/**
 * leetCode: 11
 * 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 返回容器可以储存的最大水量。
 * 说明：你不能倾斜容器。
 * 输入：[1,8,6,2,5,4,8,3,7]
 * 输出：49
 * */

var maxArea = function(height:number[]):number {
    if(height.length <1){
        return 0
    }
    var maxArea = 0,
        l=0,
        r=height.length-1;
    while (l < r){
        var curArea = Math.min(height[l],height[r]) * ( r - l )
        height[l] >= height[r] ? r--:l++;
        maxArea = Math.max(curArea,maxArea)
    }
    return maxArea
};
