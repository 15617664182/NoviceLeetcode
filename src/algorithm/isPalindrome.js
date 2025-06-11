// 力扣  判断是不是回文
var isPalindrome = function (x) {
    var arr = (" " + x).split("").reverse();
    return arr.join("") == ("" + x).split("").join("");
};
var isPalindrome2 = function (x) {
    var str = x.toString();
    var res = true;
    var l = 0;
    var r = str.length - 1;
    while (r > l) {
        console.log(str.charAt(l), str.charAt(r));
        if (str.charAt(l) != str.charAt(r)) {
            res = false;
            break;
        }
        l++;
        r--;
    }
    return res;
};
// console.log(isPalindrome(121))
console.log(isPalindrome2(10));
