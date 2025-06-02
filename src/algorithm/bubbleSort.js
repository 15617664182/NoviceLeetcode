// 冒泡排序
/**
 *
 * [12,3,1,4,5,6,7,78,5]
 * [3,1,4,5,6,7,12,5,78]     i = 0   j循环得出的结果，循环了8次
 * [1,3,4,5,6,7,5,12,78]     i =1   j循环得出的结果，循环了7次
 * [1,3,4,5,6,5,7,12,78]     i =2    j循环得出的结果，循环了6次
 *
 * 每循环一次，就能确定一个最大值或者最小值
 * */
function bubbleSort(arr) {
    // i 每循环一次，就能确定一个最大值
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            // 左侧大于右侧，交换位置
            if (arr[j] > arr[j + 1]) {
                // 记录小的值
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([12, 3, 1, 4, 5, 6, 7, 78, 5]));
