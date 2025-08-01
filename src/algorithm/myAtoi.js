/**、
 * 解释：加粗的字符串为已经读入的字符，插入符号是当前读取的字符。
 * 带下划线线的字符是所读的内容，插入符号是当前读入位置。
 * 第 1 步："42"（当前没有读入字符，因为没有前导空格）
 *          ^
 * 第 2 步："42"（当前没有读入字符，因为这里不存在 '-' 或者 '+'）
 *          ^
 * 第 3 步："42"（读入 "42"）
 * @param {string} s
 * @return {number}
 */

//  me: 先trim  提取符号  然后while循环 当不是数字 || 指针大于length时 结束


// //  官方 -> 自动机 ->
// var myAtoi = function(s:String) {
//     var str = s.trim()
//     if(str.length<1) return 0;
//     var symbols =str.charAt(0)=='-';
//     var res =''
//     var l = symbols?1: 0
//     while ((l == 0||!isNaN(Number(str.charAt(l))))&&l<str.length){
//         res+=str.charAt(l)
//         l++
//     }
//     // @ts-ignore
//     return symbols ? -1*res :res
// };
//
// console.log(myAtoi('-0422.123'))
//  官方 -> 自动机 ->
var myAtoi = function(s) {
 class  Atoi{
     constructor() {//初始化
         // 当前的状态
         this.state = 'start'
         // 符号
         this.symbols = 1
         // 初始值
         this.res = 0
         // 含义。[执行阶段: [‘’,正负,数字,结束]]
         this.map = new Map([
             ['start', ['start', 'signed', 'in_number', 'end']],// 开始或者空格-> 下一位可以是 空格||符号||number
             ['signed', ['end', 'end', 'in_number', 'end']],// 符号 -> 下一位只能是数字
             ['in_number', ['end', 'end', 'in_number', 'end']],// 数字 -> 下一位只能是数字
             ['end', ['end', 'end', 'end', 'end']]// end ->结束
         ])
     }
     // 获取状态索引
     getIdx(str){
         if(str == ' '){ // 判断空值
             return 0;
         }else if('+-'.indexOf(str)>-1){ // 判断符号
             return 1;
         }else if( !isNaN(Number(str))){
             return 2;
         }else{// 不是' '  +- 数字
             return 3
         }
     }
     gets(char){
         // 改编state的状态
         this.state = this.map.get(this.state)[this.getIdx(char)];
         // 如果状态为in_number 计算
         if(this.state == 'in_number'){
             // 原来的数字*10 + 当前数字
             this.res = this.res*10 + (char-0)
             // 处理边界情况
             // 如果为正数。取2^31-1
             this.res = this.symbols == 1 ? Math.min(this.res,Math.pow(2,31)-1):Math.min(this.res,Math.pow(2,31))
         }else if(this.state == 'signed'){
             this.symbols = char == '-' ?-1:1
         }else {
             // 如果是end 不处理
         }
     }
 }
 var atoi = new Atoi();
 for (var idx = 0;idx<s.length;idx++){
     atoi.gets(s.charAt(idx));
 }

 return atoi.symbols*atoi.res
};

console.log(myAtoi('-0422.123'))
