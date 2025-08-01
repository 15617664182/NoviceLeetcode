var arr = ['苹果', '香蕉', '橘子']
var obj = {a:1,b:2,c:3}
Object.prototype.d = "4"
// for 循环 用于便利遍数组， 便利对象需要使用Object.keys()进行转化， 直接遍历对象报错
// var objkeys =Object.keys(obj)
// for(var i =0;i<objkeys.length;i++){
//     console.log(objkeys[i],obj[objkeys[i]])
// }

// for in 语句是一种严格的迭代语句，用于枚举对象中的非symbol键属性(包括它的原型链上的可枚举属性)
// 会遍历原型上的属性 可以使用 hasOwnProperty()方法来判断是否是自己的属性
for (var i in obj){
    if(obj.hasOwnProperty(i)){
        console.log(i,obj[i])
    }
}
for (var i in arr){
    if(arr.hasOwnProperty(i)){
        console.log(i,arr[i])
    }
}


// for of 循环  遍历数组，可以通过object.keys转化遍历对象，直接遍历对象时会报错
for (var i of arr){
    // console.log(i)
}


 //总结： for in 遍历数组  for of 遍历对象
