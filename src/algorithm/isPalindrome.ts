// 力扣  判断是不是回文
var isPalindrome = function (x:any):boolean {
    var arr = (" "+x).split("").reverse()
    return arr.join("") == (""+x).split("").join("")
}


// 简单题复杂做法， 双指针移动 如果移动完后不一致即为非回文数
var isPalindrome2 = function (x:Number):boolean {
    var str:String = x.toString();
    var res :boolean = true
    var l:number =0
    var r :number = str.length-1
    while (r>l){
        console.log(str.charAt(l),str.charAt(r));
        if(str.charAt(l)!=str.charAt(r)){
            res = false
            break;
        }
        l++
        r--
    }
    return res
}

// console.log(isPalindrome(121))

console.log(isPalindrome2(10));
