// 最长递增子序列



/*
思路:
将nums[0] 初始为 res[0]
循环遍历nums 如果 num[i]>result[result.length - 1](result最后一位) 直接讲nums[i]添加进最后一位
遍历result数组，将它和合适的值替换
nums: 10 9  2  5  3  7   101 18
dp:   1  1  1  2  2  3   4
//  [
    [2],
    [2,3],
    [2,3,7]
    [2,3,7,101]
]
var cur = nums[i],depEnd = dep[dep.length -1]
i:1->9 depEnd < cur -> dep[0] = 9
  2->2 depEnd < cur -> dep[0] = 2
  3->5 depend < cur -> dep.push(5) -- [2,5]
  4->3 depEnd > cur ->handle()  -- [2,3]
  5->7 depEnd < cur -> dep.push(7) -- [2,3,7]
*@return number
* */
function lengthOfLIS(nums: number[]): number {
  const n = nums.length;
  if (n === 0) return 0;
  // 每个数初始值为1
  const dp:number[] = new Array(n).fill(1); // [1,1,1,1,1,1,1,1]
  var result:number = 1;
  for (var i:number = 1 ; i<n;i++){
      for(var j:number =0;j<i;j++){
          // 如果第二个数大于第一个数，将第二个数
          // nums[i] 代表当前数， nums[j]代表前面的所有数
          if(nums[i]>nums[j]){
              dp[i]=Math.max(dp[i],dp[j]+1)
          }
      }
      result = Math.max(result,dp[i])
  }

  return result
}
lengthOfLIS([10,9,2,5,3,7,101,18])
function arrOfLIS(nums:number[]):number[]{
    var result:number[] = [nums[0]]// 是一个递增的
    for (var i:number=1;i<nums.length;i++){
        // 如果当前值小于目标数组最后一位，遍历result 找到合适数字替换
        if(nums[i]<=result[result.length-1]){
            //可以是for循环直接遍历 for... 对比找到当前值大于的一项,并且小于下一项，直接替换 直接break循环 这里不实现 选择使用二分查找
            //二分
            let l:number = 0
            let r:number= result.length-1
            while (l <= r){
                let mid = ~~((l+r)/2)
                // resultMid > 当前值，证明目标值在左侧区间,将右侧指针移动到mid-1位置
                if(result[mid]>nums[i]){
                    r = mid - 1
                }else if(result[mid]< nums[i]){// resultMid<当前值,res在右侧,将左侧指针l移动到mid+1的位置
                    l = mid + 1
                }else {// 如果相等
                    l = mid
                    break
                }
            }
            result[l] = nums[i]
        }else{
            result.push(nums[i])
        }
    }
    return  result
}
// console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))
console.log(arrOfLIS([10,9,2,5,3,7,101,18]))

// 二分查找法
//
function search(array:number[],target:number){
var arr = array.sort((a,b)=>a-b)
    var left:number = 0
    var right:number = array.length -1;
    var mid:number = Math.floor(array.length/2)
    if(target === array[mid]){
        return mid
    }else if(target > arr[mid]){
        // search()
    }else {
    //
    }

}

// search([14,5,6,7,8,9,10,2,3,11],8)
