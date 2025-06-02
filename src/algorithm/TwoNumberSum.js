// 两数之和
//给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。
// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
// 输入：nums = [3,2,4], target = 6
// 输出：[1,2]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var arrs = [2, 6, 8, 5, 4, 3, 1];
function twoSum(nums, target) {
    // 使用对象
    // 时间复杂度 O(n)
    // 空间复杂度O(1)
    var preNum = {}; // {2:0,6:1,8:2}
    for (var i = 0; i < nums.length; i++) {
        var targetNum = target - nums[i]; // 需要 找到的数字 9
        var targetIdx = preNum[targetNum]; // 判断preNum中有没有目标元素，undefined
        if (targetIdx == undefined) {
            // 如果说 目标下标 不存在 则将 value：idx 存入
            preNum[nums[i]] = i;
        }
        else {
            // 如果说 目标下标存在  证明 当前元素 加上target元素存在，
            return [preNum[targetNum], i];
        }
    }
}
// 使用双指针思想
var arr2 = [2, 4, 5, 6, 8, 9, 12, 14];
// 给定数据必须为生序
function twoSums(nums, target) {
    /**
     * 如果两个指针指向元素的和 sum == target，那么得到要求的结果；
     * 如果 sum > target，移动较大的元素，使 sum 变小一些；
     * 如果 sum < target，移动较小的元素，使 sum 变大一些。
     * */
    var left = 0;
    var right = nums.length - 1;
    var result = [];
    while (left < right) {
        console.log(left, right);
        if (nums[left] + nums[right] == target) {
            result = [left, right];
            break;
            // 结果 > 目标
        }
        else if (nums[left] + nums[right] > target) {
            --right;
        }
        else { // 结果<目标
            ++left;
        }
    }
    return result;
}
// console.log(twoSum(arrs,14))
console.log(twoSums(arr2, 15));
