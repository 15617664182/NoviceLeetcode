/* 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
示例 2：
输入：head = [1], n = 1
输出：[]
示例 3：
输入：head = [1,2], n = 1
输出：[1]
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head:ListNode, n:number) {
    // 思路 快慢指针 ---
    var dummy = new ListNode(0,head)
    var l:ListNode|null =  dummy,
        r:ListNode|null = dummy;

    // 快指针r 先走n+1步
    for (var idx = 0;idx<=n;idx++){
        r = r!.next
    }
    while (r!=null){
        l = l!.next;
        r = r!.next
    }
    l!.next = l!.next!.next
    return dummy.next;
};
