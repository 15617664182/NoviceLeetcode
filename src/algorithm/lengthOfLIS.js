// 最长递增子序列
/*
nums: 10 9  2  5  3  7   101 18
dp:   1  1  1  2  2  3   4   4
*@return number
* */
function lengthOfLIS(nums) {
    var n = nums.length;
    if (n === 0)
        return 0;
    // 每个数初始值为1
    var dp = new Array(n).fill(1); // [1,1,1,1,1,1,1,1]
    var result = 1;
    for (var i = 1; i < n; i++) {
        for (var j = 0; j < i; j++) {
            // 如果第二个数大于第一个数，将第二个数
            // nums[i] 代表当前数， nums[j]代表前面的所有数
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        result = Math.max(result, dp[i]);
    }
    return result;
}
lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);
function arrOfLIS(nums) {
    var result = [nums[0]]; // 是一个递增的
    var max = 1;
    for (var i = 1; i < nums.length; i++) {
        // 如果当前值小于目标数组最后一位，遍历result 找到合适数字替换
        if (nums[i] <= result[result.length - 1]) {
            //可以是for循环直接遍历 for... 对比找到当前值大于的一项直接替换 直接break循环 这里不实现 选择使用二分查找
            //二分
            var l = 0;
            var r = result.length - 1;
            while (l <= r) {
                var mid = ~~((l + r) / 2);
                // resultMid > 当前值，证明目标值在左侧区间,将右侧指针移动到mid-1位置
                if (result[mid] > nums[i]) {
                    r = mid - 1;
                }
                else if (result[mid] < nums[i]) { // resultMid<当前值,res在右侧,将左侧指针l移动到mid+1的位置
                    l = mid + 1;
                }
                else { // 如果相等
                    l = mid;
                    break;
                }
            }
            result[l] = nums[i];
        }
        else {
            result.push(nums[i]);
        }
    }
    return result;
}
// console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))
console.log(arrOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
// 二分查找法
//
function search(array, target) {
    var arr = array.sort(function (a, b) { return a - b; });
    var left = 0;
    var right = array.length - 1;
    var mid = Math.floor(array.length / 2);
    if (target === array[mid]) {
        return mid;
    }
    else if (target > arr[mid]) {
        // search()
    }
    else {
        //
    }
}
// search([14,5,6,7,8,9,10,2,3,11],8)
