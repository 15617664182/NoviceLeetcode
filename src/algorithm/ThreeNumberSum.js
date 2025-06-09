// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
// 你返回所有和为 0 且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。
/*
* 输入：nums = [-1,0,1,2,-1,-4] -- l mind r  -4 -1 -1 0 1 2
输出：[[-1,-1,2],[-1,0,1]]
解释：
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
注意，输出的顺序和三元组的顺序并不重要!!!!。
* */
var threeSum = function (nums) {
    if (nums.length < 3) {
        return [0];
    }
    var arr = nums.sort(function (a, b) { return a - b; });
    console.log(arr);
    var res = [];
    for (var i = 0; i < nums.length; i++) {
        var l = i + 1;
        var r = arr.length - 1;
        // -1 -1 跳过  i 去重
        if (i > 0 && arr[i] == arr[i - 1]) {
            continue;
        }
        while (l < r) {
            if (arr[i] + arr[r] + arr[l] > 0) {
                r--;
            }
            else if (arr[i] + arr[r] + arr[l] < 0) {
                l++;
            }
            else {
                res.push([arr[i], arr[l], arr[r]]);
                l++;
                while (l < r && arr[l] == arr[l - 1]) {
                    l++;
                }
            }
        }
    }
    return res;
};
console.log(threeSum([2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2, 0, 2, -4, 5, 5, -10]));
