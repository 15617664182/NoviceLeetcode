

/*
* 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
假设环境不允许存储 64 位整数（有符号或无符号）。
示例 1：
输入：x = 123
输出：321
示例 2：
输入：x = -123
输出：-321
示例 3：
输入：x = 120
输出：21
示例 4：
输入：x = 0
输出：0
* */

var reverse = function (x:number) {
    var result = 0;//102
    while (x!=0){
        let digit = 0;
        // 最后一位数   -102%10 =  -2  digit = -2
        digit = x % 10; // -2
        // ~~ 符号为取整 ===  ~~(-10.2) = -10
        x = ~~(x/10);
        result = result*10 + digit;
        // 确定边界
        if(result < Math.pow(-2,31) || result >(Math.pow(2,31)-1)){
            return 0
        }
    }
    return result;
}
