// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。


// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
//'12'  '12345'

//提示：
// 0 <= s.length <= 5 * 104
// s 由英文字母、数字、符号和空格组成


/**
 * @param {string} s
 * @return {number}
 */

    function lengthOfLongestSubstring(s:string) {
        let res:{[key:string]:number} = {}
        let _s:string[] = s.split("")
        for (let i = 0;i < _s.length;i++){
            let key = _s[i]
            if(res[key] == undefined){
                res[key] = i
            }else{
                return Object.keys(res).join("").length

            }
        }
    };
console.log(lengthOfLongestSubstring("pwwkew"))
