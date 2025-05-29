// 最长递增子序列
// function lengthOfLIS(nums) {
//     var n = nums.length;
//     if (n === 0)
//         return 0;
//     // 每个数初始值为1
//     var dp = new Array(n).fill(1);
//     var result = 1;
//     for (var i = 1; i < n; i++) {
//         for (var j = 0; j < i; j++) {
//             if (nums[i] > nums[j]) {
//                 dp[i] = Math.max(dp[i], dp[j] + 1);
//             }
//         }
//         console.log(result, dp[i]);
//         result = Math.max(result, dp[i]);
//     }
//     return result;
// }
// lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);
// console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))
