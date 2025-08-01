// 归并排序
// 归并排序和快速排序一样，都是分治法的思想
function mergeSort(arr) {
    if (arr.length <= 1)
        return arr;
    var mid = Math.floor(arr.length / 2);
    var leftArr = arr.slice(0, mid);
    var rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}
function merge(leftArr, rightArr) {
    var result = [];
    var lefIdx = 0;
    var rightIdx = 0;
    while (lefIdx < leftArr.length && rightIdx < rightArr.length) {
        if (leftArr[lefIdx] < rightArr[rightIdx]) {
            result.push(leftArr[lefIdx]);
            lefIdx++;
        }
        if (leftArr[lefIdx] > rightArr[rightIdx]) {
            result.push(rightArr[rightIdx]);
            rightIdx++;
        }
    }
    return result.concat(leftArr.slice(lefIdx), rightArr.slice(rightIdx));
}
console.dir(mergeSort([2, 3, 10, 6, 11, 5, 4, 1]));
