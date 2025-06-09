//给你一个字符串 s，找到 s 中最长的 回文 子串。
// 暴力破解 直接枚举全部可能然后取最长子串
var longestPalindrome = function (s) {
    if (s.length <= 1) {
        return s;
    }
    var max = s.slice(0, 1);
    for (var idx = 0, r = idx + 1; idx < s.length; idx++) {
        while (r <= s.length) {
            var str = s.slice(idx, r);
            if (str === str.split('').reverse().join('')) {
                max = max.length > str.length ? max : str;
            }
            ++r;
        }
        r = idx + 1;
    }
    return max;
};
console.log(longestPalindrome("cbbd"));
// 中心扩散
var longestPalindrome2 = function (s) {
    if (s.length < 2) {
        return s;
    }
    var max = 1;
    var arr = s.split("");
    var start = 0;
    for (var i = 1; i < arr.length; i++) {
        var l = i, r = i + 1;
        //向左边扩散
        while (l >= 0 && arr[l] == arr[i]) {
            // 第一种情况  aba
            l--;
        }
        // 向右边扩散
        while (r < arr.length && arr[r] == arr[i]) {
            r++;
        }
        // 向两边扩散
        while (l >= 0 && r < arr.length && arr[l] == arr[r]) {
            l--;
            r++;
        }
        if (r - l - 1 > max) {
            max = r - l - 1;
            start = l;
        }
    }
    return s.substring(start + 1, start + max + 1);
};
console.log(longestPalindrome2("ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy"));
