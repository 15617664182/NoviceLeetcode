function deepClone(target, hash = new WeakMap()) {
    //非空校验
    if(target === null || typeof target !== 'object'){
        return target;
    }
    // 避免重复克隆
    if(hash.has(target)){
        return hash.get(target)
    }
    var res =  isObject(target) ? {} : []
    Reflect.ownKeys(target).map(el =>{
        if(target[el] instanceof RegExp){
            res[el] = new RegExp(target[el])
        }else if(target[el] instanceof Date){
            res[el] = new Date(target[el])
            // 。。。
        }else if(isObject(target[el])){
            res[el] = deepClone(target[el],hash)
        }else{
            res[el] = deepClone(target[el],hash)
        }
    })
    return res
}
// 判断是否为对象
function isObject(target){
    return target !== null && typeof target === 'object'
}
var obj ={
    a:1,
    b:2
}
var date = new Date()
var arr = {
    "name":'123',
    age:123,
    obj:obj,
    time:date,
    say:function(){
        console.log('123')
    }
}
// console.log(deepClone(arr).time == arr.time)
// console.log(arr)
