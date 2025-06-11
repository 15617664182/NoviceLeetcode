/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

/**
 * 理解题目
 *  ABCDEFGHIGK。  numRows 3  从下往上 从上往下添加 在从上往旭啊
 * 1   5   9
 * 2 4 6 8 10
 * 3   7   11
 *
 * return 1592468103711
 * */
var convert = function(s:String, numRows:number):String {
        if(numRows <=1){
            return s
        }
        const resArr = new Array(numRows).fill("");
        let moveIdx = 0;
        let down:boolean = true;  //是否继续下降
        for (let i = 0;i< s.length;i++){
            resArr[moveIdx] += s[i];
            if(down){
                moveIdx++
                if(moveIdx == numRows -1) {
                    down = false
                }
            }else{
                moveIdx--
                if(moveIdx === 0){
                    down=true
                }
            }
        }
    return  resArr.join("");
};
console.log(convert('PAYPALISHIRING',3))
