//给你一个字符串 s，找到 s 中最长的 回文 子串。



// 暴力破解 直接枚举全部可能然后取最长子串
var longestPalindrome = function(s:string):string|null {
    if(s.length <= 1){
        return s
    }
    var max = s.slice(0,1)
    for(let idx=0, r = idx+1;idx < s.length;idx++){
        while(r <= s.length){
            var str = s.slice(idx,r)
            if(str === str.split('').reverse().join('')){
                max = max.length > str.length ? max : str
            }
            ++r
        }
        r=idx+1
    }
    return max
};
console.log(longestPalindrome("cbbd"))
// 中心扩散
let longestPalindrome2=  (s:string):string => {
    if(s.length<2){
        return s
    }
    let max:number = 1
    let start =0;
    for (let i =1;i < s.length;i++){
        let l:number = i,
            r:number = i+1
        //向左边扩散
        while (l >= 0  && s.charAt(l)==s.charAt(i)){
            l--
        }
        // 向右边扩散
        while (r < s.length  && s.charAt(r) ==s.charAt(i)) {
            r++
        }
        // 向两边扩散
        while (l >= 0 && r < s.length && s.charAt(l)==s.charAt(r)){
            l--
            r++
        }
        // l 最后一次的位置是正确回文坐标的右侧一个,即l+1
        // r 最后一次的位置是正确回文坐标的右侧一个，即r-1
        // length就是->  r-1-l-1  +1
        if(r-l-1>max){
            max=r-l-1
            start = l
        }

    }
    return s.substring(start+1,start+max+1)
}


function test(){
    console.log("longestPalindrome----",longestPalindrome("ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy"))
    console.log("longestPalindrome2---",longestPalindrome2("ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy"))
}
