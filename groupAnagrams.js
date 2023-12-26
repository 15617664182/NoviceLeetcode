/*
* 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
* 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。
* 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
* 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
* */
const  groupAnagrams = function(strs) {
    let map  = new Map();
    let res = []
    strs.forEach(item=>{
        if(!map.has(item.split('').sort().join(""))){
            map.set(item.split('').sort().join(''),[item])
        }else{
            map.set(item.split('').sort().join(''),[...map.get(item.split('').sort().join('')),item])
        }
    })
    for ( var [key,val] of map){
        res.push(val)
    }
    return res.sort((a,b)=> a.length-b.length)
};
