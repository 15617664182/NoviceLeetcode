/*
 * @Description: 策略模式
 * @Author: smile
 * @Date: 2025-05-30 15:31:44
 * @LastEditors: smile
 * @LastEditTime: 2025-05-31 08:59:23
 */
export class StrategicMode {
    constructor() {
        this.strategies = {}
    }
    strategies: {}
    // 添加策略
    addStrategy(name: string, fn: Function) {
        this.strategies[name] = fn
    }
    addDefault(fn:Function){
        this.strategies["DEFAULT"] = fn
    }
    // // 执行策略
    execute(name: string, ...args: any) {
        if(!this.strategies[name]){
            this.strategies["DEFAULT"](...args)
        }else{
            this.strategies[name](...args)
        }
    }
}



//  应用场景

// 未使用策略模式
// function test(type:string){
//     switch (type){
//         case 'a':
//             console.log('AAAAA')
//             break;
//         case 'b':
//             console.log('BBBBB')
//             break;
//         case 'c':
//             console.log('CCCC')
//             break;
//             // ... 
//         default:
//             console.log('DEFAULT')
//             break;
//     }
// }
// 策略模式


function getStrategy(msgType:any,data:any){
    const strategy = [
        {type:"a", fn:(data:any)=>{console.log("AAAAA",data)}},
        {type:"b", fn:(data:any)=>{console.log("BBBBB",data)}},
        {type:"c", fn:(data:any)=>{console.log("CCCC",data)}},
    ]
    const defauleFn = (data)=>{
        console.log("default")
    }
    var strategicMode = new StrategicMode();
    strategy.map(el =>{
        // 添加所有策略
        strategicMode.addStrategy(el.type,el.fn)
    })
    //  添加默认处理
    strategicMode.addDefault(defauleFn)
    strategicMode.execute(msgType,data)
}
