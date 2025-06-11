/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows <= 1) {
        return s;
    }
    var resArr = new Array(numRows).fill("");
    var moveIdx = 0;
    var down = true; //是否继续下降
    for (var i = 0; i < s.length; i++) {
        resArr[moveIdx] += s[i];
        if (down) {
            moveIdx++;
            if (moveIdx == numRows - 1) {
                down = false;
            }
        }
        else {
            moveIdx--;
            if (moveIdx === 0) {
                down = true;
            }
        }
    }
    return resArr.join("/r");
};
console.log(convert('PAYPALISHIRING', 3));
