
/**
 * 输入：l1 = [1,2,4], l2 = [1,3,4]
 * 输出：[1,1,2,3,4,4]
 * 示例 2：
 * 输入：l1 = [], l2 = []
 * 输出：[]
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2){
    var head = new ListNode();
    var cur = head;
    while (list1&&list2){ // 必定有一个为null
       if(list1.val <= list2.val){
           // 1. l1 <= l2 时 将指针指向l1
           cur.next = list1.val
           // 2. 同时将cur的指针往右移动
           cur = cur.next
           // 3. 将list1的指针往右移动一位
           list1 = list1.next
       }else if(list1.val > list2.val){
           // 1. 当l2小于l1时 将cur的指针指向 l2
           cur.next = list2.val
           // 2. 将cur的指针往右移动
           cur = cur.next
           // 3. 将l2的指针往右移动
           list2 = list2.next
       }
    }
    // while 走完之后必定有一个 为null 或者两个都为null
    // 判断当一个为null 时 将cur的指针指向另一个list
    cur.next = list1 ? list1 : list2
    // 返回头指针坐标
    return head.next
}
