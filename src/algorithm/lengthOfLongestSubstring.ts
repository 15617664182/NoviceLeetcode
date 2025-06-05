

function lengthOfLongestSubstring(s: string){
    // 1 2 2 4 6 1 8
    let max:number = 0,
        list:Set<string> = new Set();
    for (let idx =0,l=0;idx<s.length;idx++){
        while (l < idx && list.has(s.charAt(idx))){
           l++;
           list.delete(s.charAt(idx));
        }
        list.add(s.charAt(idx));
        max = Math.max(max,idx-l+1)
    }
    return max;
}

console.log(lengthOfLongestSubstring("dvdf"))
