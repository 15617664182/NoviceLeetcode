function lengthOfLongestSubstring(s) {
    // 1 2 2 4 6 1 8
    var max = 0, leng = s.length, list = new Set();
    for (var idx = 0, l = 0; idx < leng; idx++) {
        while (l < idx && list.has(s.charAt(idx))) {
            l++;
            list.delete(s.charAt(idx));
        }
        list.add(s.charAt(idx));
        max = Math.max(max, idx - l + 1);
    }
    return max;
}
console.log(lengthOfLongestSubstring("dvdf"));
