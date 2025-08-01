/*
 * @Description: 发布订阅模式
 * @Author: smile
 * @Date: 2025-05-28 21:14:53
 * @LastEditors: smile
 * @LastEditTime: 2025-05-30 15:37:33
 */

export class Publishsubscription{
    msg: {};
    subscribers: Array<Function>
    constructor(){
        this.msg = {}
    }
    subscribe(type:String,cb:Function){
        this.subscribers.push(cb)
    }
    publish(data:any){
        this.msg
        this.subscribers.forEach(fn=>fn(data))
    }
}
