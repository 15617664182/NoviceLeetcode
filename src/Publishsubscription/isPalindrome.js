var isPalindrome = function (x) {
    var arr = (" " + x).split("").reverse();
    return arr.join("") == (" " + x).split("").join("");
};
console.log(isPalindrome(121));
