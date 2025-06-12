// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
//
// 有效字符串需满足：
//
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。
// 示例 1：
// 输入：s = "()"
// 输出：true
// 示例 2：
// 输入：s = "()[]{}"
// 输出：true
// 示例 3：
// 输入：s = "(]"
// 输出：false
// 输入：s = "([])"
// 输出：true
var isValid = function (s) {
    if (s.length <= 0)
        return true;
    var map = new Map();
    var res = true;
    for (var idx = 0; idx < s.length; idx++) {
        if (map.has(s.charAt(idx))) {
            map.delete(s.charAt(idx));
        }
        else {
            map.set(s.charAt(idx), 1);
        }
    }
    console.log(map.size, map);
    return map.size == 0;
};
console.log(isValid("(){}[]"));
