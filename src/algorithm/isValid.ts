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
const isValid=(s:string):boolean=>{
    let leng = s.length;
    if(leng%2 == 1) return false
    var map = new Map();
    map.set("}","{")
    map.set(")","(")
    map.set("]","[")
    var stack =[] // 栈中只会存([{
    for(let i = 0;i<leng;i++){
        let c = s.charAt(i)
        // {[]}{} -> {[
        if(map.has(c)){//如果是右侧的）}] 判断栈顶是不是相对应的值，如果不是就没闭合
            if(!stack.length||stack[stack.length - 1]!= map.get(c)){
                return false
            }
            // 经过校验 证明是对称的符号，从栈顶删除
            stack.pop()
        }else{
            stack.push(c)
        }
    }
    // stack为空时 证明全部匹配完成
    return  !stack.length
}
console.log(isValid("(){}[]"))
