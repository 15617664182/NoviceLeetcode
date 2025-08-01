// 数组的方法
var arr = [1,2,6,7,8,9,10,3,4,5];
var arr1 = [1,2,3,4,5,6,7,8,9,10];
//   *改变愿数组
arr.forEach(el => console.log(el))
// 返回一个映射数组
arr.map(el => el * 2)

// 返回一个过滤数组  满足条件的
arr.filter(e =>e)

// 返回一个数组的累加
arr.reduce((pre,curr)=>{
    return pre + curr;
},0)



// 返回一个数组的排序  *改变原数组

arr.sort((a,b) => a - b)// 从小到大
arr.sort((a,b)=> b - a) // 从大到小

// 数组的合并 返回一个合并的数组
var resContent = arr1.concat(arr);
// 数组的分割
arr.splice(start,num)

arr.some()
arr.every()
// 从队尾添加  *改变原数组
arr.push()
// 从队头添加    *改变原数组
arr.unshift()
// 从队尾删除  *改变原数组
arr.pop()
// 反转数组
arr.reverse()
// 数组连接
arr.join()
// 数组查找
arr.indexOf()
// 数组查找
arr.findIndex()
