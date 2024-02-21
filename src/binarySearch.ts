// 二分法查找算法
// @ts-ignore
var arr:number[] = [1, 2, 3, 4, 7, 8, 9, 10];

// 递归实现二分查找
function binarySearch(arr: number[], target: number, left:  number, right: number) {
    left = left  ? left : 0;
    right = right ? right : arr.length - 1;
    // 数组为空 返回-1
    if(arr.length === 0) return -1;

    // 定义中间位置
    var minIndex:number = Math.floor((left + right) / 2);
    var minVal = arr[minIndex];
    // 如果相遇,证明数组中没有该项 返回-1
    if(right === left ) return -1;
    if(minVal > target){ // 在左侧数组return binarySearch(arr, target, left, minIndex - 1);
    }else if(minVal < target){// 在右侧数组
      return  binarySearch(arr, target, minIndex + 1, right)
    }else if(minVal === target){ // 查找到正确结果 或者没有合适结果
        return  minIndex;
    }
}

// console.log(binarySearch(arr,6))

