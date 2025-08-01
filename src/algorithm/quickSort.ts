// 快速排序
/**
 * 实现思路：
 * 1. 从数组中取出一个元素，作为基准元素。
 * 2. 将所有比基准元素小的元素放到基准元素的左边，所有比基准元素大的元素放到基准元素的右边。
 * 3. 进行递归， 最后将基准元素放到合适的位置上。
 * */


function quickSort(arr:number[]):number[]{
    if(arr.length<=1){
        return arr
    }
    var p = arr[0]
    var left = []
    var right = []
    for(var i = 0;i<arr.length;i++){
        if(arr[i]<p){
            left.push(arr[i])
        }
        if(arr[i]>p){
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(p,quickSort(right))
}

console.log(quickSort([23,5,1,2,34,56,7,8,9]))
