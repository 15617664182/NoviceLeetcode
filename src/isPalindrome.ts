// 力扣  判断是不是回文
var isPalindrome = function (x:any):boolean {
    var arr = (" "+x).split("").reverse()
    return arr.join("") == (""+x).split("").join("")
}

console.log(isPalindrome(121))
