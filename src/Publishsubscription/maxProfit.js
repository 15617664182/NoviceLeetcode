// 暴力破解，可以实现，但超时
// function maxProfit(prices: number[]): any {
//   var max: number = 0
//   for (var i = 0; i < prices.length - 1; i++) {
//     for (var j = 1; j < prices.length; j++) {
//       if (prices[j] - prices[i] > max) {
//         max = prices[j] - prices[i]
//       }
//     }
//   }
// }
function maxProfit(prices) {
    var min = prices[0];
    var max = 0;
    for (var i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        }
        else if (max < prices[i] - min) {
            max = prices[i] - min;
        }
    }
    return max;
}
console.log(maxProfit([2, 7, 5, 1, 6, 4]));
