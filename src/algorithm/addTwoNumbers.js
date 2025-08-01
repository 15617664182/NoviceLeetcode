var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
function addTwoNumbers(l1, l2) {
    var sum = new ListNode(0);
    var head = sum;
    var addOne = 0;
    while (l1 || l2) {
        var val1 = l1 !== null ? l1.val : 0;
        var val2 = l2 !== null ? l2.val : 0;
        // l1 l2 相加 同时加上上一次计算的进位数
        var s = val1 + val2 + addOne;
        // 将这次计算的进位数放进去
        addOne = val1 + val2 >= 10 ? 1 : 0;
        sum.next = new ListNode(s % 10);
        sum = sum.next;
        if (l1.next) {
            l1 = l1.next;
        }
        if (l2.next) {
            l2 = l2.next;
        }
    }
    return head.next;
}
// /2,4,3
var a1 = new ListNode(2, new ListNode(3, new ListNode(4)));
var a2 = new ListNode(5, new ListNode(6, new ListNode(4)));
console.log(addTwoNumbers(a1, a2));
