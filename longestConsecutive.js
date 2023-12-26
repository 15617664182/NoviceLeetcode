
/*
* 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
* 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
* 输入：nums = [100,4,200,1,3,2]
* 输出：4
* 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
* */
const nums  = [1,2,3,4,5,6,734,32,13,4,14,15,17,17,18,20,21,3,4,6,8,9,10,14,12,11]
var longestConsecutive = function(nums) {

    // 1. 去重
    let setNums = [...new Set(nums)]
    if(setNums.length <=1) return  setNums.length
    // 2. 排序
    const sortArr = setNums.sort((a,b) => a-b)
    let idx = [0]
    // 3. 声明一个最大长度
    var maxLength = 1
    var maxArr = []
    // 4. 遍历
    for(var i =1;i<sortArr.length ; i++){
        // 5. 连续的数字 max+1 不然就 中断最长连续序列重新排序
            if(sortArr[i]-1 === sortArr[i-1]){
                maxLength+=1;
                if(i == sortArr.length-1){
                    maxArr.push(maxLength)
                }
            } else{
                    if(i == sortArr.length-1 && maxArr.length == 0){
                        maxArr.push(sortArr.length)
                    }else{
                        maxArr.push(maxLength)
                        idx.push(i)
                        maxLength = 1
                    }

            }
    }
    return Math.max(...maxArr)
};
console.log("return",longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6]))
