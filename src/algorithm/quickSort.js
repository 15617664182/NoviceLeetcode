// 快速排序
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var p = arr[0];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < p) {
            left.push(arr[i]);
        }
        if (arr[i] > p) {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(p, quickSort(right));
}
console.log(quickSort([23, 5, 1, 2, 34, 56, 7, 8, 9]));
