/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * head = [1,2,3,4,5]
 * 输出：[5,4,3,2,1]
 * 1212121
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
var cur = head,pre=null;
       while (cur){
           // 缓存下个节点
           var temp = cur.next
           // 将当前节点指向上个节点
            cur.next = pre
           // 将pre指针右移
           pre = cur
           // cur 指针右移
           cur = temp
       }
       return pre
};
