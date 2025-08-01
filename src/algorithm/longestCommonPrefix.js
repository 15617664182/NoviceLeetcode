// 如果不存在公共前缀，返回空字符串 ""。
// 示例 1：
// 输入：strs = ["flower","flow","flight"]
// 输出："fl"
// 示例 2：
//
// 输入：strs = ["dog","racecar","car"]
// 输出：""
// 解释：输入不存在公共前缀。
// 我的思路。取出最短len， 遍历对比， 一个记录正确的len
var longestCommonPrefix = function (strs) {
    if (strs.length <= 0)
        return '';
    var minLen = 0;
    var current = -1;
    for (var i = 0; i < strs.length; i++) {
        minLen = Math.max(strs[i].length, minLen);
    }
    for (var idx = 0, mark = false; idx < minLen; idx++) {
        current += 1;
        for (var crr = 0; crr < strs.length; crr++) {
            if (mark === false) {
                mark = strs[crr].charAt(idx);
            }
            else {
                if (strs[crr].charAt(idx) !== mark) {
                    console.log(strs[crr].charAt(idx), mark);
                    return current == 0 ? '' : strs[0].split("").slice(0, current).join("");
                }
            }
        }
    }
    console.log(current);
    return strs[0].split("").slice(0, current).join("");
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog","racecar","car"]))
