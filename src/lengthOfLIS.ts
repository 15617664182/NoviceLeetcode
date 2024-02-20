// 最长递增子序列

function lengthOfLIS(nums: number[]): number {
  const n = nums.length;
  if (n === 0) return 0;
  // 每个数初始值为1
  const dp:number[] = new Array(n).fill(1); // [1,1,1,1,1,1,1,1]
  var result:number = 1;
  for (var i:number = 1 ; i<n;i++){
      for(var j:number =0;j<i;j++){
          // 如果第二个数大于第一个数，将第二个数
          if(nums[i]>nums[j]){
              dp[i]=Math.max(dp[i],dp[j]+1)
          }
      }
      console.log(result,dp[i])
      result = Math.max(result,dp[i])
  }

  return result
}
lengthOfLIS([10,9,2,5,3,7,101,18])
// console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))

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

search([14,5,6,7,8,9,10,2,3,11],8)
