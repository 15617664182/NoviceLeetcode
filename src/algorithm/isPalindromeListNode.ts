/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
//          思路： 遍历链表添加进arr
var isPalindrome = function(head) {
    var arr=[]
    while (head){
        arr.push(head.val)
        head = head.next
    }
    var l =0;
    var r = arr.length-1
    while (l < r){ // 循环条件
        if(arr[l]!=arr[r]){ // 一旦不相等即为 不是回文
            return false
            break;
        }
        l++
        r--
    }
    return true
};
