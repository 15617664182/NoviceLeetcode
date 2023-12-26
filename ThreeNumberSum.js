// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
// 你返回所有和为 0 且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。
/*
* 输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
解释：
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
注意，输出的顺序和三元组的顺序并不重要。
* */
var threeSum = function(nums) {
    var res = [];
    const len = nums.length
    if(len <= 3 ) return nums;
    nums.sort((a,b)=>a-b)
    // 确保 左右侧为负数 和 正数
    if(nums[0]<=0 && nums[len-1]>=0){
        var i = 0;
        while (i < len -2 ){
            var fast = i+1;
            var end  = len-1;
        }
    }
    return res
};
threeSum([-1,0,1,2,-1,-4])
