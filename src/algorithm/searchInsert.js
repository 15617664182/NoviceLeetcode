// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
//
// 请必须使用时间复杂度为 O(log n) 的算法。

var searchInsert = function(nums, target) {
    var l =0,
        r=nums.length-1,
        mid=~~((r-l)/2)
    while (l <= r){
            mid = ~~((r-l)/2)+l
            // 在mid 和 r 中间
            if(target>nums[mid]){
                l = mid + 1
                // 在mid 和 l 中间
            }else if( target < nums[mid]){
                r = mid-1
            }else{
                l = mid
                break;
            }
    }
    return l
};
