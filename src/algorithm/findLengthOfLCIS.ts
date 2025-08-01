/*
 * @Description:最长连续递增序列
 * @Author: smile
 * @Date: 2025-06-03 16:00:10
 * @LastEditors: smile
 */

/**
 * 给定一个未经排序的整数数组，找到最长且 连续递增的子序列，并返回该序列的长度。
 * 连续递增的子序列 可以由两个下标 l 和 r（l < r）确定，如果对于每个 l <= i < r，
 * 都有 nums[i] < nums[i + 1] ，那么子序列 [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] 就是连续递增子序列。
 * */


/**
 * findLengthOfLCIS的时间复杂度 O(n)
 * findLengthOfLCIS的空间复杂度 O(1)
 * 典型的贪心算法
 * 1. 创建一个变量 l 默认为1
 * 2. 创建一个变量 max 默认为1
 * 3. 遍历数组，如果当前元素大于前一个元素，l+1，否则l=1
 * 4. 遍历结束后，返回max
 * */
function findLengthOfLCIS( nums:number[]) {
    if(nums.length <=1) {
        return nums.length;
    }
    let  l:number = 1;
    let max :number = 1;
    for (let i:number = 1;i<nums.length;i++){
        l = nums[i] > nums[i - 1] ? l+1 : 1;
        max = Math.max(l, max);
    }
    return max;
}
