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

var longestCommonPrefix = function(strs:string[]):string|undefined|null|"" {
    var s0 = strs[0]
    if(strs.length<=0) return ''
   for (var crr =0;crr<s0.length;crr++){//遍历所有的当前元素
       var current = s0.charAt(crr);
       for (var idx =1;idx<strs.length;idx++){
           //  如果当前下标是任意一项的最大值 证明可以反回  当前值就是最大序列
           //  如果当前项 第一项的
           if(crr==strs[idx].length|| current != strs[idx].charAt(crr)){
               return s0.substring(0,crr)
           }
       }
   }
    return s0
};
console.log(longestCommonPrefix(["flower","flow","flight"]))
