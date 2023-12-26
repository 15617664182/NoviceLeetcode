
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
let arr = [2,6,8,5,4,3,1]
 function twoSum(nums, target) {
    const preNum = {} // {2:0,6:1,8:2}
    for (let i = 0;i<nums.length;i++){
        let targetNum = target - nums[i]  // 需要 找到的数字 9
        let targetIdx = preNum[targetNum] // 判断preNum中有没有目标元素，undefined
        if(targetIdx == undefined){
            // 如果说 目标下标 不存在 则将 value：idx 存入
            preNum[nums[i]] = i
        }else{
            // 如果说 目标下标存在  证明 当前元素 加上target元素存在，
            return [preNum[targetNum],i]
        }
    }
};

console.log(twoSum(arr,14))
