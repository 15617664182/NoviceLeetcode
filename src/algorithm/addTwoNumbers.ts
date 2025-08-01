

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
function addTwoNumbers(l1: ListNode, l2: ListNode){
  let sum = new ListNode(0);
  let head = sum;
  let carryBig = 0;
  // 终止条件，l1 || l2 链表完成，并且不存在进位数
  while (l1||l2||carryBig!=0){
      let val1 = l1 !== null ?  l1.val : 0
      let val2 = l2 !== null ? l2.val :0

      // l1 l2 相加 同时加上上一次计算的进位数
      var s = val1+val2+carryBig
      // 将这次计算的进位数放进去
      carryBig =  val1 + val2 >= 10 ? 1:0
      sum.next = new ListNode(s%10)
      sum = sum.next
      if(l1.next) {
          l1=l1.next
      }
      if(l2.next){
          l2=l2.next
      }
  }
  return head.next
}
// /2,4,3

var a1 = new ListNode(2,new ListNode(3,new ListNode(4)));
var a2:ListNode = new ListNode(5,new ListNode(6,new ListNode(4)));
console.log(addTwoNumbers(a1 ,a2))
